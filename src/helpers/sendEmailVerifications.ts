import { resend } from "../lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";

import { ApiResponse } from "@/types/ApiResponse";


export async function sendVerificationEmail(
    email:string,
    username: string,
    verifyCode: string

): Promise<ApiResponse>{

    try{
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Message Any Verification Code',
            react:VerificationEmail({username, otp: verifyCode}),
        });
        return {success: true , message: 'emails for verification sent successfully'}

    }catch(emailerror){
      console.log("Error sending Emails", emailerror)
      return {success: false , message: 'failed to send emails for verification'}
    }
}