"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

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

	return (
		<section id="projects" className="py-20">
			<div
				className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
					isVisible
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-10"
				}`}
			>
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold mb-4">
						Projets Significatifs
					</h2>
					<div className="h-1 w-20 bg-primary mx-auto"></div>
					<p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
						Une sélection de projets personnels et professionnels
						que j'ai développés.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div
							key={index}
							className="bg-card rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow flex flex-col"
						>
							{/* Project thumbnail placeholder */}
							<div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
								<span className="text-lg font-medium">
									Image du projet
								</span>
							</div>

							<div className="p-6 flex-grow">
								<h3 className="text-xl font-bold mb-2">
									{project.title}
								</h3>

								<div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
									<span>{project.year}</span>
									<span>•</span>
									<span>{project.location}</span>
								</div>

								<p className="text-muted-foreground mb-4">
									{project.description}
								</p>

								<div className="mb-4">
									<h4 className="font-semibold mb-2">
										Technologies utilisées:
									</h4>
									<div className="flex flex-wrap gap-2">
										{project.technologies.map(
											(tech, techIndex) => (
												<span
													key={techIndex}
													className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
												>
													{tech}
												</span>
											)
										)}
									</div>
								</div>
							</div>

							<div className="p-6 pt-0 flex justify-between">
								<Link
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-1 text-primary hover:underline"
								>
									<ExternalLink size={16} />
									<span>Voir le projet</span>
								</Link>

								<Link
									href={project.githubLink}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-1 text-primary hover:underline"
								>
									<Github size={16} />
									<span>GitHub</span>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
