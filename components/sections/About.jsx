"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Download } from "lucide-react";

export default function About() {
	const [isVisible, setIsVisible] = useState(false);

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

		const section = document.getElementById("about");
		if (section) observer.observe(section);

		return () => {
			if (section) observer.unobserve(section);
		};
	}, []);

	return (
		<section id="about" className="py-20 bg-secondary">
			<div
				className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
					isVisible
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-10"
				}`}
			>
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold mb-4">À propos de moi</h2>
					<div className="h-1 w-20 bg-primary mx-auto"></div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div className="relative aspect-square rounded-full overflow-hidden mx-auto md:ml-0 max-w-xs">
						{/* This is a placeholder. Replace with your actual image */}
						<div className="w-full h-full bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center text-white">
							<span className="text-lg">Photo</span>
						</div>
					</div>

					<div>
						<h3 className="text-2xl font-semibold mb-4">
							Ingénieur full-stack & data scientist
						</h3>

						<p className="mb-4 text-muted-foreground">
							Spécialisé dans l'ingénierie de données et le
							développement full-stack, je conçois des solutions
							analytiques innovantes avec une approche orientée
							résultats et business value.
						</p>

						<p className="mb-6 text-muted-foreground">
							Avec une expérience internationale et une expertise
							technique solide, je peux développer des solutions
							end-to-end répondant précisément aux besoins
							métiers, avec une appétence particulière pour les
							environnements dynamiques et innovants.
						</p>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
							<div>
								<h4 className="font-semibold mb-2">
									Localisation
								</h4>
								<p className="text-muted-foreground">
									Toulouse, France
								</p>
							</div>

							<div>
								<h4 className="font-semibold mb-2">Email</h4>
								<p className="text-muted-foreground">
									daponte.manoel@gmail.com
								</p>
							</div>

							<div>
								<h4 className="font-semibold mb-2">
									Téléphone
								</h4>
								<p className="text-muted-foreground">
									(+33) 6 82 69 71 32
								</p>
							</div>

							<div>
								<h4 className="font-semibold mb-2">Langues</h4>
								<p className="text-muted-foreground">
									Français (natif), Anglais (professionnel)
								</p>
							</div>
						</div>

						<a
							href="/resume_cv.pdf"
							download
							className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
						>
							<Download size={20} />
							Télécharger mon CV
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
