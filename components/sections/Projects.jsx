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
			title: "Wise Twin",
			description:
				"Plateforme SaaS de formation 3D immersive pour techniciens industriels. Direction complète du développement technique et conception d'une architecture intégrant des builds Unity dans un environnement web React.",
			technologies: [
				"React",
				"Next.js",
				"Python",
				"Node.js",
				"Unity",
				"Azure",
				"PostgreSQL",
			],
			year: "2024",
			location: "Toulouse, France",
			link: "https://www.wisetwin.eu/",
			githubLink: null,
			isFounder: true,
			image: "/images/wisetwin.png",
		},
		{
			title: "Bootstrap-Now",
			description:
				"Plateforme SaaS facilitant l'accès des auto-entrepreneurs au marché. Création d'un outil propriétaire de recherche d'opportunités business et développement d'un générateur de business plans collaboratif associant intelligence artificielle.",
			technologies: [
				"React",
				"Next.js",
				"Node.js",
				"PostgreSQL",
				"Prisma",
				"OpenAI API",
				"Vercel",
			],
			year: "2024",
			location: "Toulouse, France",
			link: "https://www.bootstrap-now.com/",
			githubLink: null,
			isFounder: true,
			image: "/images/bootstrap-now.png",
		},
		{
			title: "Outils de Transcription Audio",
			description:
				"Développement d'une solution complète de transcription audio automatisée pour faciliter la génération de sous-titres et la production de contenu texte à partir de fichiers audio.",
			technologies: ["Python", "Next.js", "Node.js", "API OpenAI"],
			year: "2023",
			location: "Esbjerg, Danemark",
			link: "https://first-app-func-front.vercel.app/",
			githubLink: "https://github.com/ManoelDaPonte/ekko-front",
			image: "/images/transcription.png",
		},
		{
			title: "Modération Automatique Twitch",
			description:
				"Création d'un plugin de modération intégrable pour streamers Twitch avec des algorithmes de traitement du langage naturel pour la détection de contenu inapproprié et la gestion automatisée du chat.",
			technologies: ["Python", "Node.js", "Next.js", "API Twitch", "NLP"],
			year: "2023",
			location: "Projet Open Source",
			link: "https://twitch-moderation-front-rlrtb9p1u-manoeldapontes-projects.vercel.app/",
			githubLink:
				"https://github.com/ManoelDaPonte/twitch-moderation-front",
			image: "/images/twitch-moderation.png",
		},
		{
			title: "Invasion - Jeu Vidéo",
			description:
				"Conception et développement d'un prototype de jeu vidéo en 3D avec fonctionnalités multijoueur, implémentation d'une architecture réseau peer-to-peer pour les interactions en temps réel.",
			technologies: ["Unity", "C#", "Networking", "Animation"],
			year: "2022",
			location: "Rouen, France",
			link: null,
			githubLink: "https://github.com/ManoelDaPonte/Invasion",
			image: "/images/invasion-game.png",
		},
		{
			title: "Classification NLP avec Correction de Biais",
			description:
				"Participation en équipe de 3 étudiants à une compétition internationale (3ème place sur le podium), développement d'algorithmes de classification de métiers basés sur des descriptions textuelles.",
			technologies: [
				"Python",
				"NLP",
				"Classification",
				"Fairness algorithms",
			],
			year: "2021",
			location: "Compétition Kaggle",
			link: null,
			githubLink: null,
			image: "/images/nlp-classification.svg",
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
					<h2 className="text-3xl font-bold mb-4">Projets</h2>
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
							<Card className="h-full flex flex-col overflow-hidden border-border hover:border-primary/50 transition-all duration-300">
								{/* Image container avec bordure inférieure */}
								<div className="relative h-56 overflow-hidden border-b border-border">
									{project.image ? (
										<Image
											src={project.image}
											alt={`Image du projet ${project.title}`}
											fill
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											className="object-cover transition-transform duration-500 hover:scale-105"
											quality={90}
										/>
									) : (
										// Fallback si l'image n'est pas disponible
										<div className="w-full h-full bg-muted flex items-center justify-center">
											<span className="text-muted-foreground">
												Image non disponible
											</span>
										</div>
									)}

									{/* Overlay semi-transparent en bas de l'image pour améliorer la lisibilité */}
									<div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/30 to-transparent"></div>
								</div>

								<CardHeader className="pt-5">
									<CardTitle className="flex items-center gap-2 text-lg">
										{project.title}
										{project.isFounder && (
											<span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
												Fondateur
											</span>
										)}
									</CardTitle>
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

								<CardContent className="flex-grow pb-4">
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
														className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs"
													>
														{tech}
													</span>
												)
											)}
										</div>
									</div>
								</CardContent>

								<CardFooter className="flex justify-between pt-4 border-t border-border">
									{project.link ? (
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
									) : (
										<div></div>
									)}

									{project.githubLink ? (
										project.githubBackendLink ? (
											<div className="flex gap-2">
												<Button
													asChild
													variant="outline"
													size="sm"
													className="gap-1"
												>
													<Link
														href={
															project.githubLink
														}
														target="_blank"
														rel="noopener noreferrer"
													>
														<Github size={14} />
														<span>Frontend</span>
													</Link>
												</Button>
												<Button
													asChild
													variant="outline"
													size="sm"
													className="gap-1"
												>
													<Link
														href={
															project.githubBackendLink
														}
														target="_blank"
														rel="noopener noreferrer"
													>
														<Github size={14} />
														<span>Backend</span>
													</Link>
												</Button>
											</div>
										) : (
											<Button
												asChild
												variant="outline"
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
										)
									) : (
										<div></div>
									)}
								</CardFooter>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
