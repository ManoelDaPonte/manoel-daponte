"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Calendar, MapPin, Activity } from "lucide-react";
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
			title: "WiseTwin - SaaS de formation industrielle",
			description:
				"Plateforme SaaS multitenant de formation à la sécurité industrielle regroupant trois produits (3D immersive, documentaire, visites de prévention). ~80 000 lignes de TypeScript, 124 routes API, SSO d'entreprise, MFA, exports de conformité xAPI/cmi5 et Qualiopi, isolation des données par organisation jusqu'au stockage.",
			technologies: [
				"Next.js",
				"React 19",
				"TypeScript",
				"Prisma",
				"PostgreSQL",
				"Azure",
				"Unity WebGL",
			],
			year: "2024 - 2026",
			location: "Toulouse, France",
			link: "https://www.wisetwin.eu/",
			githubLink: null,
			isFounder: true,
			image: "/images/wisetwin.png",
			status: "active",
		},
		{
			title: "Copilote IA HSE",
			description:
				"Agent conversationnel (Claude) qui croise 62 726 accidents industriels de la base publique ARIA avec les incidents internes d'une organisation : analyse de tendances, recommandation de formations et création de plans d'action après confirmation humaine. RAG pgvector, 12 outils, streaming SSE, analyse de photos de chantier, gouvernance des coûts par organisation.",
			technologies: [
				"Python",
				"FastAPI",
				"Claude (Anthropic)",
				"pgvector",
				"Voyage AI",
				"Docker",
				"Azure Container Apps",
			],
			year: "2025 - 2026",
			location: "WiseTwin",
			link: "https://app.wisetwin.eu/",
			githubLink: null,
			isFounder: true,
			image: "/images/wisetwin-ai.svg",
			status: "active",
		},
		{
			title: "WiseAtlas - Cartes 3D interactives",
			description:
				"Éditeur SaaS multitenant de cartes de territoire : cartographie 3D photoréaliste (Google Maps 3D), modèles 3D géolocalisés, points d'intérêt, réseaux et zones, storytelling par timeline et blocs de contenu riches avec graphiques. Traduction multilingue par LLM intégrée, avec suivi des coûts.",
			technologies: [
				"Next.js",
				"React 19",
				"Google Maps 3D",
				"Prisma",
				"PostgreSQL",
				"Azure Blob",
				"Claude (Anthropic)",
			],
			year: "2025 - 2026",
			location: "WiseTwin",
			link: "https://wiseatlas.wisetwin.eu/",
			githubLink: null,
			isFounder: true,
			image: "/images/wiseatlas.svg",
			status: "active",
		},
		{
			title: "Splat Editor - SafetyTour",
			description:
				"Éditeur web de Gaussian Splats 3D : numérisation photoréaliste de sites industriels réels, nettoyage de scène avec sélection GPU (shaders GLSL custom), hotspots pédagogiques avec quiz, visites guidées scénarisées et export HTML autonome. Analytics de progression des apprenants remontées au SaaS.",
			technologies: [
				"PlayCanvas",
				"WebGL2",
				"GLSL",
				"Next.js",
				"TypeScript",
				"Zustand",
				"Azure",
			],
			year: "2025 - 2026",
			location: "WiseTwin",
			link: null,
			githubLink: null,
			isFounder: true,
			image: "/images/splat-editor.svg",
			status: "active",
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
			link: null,
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
			link: "https://twitch-moderation-front.vercel.app/",
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
							<Card className="h-full flex flex-col overflow-hidden pt-0 gap-4 border-border hover:border-primary/50 transition-all duration-300">
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

									{/* Indicateur de statut actif */}
									{project.status === "active" && (
										<div className="absolute top-3 right-3 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-lg animate-pulse">
											<Activity size={12} />
											<span>Actif</span>
										</div>
									)}
								</div>

								<CardHeader>
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
									{!project.link && !project.githubLink && (
										<p className="text-sm text-muted-foreground italic">
											{project.footerNote ||
												"Projet privé : contactez-moi pour une présentation détaillée."}
										</p>
									)}
									{project.link ? (
										<div className="flex items-center gap-2">
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

											{project.status === "active" && (
												<div className="flex items-center text-emerald-500">
													<Activity
														size={18}
														className="animate-pulse"
													/>
												</div>
											)}
										</div>
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
