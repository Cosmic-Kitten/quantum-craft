import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, additionalInfo } = body;

    // Send the email to your personal inbox
    const { data, error } = await resend.emails.send({
      from: 'Quantum Craft <onboarding@resend.dev>', // Use your verified domain later
      to: ['your-email@example.com'],             // <-- PUT YOUR EMAIL HERE
      subject: `New Website Request from ${fullName}`,
      html: `
        <h2>New Custom Website Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Additional Info:</strong> ${additionalInfo}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
