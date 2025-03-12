"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission - in real app, replace with actual API call
		setTimeout(() => {
			setIsSubmitting(false);
			setSubmitted(true);
			setFormState({
				name: "",
				email: "",
				subject: "",
				message: "",
			});

			// Reset success message after 5 seconds
			setTimeout(() => {
				setSubmitted(false);
			}, 5000);
		}, 1500);
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
			content: "390 route de Saint Simon, Toulouse, France",
			link: "https://maps.google.com/?q=390+route+de+Saint+Simon,+Toulouse,+France",
		},
	];

	return (
		<section id="contact" className="py-20">
			<div
				className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
					isVisible
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-10"
				}`}
			>
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold mb-4">Me Contacter</h2>
					<div className="h-1 w-20 bg-primary mx-auto"></div>
					<p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
						N'hésitez pas à me contacter pour discuter de vos
						projets ou opportunités de collaboration.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="lg:col-span-1 space-y-6">
						{contactInfo.map((item, index) => (
							<a
								key={index}
								href={item.link}
								target={
									item.title === "Adresse"
										? "_blank"
										: "_self"
								}
								rel="noopener noreferrer"
								className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-sm border border-border hover:border-primary transition-colors"
							>
								<div className="text-primary mt-1">
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
							</a>
						))}
					</div>

					<div className="lg:col-span-2">
						<div className="bg-card rounded-lg shadow-sm border border-border p-6">
							<h3 className="text-xl font-semibold mb-6">
								Envoyez-moi un message
							</h3>

							{submitted ? (
								<div className="bg-success/10 border border-success text-success p-4 rounded-md">
									Votre message a été envoyé avec succès ! Je
									vous répondrai dans les plus brefs délais.
								</div>
							) : (
								<form onSubmit={handleSubmit}>
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
										<div>
											<label
												htmlFor="name"
												className="block mb-2 text-sm font-medium"
											>
												Nom
											</label>
											<input
												type="text"
												id="name"
												name="name"
												value={formState.name}
												onChange={handleChange}
												required
												className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
												placeholder="Votre nom"
											/>
										</div>

										<div>
											<label
												htmlFor="email"
												className="block mb-2 text-sm font-medium"
											>
												Email
											</label>
											<input
												type="email"
												id="email"
												name="email"
												value={formState.email}
												onChange={handleChange}
												required
												className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
												placeholder="Votre email"
											/>
										</div>
									</div>

									<div className="mb-4">
										<label
											htmlFor="subject"
											className="block mb-2 text-sm font-medium"
										>
											Sujet
										</label>
										<input
											type="text"
											id="subject"
											name="subject"
											value={formState.subject}
											onChange={handleChange}
											required
											className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
											placeholder="Sujet de votre message"
										/>
									</div>

									<div className="mb-6">
										<label
											htmlFor="message"
											className="block mb-2 text-sm font-medium"
										>
											Message
										</label>
										<textarea
											id="message"
											name="message"
											value={formState.message}
											onChange={handleChange}
											required
											rows={6}
											className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
											placeholder="Votre message"
										></textarea>
									</div>

									<button
										type="submit"
										disabled={isSubmitting}
										className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors disabled:opacity-70"
									>
										{isSubmitting ? (
											<>
												<div className="h-5 w-5 border-t-2 border-r-2 border-white rounded-full animate-spin"></div>
												<span>Envoi en cours...</span>
											</>
										) : (
											<>
												<Send size={18} />
												<span>Envoyer le message</span>
											</>
										)}
									</button>
								</form>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
