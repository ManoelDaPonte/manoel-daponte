"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Projects() {
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

		const section = document.getElementById("projects");
		if (section) observer.observe(section);

		return () => {
			if (section) observer.unobserve(section);
		};
	}, []);

	const projects = [
		{
			title: "Outils de Transcription Audio et Modération Twitch",
			description:
				"Développement d'une solution complète de transcription audio automatisée et création d'un plugin de modération intégrable pour streamers Twitch avec des algorithmes de traitement du langage naturel pour la détection de contenu inapproprié.",
			technologies: [
				"Python",
				"Node.js",
				"Next.js",
				"API Twitch",
				"API OpenAI",
			],
			year: "2023",
			location: "Esbjerg, Danemark",
			link: "#",
			githubLink: "#",
		},
		{
			title: "Développement Jeu Vidéo",
			description:
				"Conception et développement d'un prototype de jeu vidéo en 3D avec fonctionnalités multijoueur, implémentation d'une architecture réseau peer-to-peer pour les interactions en temps réel et création de systèmes d'animation avancés.",
			technologies: ["Unity", "C#", "Networking", "Animation"],
			year: "2022",
			location: "Rouen, France",
			link: "#",
			githubLink: "#",
		},
		{
			title: "Classification NLP avec Correction de Biais",
			description:
				"Participation en équipe de 3 étudiants à une compétition internationale (3ème place sur le podium), développement d'algorithmes de classification de métiers basés sur des descriptions textuelles et implémentation de méthodes de correction des biais de genre dans les résultats.",
			technologies: [
				"Python",
				"NLP",
				"Classification",
				"Fairness algorithms",
			],
			year: "2021",
			location: "Compétition Kaggle",
			link: "#",
			githubLink: "#",
		},
	];

	// Animation variants
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 30 },
		show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	return (
		<section id="projects" className="py-20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					animate={
						isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
					}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-3xl font-bold mb-4">
						Projets Significatifs
					</h2>
					<div className="h-1 w-20 bg-primary mx-auto"></div>
					<p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
						Une sélection de projets personnels et professionnels
						que j'ai développés.
					</p>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					variants={container}
					initial="hidden"
					animate={isVisible ? "show" : "hidden"}
				>
					{projects.map((project, index) => (
						<motion.div
							key={index}
							variants={item}
							whileHover={{
								scale: 1.02,
								boxShadow:
									"0 10px 30px -15px var(--color-ring)",
							}}
							transition={{ duration: 0.2 }}
						>
							<Card className="h-full flex flex-col overflow-hidden">
								<div className="relative h-56 overflow-hidden">
									<Image
										src="/placeholder.png"
										alt={`Image du projet ${project.title}`}
										fill
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										className="object-cover transition-transform duration-500 hover:scale-105"
									/>
								</div>

								<CardHeader>
									<CardTitle>{project.title}</CardTitle>
									<div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
										<div className="flex items-center gap-1">
											<Calendar size={14} />
											<span>{project.year}</span>
										</div>
										<div className="flex items-center gap-1">
											<MapPin size={14} />
											<span>{project.location}</span>
										</div>
									</div>
								</CardHeader>

								<CardContent className="flex-grow">
									<p className="text-muted-foreground">
										{project.description}
									</p>

									<div className="mt-4">
										<h4 className="font-semibold mb-2">
											Technologies utilisées:
										</h4>
										<div className="flex flex-wrap gap-2">
											{project.technologies.map(
												(tech, techIndex) => (
													<span
														key={techIndex}
														className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
													>
														{tech}
													</span>
												)
											)}
										</div>
									</div>
								</CardContent>

								<CardFooter className="flex justify-between pt-4 border-t border-border">
									<Button
										asChild
										variant="outline"
										size="sm"
										className="gap-1"
									>
										<Link
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											<ExternalLink size={14} />
											<span>Voir le projet</span>
										</Link>
									</Button>

									<Button
										asChild
										variant="github"
										size="sm"
										className="gap-1"
									>
										<Link
											href={project.githubLink}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Github size={14} />
											<span>GitHub</span>
										</Link>
									</Button>
								</CardFooter>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
