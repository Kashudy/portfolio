import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export const POST = async (request: Request) => {
  const { name, email, message } = await request.json();

  sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");
  const msg = {
    to: "est.bejar@gmail.com", // Change to your recipient
    from: "kashudyord@gmail.com", // Change to your verified sender
    subject: "Email Form Submission from Portfolio Site",
    text: "test",
    html: `
    <strong> ${name} has contancted you from your portfolio site</strong>
    <p> ${message}</p>
    <strong>sent from ${email}</strong>
    `,
  };

  try {
    await sgMail.send(msg).then(() => {});
    return NextResponse.json({
      message: "Email sent successfully",
      status: 200,
      submitted: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Email failed to send",
      status: 500,
      submitted: false,
    });
  }
};
