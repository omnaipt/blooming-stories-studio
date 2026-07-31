// Vercel Function — recebe o formulário de orçamento e envia email via Resend.
// Substitui a edge function Supabase `send-contact-email`.
// Requer a variável de ambiente RESEND_API_KEY no projeto Vercel.

const TO_EMAIL = "geral@aminhaflorinha.pt";
const FROM_EMAIL = "A Minha Florinha <geral@aminhaflorinha.pt>";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "content-type",
};

const JSON_HEADERS = { "Content-Type": "application/json", ...CORS };

/** Escapa HTML para impedir injecção no email recebido. */
function esc(value: unknown): string {
  return String(value ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c] as string,
  );
}

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  date?: string;
  message?: string;
  language?: string;
  company?: string; // honeypot: preenchido apenas por bots
}

function buildHtml(p: Required<Pick<ContactPayload, "name" | "email" | "phone" | "service" | "message">> & { date?: string; pt: boolean }) {
  const { pt } = p;
  const row = (label: string, value: string) =>
    `<div class="field"><div class="label">${label}</div><div class="value">${value}</div></div>`;

  return `<html>
  <head><meta charset="utf-8" /><style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #D4A574; color: #fff; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #D4A574; }
    .value { margin-top: 5px; }
    .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
  </style></head>
  <body><div class="container">
    <div class="header">
      <h1>A Minha Florinha</h1>
      <h2>${pt ? "Novo Pedido de Orçamento" : "New Quote Request"}</h2>
    </div>
    <div class="content">
      ${row(pt ? "Nome:" : "Name:", esc(p.name))}
      ${row("Email:", `<a href="mailto:${esc(p.email)}">${esc(p.email)}</a>`)}
      ${row(pt ? "Telefone:" : "Phone:", `<a href="tel:${esc(p.phone)}">${esc(p.phone)}</a>`)}
      ${row(pt ? "Tipo de Serviço:" : "Service Type:", esc(p.service))}
      ${p.date ? row(pt ? "Data do Evento/Entrega:" : "Event/Delivery Date:", esc(p.date)) : ""}
      ${row(pt ? "Mensagem:" : "Message:", esc(p.message).replace(/\n/g, "<br />"))}
    </div>
    <div class="footer"><p>${
      pt
        ? "Enviado através do formulário de contacto de aminhaflorinha.pt"
        : "Sent through the contact form at aminhaflorinha.pt"
    }</p></div>
  </div></body></html>`;
}

async function handler(request: Request): Promise<Response> {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS });
  }

  if (request.method !== "POST") {
    return new Response(JSON.stringify({ success: false, error: "Method not allowed" }), {
      status: 405,
      headers: JSON_HEADERS,
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY não está definida");
    return new Response(JSON.stringify({ success: false, error: "Server misconfigured" }), {
      status: 500,
      headers: JSON_HEADERS,
    });
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return new Response(JSON.stringify({ success: false, error: "Invalid JSON" }), {
      status: 400,
      headers: JSON_HEADERS,
    });
  }

  // Honeypot: se vier preenchido, finge sucesso e descarta.
  if (payload.company) {
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: JSON_HEADERS });
  }

  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const phone = (payload.phone ?? "").trim();
  const service = (payload.service ?? "").trim();
  const message = (payload.message ?? "").trim();
  const date = (payload.date ?? "").trim();
  const pt = payload.language !== "en";

  if (!name || !email || !phone || !service || !message) {
    return new Response(JSON.stringify({ success: false, error: "Missing required fields" }), {
      status: 400,
      headers: JSON_HEADERS,
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || name.length > 200 || message.length > 5000) {
    return new Response(JSON.stringify({ success: false, error: "Invalid input" }), {
      status: 400,
      headers: JSON_HEADERS,
    });
  }

  const subject = pt
    ? `Novo Pedido de Orçamento - ${service}`
    : `New Quote Request - ${service}`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject,
        html: buildHtml({ name, email, phone, service, message, date, pt }),
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend rejeitou o envio:", res.status, detail);
      return new Response(JSON.stringify({ success: false, error: "Email provider error" }), {
        status: 502,
        headers: JSON_HEADERS,
      });
    }

    const data = await res.json();
    return new Response(JSON.stringify({ success: true, id: data?.id }), {
      status: 200,
      headers: JSON_HEADERS,
    });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return new Response(JSON.stringify({ success: false, error: "Unexpected error" }), {
      status: 500,
      headers: JSON_HEADERS,
    });
  }
}

// Assinatura Web da Vercel. Um `export default function (request)` seria
// interpretado como o handler Node (req, res) e o Response devolvido seria
// ignorado, deixando o pedido pendurado até timeout.
export default { fetch: handler };
