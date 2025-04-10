import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend("re_WfHFPxET_3kuedy38teATcmmWyceTWYpi");

export async function POST(req: Request) {
  try {
    const dataForm = await req.json();
    try {
      const data = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: ["duque2607j@gmail.com"],
        subject: "JuaanDuque landing",
        react: EmailTemplate({
          firstName: dataForm.username,
          message: dataForm.message,
          email: dataForm.email,
        }),
        text: "JuaanDuque",
      });
      return Response.json(data);
    } catch (error) {
      return Response.json({ error });
    }
  } catch (error) {
    return Response.json({ error });
  }
}
