// app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configuration du transporteur d'email
const transporter = nodemailer.createTransport({
	host: process.env.EMAIL_HOST || "smtp.gmail.com",
	port: process.env.EMAIL_PORT || 587,
	secure: false, // true pour 465, false pour les autres ports
	auth: {
		user: process.env.EMAIL_USER, // ton adresse email
		pass: process.env.EMAIL_PASSWORD, // ton mot de passe d'application (si Gmail)
	},
});

export async function POST(req) {
	try {
		// Parsing du corps de la requête
		const body = await req.json();
		const { name, email, subject, message } = body;

		// Validation de base
		if (!name || !email || !subject || !message) {
			return NextResponse.json(
				{ message: "Tous les champs sont requis" },
				{ status: 400 }
			);
		}

		// Validation de l'email
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return NextResponse.json(
				{ message: "Format d'email invalide" },
				{ status: 400 }
			);
		}

		// Options pour l'email
		const mailOptions = {
			from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
			to: "daponte.manoel@gmail.com", // L'adresse où tu veux recevoir les messages
			replyTo: email,
			subject: `[Contact Portfolio] ${subject}`,
			text: `Nouveau message de ${name} (${email}):\n\n${message}`,
			html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0048A5;">Nouveau message de contact</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Sujet:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #0048A5;">
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #666;">Ce message a été envoyé depuis votre formulaire de contact de portfolio.</p>
        </div>
      `,
		};

		// Pour le développement, tu peux simplement simuler l'envoi
		if (process.env.NODE_ENV === "development" && !process.env.EMAIL_USER) {
			console.log("Mode développement - Email simulé:", mailOptions);
			return NextResponse.json({
				message:
					"Message envoyé avec succès (simulation en développement)",
			});
		}

		// Envoi de l'email
		await transporter.sendMail(mailOptions);

		// Retourner une réponse réussie
		return NextResponse.json({
			message: "Message envoyé avec succès",
		});
	} catch (error) {
		console.error("Erreur lors de l'envoi du message:", error);

		return NextResponse.json(
			{ message: "Une erreur s'est produite lors de l'envoi du message" },
			{ status: 500 }
		);
	}
}
