import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ to, subject, html }) {
    try {
        console.log(`📧 Attempting to send email to: ${to}`);
        
        const { data, error } = await resend.emails.send({
            from: `${process.env.NODE_ENV === "production" ? process.env.FROM_EMAIL : "Acme <onboarding@resend.dev>"}`,
            to: [`${to}`],
            subject: subject,
            html: html,
        });

        if (error) {
            console.error(`❌ Failed to send email to ${to}:`, error.message);
            throw new Error(`Email delivery failed: ${error.message}`);
        }

        console.log(`✅ Email sent successfully to ${to}`);
        return data;
    } catch (err) {
        console.error(`❌ Email service error:`, err.message);
        throw err;
    }
}