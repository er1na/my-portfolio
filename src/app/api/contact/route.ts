import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return Response.json(
        { ok: false, error: "missing fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ern20501prg@gmail.com",
      subject: `[Portfolio] ${subject}`,
      html: `
        <p><strong>From:</strong> ${name} (${email})</p>
        <p>${message}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return Response.json({ ok: false, error: "send_failed" }, { status: 500 });
  }
}
