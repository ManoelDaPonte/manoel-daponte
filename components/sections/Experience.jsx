"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BriefcaseIcon, Calendar, Building, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
		<section id="experience" className="py-20 bg-secondary">
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
						Expérience Professionnelle
					</h2>
					<div className="h-1 w-20 bg-primary mx-auto"></div>
					<p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
						Mon parcours professionnel en tant qu'ingénieur
						full-stack et data scientist.
					</p>
				</motion.div>

				<motion.div
					className="space-y-8"
					variants={container}
					initial="hidden"
					animate={isVisible ? "show" : "hidden"}
				>
					{experiences.map((experience, index) => (
						<motion.div
							key={index}
							variants={item}
							whileHover={{ scale: 1.01 }}
							transition={{ duration: 0.2 }}
						>
							<Card className="overflow-hidden border-border hover:border-primary/50 transition-all duration-300">
								<CardContent className="p-0">
									<div className="flex flex-col md:flex-row">
										<div className="md:w-1/3 p-6 bg-background/50">
											<h3 className="text-xl font-bold">
												{experience.title}
											</h3>

											<div className="flex items-center gap-2 mt-3 text-primary">
												<Building size={18} />
												<p className="font-semibold">
													{experience.company}
												</p>
											</div>

											<div className="flex items-center gap-2 mt-2 text-muted-foreground">
												<Calendar size={16} />
												<span>{experience.period}</span>
											</div>

											<div className="flex items-center gap-2 mt-2 text-muted-foreground">
												<MapPin size={16} />
												<span>
													{experience.location}
												</span>
											</div>
										</div>

										<div className="md:w-2/3 p-6 border-t md:border-t-0 md:border-l border-border">
											<ul className="space-y-2 mb-4">
												{experience.description.map(
													(item, itemIndex) => (
														<motion.li
															key={itemIndex}
															className="flex items-start"
															initial={{
																opacity: 0,
																x: 20,
															}}
															animate={
																isVisible
																	? {
																			opacity: 1,
																			x: 0,
																	  }
																	: {
																			opacity: 0,
																			x: 20,
																	  }
															}
															transition={{
																delay:
																	0.1 *
																		itemIndex +
																	0.5,
																duration: 0.4,
															}}
														>
															<span className="inline-block h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
															<span className="text-muted-foreground">
																{item}
															</span>
														</motion.li>
													)
												)}
											</ul>

											<div className="mt-4 border-t border-border pt-4">
												<h4 className="font-semibold mb-2">
													Technologies utilisées:
												</h4>
												<div className="flex flex-wrap gap-2">
													{experience.technologies
														.split(", ")
														.map(
															(
																tech,
																techIndex
															) => (
																<motion.span
																	key={
																		techIndex
																	}
																	className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
																	initial={{
																		opacity: 0,
																		scale: 0.9,
																	}}
																	animate={
																		isVisible
																			? {
																					opacity: 1,
																					scale: 1,
																			  }
																			: {
																					opacity: 0,
																					scale: 0.9,
																			  }
																	}
																	transition={{
																		delay:
																			0.05 *
																				techIndex +
																			1,
																		duration: 0.2,
																	}}
																	whileHover={{
																		scale: 1.05,
																	}}
																>
																	{tech}
																</motion.span>
															)
														)}
												</div>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
