import sgMail from "@sendgrid/mail";
import { NextRequest } from "next/server";

export default async function POST(request: NextRequest) {
  if (request.method === "POST") {
    // Ensure that the SENDGRID_API_KEY is defined
    if (!process.env.SENDGRID_API_KEY) {
      return new Response(
        JSON.stringify({ error: "SENDGRID_API_KEY is not defined" }),
        { status: 403 }
      );
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: "est.bejar@gmail.com", // Change to your recipient
      from: "kashudyord@gmail.com", // Change to your verified sender
      subject: "Sending with SendGrid is Fun",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };

    try {
      await sgMail.send(msg);
      console.log("Email sent");
      return new Response(
        JSON.stringify({ message: "Email sent successfully" }),
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return new Response(
        JSON.stringify({ error: "An error occurred while sending the email" }),
        { status: 500 }
      );
    }
  } else {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 402,
    });
  }
}
