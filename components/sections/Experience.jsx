"use client";

import { useState, useEffect } from "react";
import { BriefcaseIcon, Calendar } from "lucide-react";

export default function Experience() {
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

		const section = document.getElementById("experience");
		if (section) observer.observe(section);

		return () => {
			if (section) observer.unobserve(section);
		};
	}, []);

	const experiences = [
		{
			title: "Cofondateur & Lead Developer",
			company: "Wise Twin",
			location: "Toulouse, France",
			period: "Mars 2024 - Présent",
			description: [
				"Direction complète du développement technique d'une plateforme SaaS de formation 3D immersive pour techniciens industriels.",
				"Conception et implémentation d'une architecture intégrant des builds Unity dans un environnement web React.",
				"Développement d'environnements 3D pour former des techniciens sur des installations sensibles comme des centrales électriques.",
				"Création d'une infrastructure de base de données optimisée pour l'analyse en temps réel des performances des utilisateurs.",
				"Mise en place d'un pipeline CI/CD pour automatiser les déploiements et maintenir une qualité de code élevée.",
			],
			technologies:
				"React/Next.js, Python, Node.js, Unity, Azure, Ubuntu Server, PostgreSQL, ThingsBoard, Node.js",
		},
		{
			title: "Cofondateur & Lead Developer",
			company: "Bootstrap-Now",
			location: "Toulouse, France",
			period: "Mars 2024 - Présent",
			description: [
				"Conception et développement d'une plateforme SaaS facilitant l'accès des auto-entrepreneurs au marché.",
				"Création d'un outil propriétaire de recherche d'opportunités business utilisant des algorithmes d'agrégation de données multicanaux.",
				"Développement d'un générateur de business plans collaboratif associant intelligence artificielle et expertise humaine.",
				"Conception d'une solution d'analyse de marché semi-automatisée guidant les utilisateurs dans leur étude de viabilité.",
				"Établissement de partenariats stratégiques avec des incubateurs pour renforcer l'écosystème entrepreneurial.",
			],
			technologies:
				"React/Next.js, Node.js, PostgreSQL, Prisma, OpenAI API, Vercel",
		},
		{
			title: "Data Scientist",
			company: "TotalEnergies",
			location: "Esbjerg, Danemark",
			period: "Mars 2022 - Février 2024",
			description: [
				"Réalisation de projets end-to-end en équipe restreinte (1-3 personnes) couvrant systématiquement les aspects data management, front-end et back-end.",
				"Développement d'une solution de prévention d'accidents par extraction de données IoT, analyse de rapports textuels et création d'un data warehouse centralisé avec fine-tuning de modèles LLM.",
				"Conception de micro-logiciels d'extraction massive de données SAP optimisant les processus d'accès à l'information pour les utilisateurs métier.",
				"Implémentation d'un système de contrôle de factures utilisant la computer vision pour l'extraction de données et l'analyse prédictive pour l'optimisation des achats.",
				"Création d'une architecture IoT offshore comprenant datawarehouse, détection d'anomalies, monitoring par Prefect et alertes SMTP.",
			],
			technologies:
				"Python, React, Azure, Computer Vision, NLP, SQL, SAP, IoT, Prefect, SMTP, LLM",
		},
		{
			title: "Data Scientist",
			company: "CGI",
			location: "Toulouse, France",
			period: "Juillet 2020 - Mars 2022",
			description: [
				"Conception et développement d'un Chat Bot intelligent basé sur l'indexation avancée de documentation technique pour faciliter l'accès à l'information.",
				"Mise en place d'une architecture d'indexation et de recherche sémantique permettant une compréhension contextuelle des requêtes utilisateurs.",
				"Optimisation de parcours utilisateurs dans des interfaces complexes grâce à l'analyse comportementale et l'implémentation de recommandations personnalisées.",
				"Création d'une solution robuste de migration de données sur AWS permettant l'interopérabilité entre systèmes hétérogènes.",
				"Développement d'algorithmes d'analyse pour extraire des insights actionnables à partir des données d'activité web et améliorer l'expérience utilisateur.",
			],
			technologies: "Python, AWS, NLP, SQL, Elasticsearch, API REST",
		},
	];

	return (
		<section id="experience" className="py-20 bg-secondary">
			<div
				className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
					isVisible
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-10"
				}`}
			>
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold mb-4">
						Expérience Professionnelle
					</h2>
					<div className="h-1 w-20 bg-primary mx-auto"></div>
					<p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
						Mon parcours professionnel en tant qu'ingénieur
						full-stack et data scientist.
					</p>
				</div>

				<div className="space-y-12">
					{experiences.map((experience, index) => (
						<div
							key={index}
							className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
						>
							<div className="flex flex-col md:flex-row gap-6 items-start">
								<div className="md:w-1/3">
									<h3 className="text-xl font-bold">
										{experience.title}
									</h3>
									<p className="text-primary font-semibold mt-1">
										{experience.company}
									</p>
									<div className="flex items-center gap-1 mt-2 text-muted-foreground">
										<Calendar size={16} />
										<span>{experience.period}</span>
									</div>
									<div className="flex items-center gap-1 mt-1 text-muted-foreground">
										<BriefcaseIcon size={16} />
										<span>{experience.location}</span>
									</div>
								</div>

								<div className="md:w-2/3">
									<ul className="space-y-2 mb-4">
										{experience.description.map(
											(item, itemIndex) => (
												<li
													key={itemIndex}
													className="flex items-start"
												>
													<span className="inline-block h-2 w-2 rounded-full bg-primary mt-2 mr-2"></span>
													<span className="text-muted-foreground">
														{item}
													</span>
												</li>
											)
										)}
									</ul>

									<div className="mt-4">
										<h4 className="font-semibold">
											Technologies utilisées:
										</h4>
										<p className="text-muted-foreground">
											{experience.technologies}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
