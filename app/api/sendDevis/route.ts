import { Resend } from 'resend';
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const {nom, email, ville, date, surface, description} = body;

    const resend = new Resend(process.env.RESEND_API_KEY);

    const messageHtml = `
      <h2>Nouvelle demande de devis</h2>
      <p><strong>Nom :</strong> ${nom}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Ville :</strong> ${ville}</p>
      <p><strong>Date souhaitée :</strong> ${date}</p>
      <p><strong>Surface :</strong> ${surface} m²</p>
      <p><strong>Description :</strong></p>
      <p>${description}</p>
    `;

    const data = await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: process.env.RESEND_TO!,
      subject: "Nouvelle demande de devis",
      html: messageHtml,
    });

    return NextResponse.json({success: true, data});
  } catch (error) {
    return NextResponse.json({success: false, error: error});
  }
}