import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    let name = "";
    let phone = "";
    let email = "";
    let subject = "New Website Inquiry";
    let htmlBody = `<h3>New Submission Details:</h3><table border="1" cellpadding="6" style="border-collapse: collapse; border: 1px solid #ddd; font-family: sans-serif;">`;
    const contentType = request.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const body = await request.json();
      name = body.name || "";
      phone = body.phone || "";
      email = body.email || "";
      const formName = body.formName || body["form-name"];
      if (formName) {
        subject = `New Lead: [${formName}] Request`;
      }
      for (const [key, val] of Object.entries(body)) {
        if (key === "form-name" || key === "formName" || key === "bot-field" || key === "consent") continue;
        htmlBody += `<tr><td style="background-color: #f9f9f9; width: 150px;"><strong>${key}</strong></td><td>${val}</td></tr>`;
      }
    } else {
      const data = await request.formData();
      name = data.get("name")?.toString() || "";
      phone = data.get("phone")?.toString() || "";
      email = data.get("email")?.toString() || "";
      const formName = data.get("form-name")?.toString();
      if (formName) {
        subject = `New Lead: [${formName}] Request`;
      }
      for (const [key, val] of data.entries()) {
        if (key === "form-name" || key === "bot-field" || key === "consent") continue;
        htmlBody += `<tr><td style="background-color: #f9f9f9; width: 150px;"><strong>${key}</strong></td><td>${val}</td></tr>`;
      }
    }
    htmlBody += `</table>`;
    if (!name && !phone && !email) {
      return new Response(
        JSON.stringify({ error: "Missing contact information" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const host = "smtp.gmail.com";
    const isGmail = host.includes("gmail.com");
    const transporterConfig = isGmail ? {
      service: "gmail",
      auth: {
        user: "webnoxbackend@gmail.com",
        pass: "ldpufmhhybdvmqvn"
      }
    } : {
      host,
      port: Number("465"),
      secure: true,
      auth: {
        user: "webnoxbackend@gmail.com",
        pass: "ldpufmhhybdvmqvn"
      }
    };
    const transporter = nodemailer.createTransport(transporterConfig);
    await transporter.sendMail({
      from: `"${name || "Ermis Website"}" <${"webnoxbackend@gmail.com"}>`,
      to: "webnoxbackend@gmail.com",
      replyTo: email || `${phone}@no-email.com`,
      subject,
      html: htmlBody
    });
    return new Response(
      JSON.stringify({ message: "Lead successfully sent!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("SMTP Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send lead." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
