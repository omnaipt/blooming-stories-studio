import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
  language: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, service, date, message, language }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission:", { name, email, phone, service, date, language });

    const emailSubject = language === "pt" 
      ? `Novo Pedido de Orçamento - ${service}` 
      : `New Quote Request - ${service}`;

    const emailHtml = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #D4A574; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #D4A574; }
            .value { margin-top: 5px; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🌸 A Minha Florinha</h1>
              <h2>${language === "pt" ? "Novo Pedido de Orçamento" : "New Quote Request"}</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">${language === "pt" ? "Nome:" : "Name:"}</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">${language === "pt" ? "Telefone:" : "Phone:"}</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              <div class="field">
                <div class="label">${language === "pt" ? "Tipo de Serviço:" : "Service Type:"}</div>
                <div class="value">${service}</div>
              </div>
              ${date ? `
              <div class="field">
                <div class="label">${language === "pt" ? "Data do Evento/Entrega:" : "Event/Delivery Date:"}</div>
                <div class="value">${date}</div>
              </div>
              ` : ""}
              <div class="field">
                <div class="label">${language === "pt" ? "Mensagem:" : "Message:"}</div>
                <div class="value">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>${language === "pt" ? "Este email foi enviado através do formulário de contacto do website." : "This email was sent through the website contact form."}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailResponse = await resend.emails.send({
      from: "A Minha Florinha <geral@aminhaflorinha.pt>",
      to: ["geral@aminhaflorinha.pt"],
      reply_to: email,
      subject: emailSubject,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
