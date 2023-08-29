import sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

if (process.env.SendGrid_API_KEY) {
  sgMail.setApiKey(process.env.SendGrid_API_KEY);
}

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await sgMail.send({
      to: "kashudyord@gmail.com",
      from: "kashudyord@gmail.cmom",
      subject: "Test",
      text: "Test mail",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error sending email" });
  }
  return res.status(200).json({ message: "Email sent" });
};

export default sendEmail;
