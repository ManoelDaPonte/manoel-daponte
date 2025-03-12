"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Contact() {
	const [isVisible, setIsVisible] = useState(false);
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		const section = document.getElementById("contact");
		if (section) observer.observe(section);

		return () => {
			if (section) observer.unobserve(section);
		};
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormState((prev) => ({ ...prev, [name]: value }));
		// Réinitialiser les messages d'erreur lorsque l'utilisateur commence à taper
		if (error) setError("");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError(""); // Réinitialiser les erreurs précédentes

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formState),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(
					data.message ||
						"Une erreur est survenue lors de l'envoi du message"
				);
			}

			// Message envoyé avec succès
			setIsSubmitting(false);
			setSubmitted(true);
			setFormState({
				name: "",
				email: "",
				subject: "",
				message: "",
			});

			// Reset du message de succès après 5 secondes
			setTimeout(() => {
				setSubmitted(false);
			}, 5000);
		} catch (error) {
			console.error("Erreur lors de l'envoi du message:", error);
			setIsSubmitting(false);
			setError(
				error.message ||
					"Une erreur est survenue lors de l'envoi du message"
			);
		}
	};

	const contactInfo = [
		{
			icon: <Mail size={24} />,
			title: "Email",
			content: "daponte.manoel@gmail.com",
			link: "mailto:daponte.manoel@gmail.com",
		},
		{
			icon: <Phone size={24} />,
			title: "Téléphone",
			content: "(+33) 6 82 69 71 32",
			link: "tel:+33682697132",
		},
		{
			icon: <MapPin size={24} />,
			title: "Adresse",
			content: "Route de Saint Simon, Toulouse, France",
			link: "https://maps.google.com/?q=route+de+Saint+Simon,+Toulouse,+France",
		},
	];

	// Animation variants
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.3,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<section id="contact" className="py-20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					animate={
						isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
					}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-3xl font-bold mb-4">Me Contacter</h2>
					<div className="h-1 w-20 bg-primary mx-auto"></div>
					<p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
						N'hésitez pas à me contacter pour discuter de vos
						projets ou opportunités de collaboration.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<motion.div
						className="lg:col-span-1 space-y-6"
						variants={container}
						initial="hidden"
						animate={isVisible ? "show" : "hidden"}
					>
						{contactInfo.map((item, index) => (
							<motion.a
								key={index}
								href={item.link}
								target={
									item.title === "Adresse"
										? "_blank"
										: "_self"
								}
								rel="noopener noreferrer"
								variants={item}
								whileHover={{ scale: 1.03, x: 5 }}
								transition={{ duration: 0.2 }}
							>
								<Card className="border-border hover:border-primary/50 transition-colors overflow-hidden mb-4">
									<CardContent className="p-6 flex items-start gap-4">
										<div className="text-primary">
											{item.icon}
										</div>
										<div>
											<h3 className="font-semibold mb-1">
												{item.title}
											</h3>
											<p className="text-muted-foreground">
												{item.content}
											</p>
										</div>
									</CardContent>
								</Card>
							</motion.a>
						))}
					</motion.div>

					<motion.div
						className="lg:col-span-2"
						initial={{ opacity: 0, y: 30 }}
						animate={
							isVisible
								? { opacity: 1, y: 0 }
								: { opacity: 0, y: 30 }
						}
						transition={{ duration: 0.7, delay: 0.4 }}
					>
						<Card>
							<CardHeader>
								<CardTitle>Envoyez-moi un message</CardTitle>
								<CardDescription>
									Complétez le formulaire ci-dessous et je
									vous répondrai dans les plus brefs délais.
								</CardDescription>
							</CardHeader>
							<CardContent>
								{submitted ? (
									<motion.div
										className="bg-success/10 border border-success text-success p-4 rounded-md"
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.3 }}
									>
										Votre message a été envoyé avec succès !
										Je vous répondrai dans les plus brefs
										délais.
									</motion.div>
								) : (
									<form onSubmit={handleSubmit}>
										{error && (
											<motion.div
												className="flex items-start gap-2 mb-4 p-4 bg-destructive/10 border border-destructive text-destructive rounded-md"
												initial={{ opacity: 0, y: -10 }}
												animate={{ opacity: 1, y: 0 }}
											>
												<AlertTriangle
													size={20}
													className="flex-shrink-0 mt-0.5"
												/>
												<div>
													<p className="font-medium">
														Erreur
													</p>
													<p>{error}</p>
												</div>
											</motion.div>
										)}

										<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
											<div className="space-y-2">
												<label
													htmlFor="name"
													className="block text-sm font-medium"
												>
													Nom
												</label>
												<Input
													id="name"
													name="name"
													value={formState.name}
													onChange={handleChange}
													required
													placeholder="Votre nom"
												/>
											</div>

											<div className="space-y-2">
												<label
													htmlFor="email"
													className="block text-sm font-medium"
												>
													Email
												</label>
												<Input
													type="email"
													id="email"
													name="email"
													value={formState.email}
													onChange={handleChange}
													required
													placeholder="Votre email"
												/>
											</div>
										</div>

										<div className="mb-4 space-y-2">
											<label
												htmlFor="subject"
												className="block text-sm font-medium"
											>
												Sujet
											</label>
											<Input
												id="subject"
												name="subject"
												value={formState.subject}
												onChange={handleChange}
												required
												placeholder="Sujet de votre message"
											/>
										</div>

										<div className="mb-6 space-y-2">
											<label
												htmlFor="message"
												className="block text-sm font-medium"
											>
												Message
											</label>
											<Textarea
												id="message"
												name="message"
												value={formState.message}
												onChange={handleChange}
												required
												rows={6}
												placeholder="Votre message"
											/>
										</div>

										<motion.div
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
										>
											<Button
												type="submit"
												disabled={isSubmitting}
												className="w-full sm:w-auto"
												size="lg"
											>
												{isSubmitting ? (
													<>
														<div className="h-5 w-5 border-t-2 border-r-2 border-white rounded-full animate-spin mr-2"></div>
														<span>
															Envoi en cours...
														</span>
													</>
												) : (
													<>
														<Send
															size={18}
															className="mr-2"
														/>
														<span>
															Envoyer le message
														</span>
													</>
												)}
											</Button>
										</motion.div>
									</form>
								)}
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
