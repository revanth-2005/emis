import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    let name = '';
    let phone = '';
    let email = '';
    let subject = 'New Website Inquiry';
    let htmlBody = `<h3>New Submission Details:</h3><table border="1" cellpadding="6" style="border-collapse: collapse; border: 1px solid #ddd; font-family: sans-serif;">`;

    const contentType = request.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      const body = await request.json();
      name = body.name || '';
      phone = body.phone || '';
      email = body.email || '';
      const formName = body.formName || body['form-name'];
      if (formName) {
        subject = `New Lead: [${formName}] Request`;
      }
      for (const [key, val] of Object.entries(body)) {
        if (key === 'form-name' || key === 'formName' || key === 'bot-field' || key === 'consent') continue;
        htmlBody += `<tr><td style="background-color: #f9f9f9; width: 150px;"><strong>${key}</strong></td><td>${val}</td></tr>`;
      }
    } else {
      const data = await request.formData();
      name = data.get('name')?.toString() || '';
      phone = data.get('phone')?.toString() || '';
      email = data.get('email')?.toString() || '';
      const formName = data.get('form-name')?.toString();
      if (formName) {
        subject = `New Lead: [${formName}] Request`;
      }
      for (const [key, val] of data.entries()) {
        if (key === 'form-name' || key === 'bot-field' || key === 'consent') continue;
        htmlBody += `<tr><td style="background-color: #f9f9f9; width: 150px;"><strong>${key}</strong></td><td>${val}</td></tr>`;
      }
    }
    htmlBody += `</table>`;

    if (!name && !phone && !email) {
      return new Response(
        JSON.stringify({ error: 'Missing contact information' }), 
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Configure SMTP Transporter
    const host = import.meta.env.SMTP_HOST || 'smtp.gmail.com';
    const isGmail = host.includes('gmail.com');

    const transporterConfig: any = isGmail 
      ? {
          service: 'gmail',
          auth: {
            user: import.meta.env.SMTP_USER || '',
            pass: import.meta.env.SMTP_PASS || '',
          },
        }
      : {
          host: host,
          port: Number(import.meta.env.SMTP_PORT || '587'),
          secure: import.meta.env.SMTP_PORT === '465',
          auth: {
            user: import.meta.env.SMTP_USER || '',
            pass: import.meta.env.SMTP_PASS || '',
          },
        };

    const transporter = nodemailer.createTransport(transporterConfig);

    // Send Mail
    await transporter.sendMail({
      from: `"${name || 'Ermis Website'}" <${import.meta.env.SMTP_USER}>`,
      to: import.meta.env.RECEIVER_EMAIL,
      replyTo: email || `${phone}@no-email.com`,
      subject: subject,
      html: htmlBody,
    });

    return new Response(
      JSON.stringify({ message: 'Lead successfully sent!' }), 
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('SMTP Error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send lead.' }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
