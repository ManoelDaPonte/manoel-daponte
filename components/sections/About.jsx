"use client";

import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { IconCloud } from "@/components/magicui/icon-cloud";

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

	// Définition des slugs pour les technologies mentionnées dans votre CV
	const slugs = [
		"python",
		"javascript",
		"react",
		"nextdotjs",
		"nodedotjs",
		"tailwindcss",
		"csharp",
		"fastapi",
		"postgresql",
		"mongodb",
		"neo4j",
		"docker",
		"amazonaws",
		"microsoftazure",
		"vercel",
		"unity",
		"html5",
		"css3",
		"openai",
		"ubuntu",
		"prisma",
	];

	// Création des URLs pour les images
	const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}`);

	return (
		<section id="about" className="py-20 bg-secondary">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					animate={
						isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
					}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-3xl font-bold mb-4">À propos de moi</h2>
					<div className="h-1 w-20 bg-primary mx-auto"></div>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<motion.div
						className="relative rounded-xl overflow-hidden h-[400px] flex items-center justify-center"
						initial={{ opacity: 0, x: -50 }}
						animate={
							isVisible
								? { opacity: 1, x: 0 }
								: { opacity: 0, x: -50 }
						}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<IconCloud images={images} />
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={
							isVisible
								? { opacity: 1, x: 0 }
								: { opacity: 0, x: 50 }
						}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
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
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={
									isVisible
										? { opacity: 1, y: 0 }
										: { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.6, delay: 0.6 }}
							>
								<h4 className="font-semibold mb-2">
									Localisation
								</h4>
								<p className="text-muted-foreground">
									Toulouse, France
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={
									isVisible
										? { opacity: 1, y: 0 }
										: { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.6, delay: 0.7 }}
							>
								<h4 className="font-semibold mb-2">Email</h4>
								<p className="text-muted-foreground">
									daponte.manoel@gmail.com
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={
									isVisible
										? { opacity: 1, y: 0 }
										: { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.6, delay: 0.8 }}
							>
								<h4 className="font-semibold mb-2">
									Téléphone
								</h4>
								<p className="text-muted-foreground">
									(+33) 6 82 69 71 32
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={
									isVisible
										? { opacity: 1, y: 0 }
										: { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.6, delay: 0.9 }}
							>
								<h4 className="font-semibold mb-2">Langues</h4>
								<p className="text-muted-foreground">
									Français (natif), Anglais (professionnel)
								</p>
							</motion.div>
						</div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={
								isVisible
									? { opacity: 1, y: 0 }
									: { opacity: 0, y: 20 }
							}
							transition={{ duration: 0.6, delay: 1 }}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Button asChild size="lg" className="gap-2">
								<a href="/cv-manoeldaponte.pdf" download>
									<Download size={20} />
									Télécharger mon CV
								</a>
							</Button>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
