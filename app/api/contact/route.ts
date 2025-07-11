import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const { email, message } = await request.json();

        if (!email || !message) {
            return NextResponse.json(
                { error: 'Email and message are required'},
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Portfolio Contact: Message from ${email}`,
            html: `
                 <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">
                        New Contact Form Message
                    </h2>
                    
                    <div style="margin: 20px 0;">
                        <p><strong>From:</strong> ${email}</p>
                        <p><strong>Message:</strong></p>
                        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                    
                    <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
                    
                    <p style="color: #666; font-size: 14px;">
                        This message was sent from your portfolio contact form.
                    </p>
                </div>
            `,
            replyTo: email
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );

    } catch (e) {
        console.error('Email sending failed:', e);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}