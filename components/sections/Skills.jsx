"use client";

import { useState, useEffect } from "react";
import {
	Code,
	Server,
	Database,
	LineChart,
	Cpu,
	Globe,
	Cloud,
	Layout,
} from "lucide-react";

export default function Skills() {
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

		const section = document.getElementById("skills");
		if (section) observer.observe(section);

		return () => {
			if (section) observer.unobserve(section);
		};
	}, []);

	const skillCategories = [
		{
			title: "Développement Frontend",
			icon: <Layout size={24} />,
			skills: [
				"Next.js",
				"Tailwind",
				"React",
				"Dash",
				"HTML/CSS",
				"JavaScript",
			],
		},
		{
			title: "Développement Backend",
			icon: <Server size={24} />,
			skills: ["Python", "Node.js", "C#", "FastAPI", "API REST"],
		},
		{
			title: "Base de données",
			icon: <Database size={24} />,
			skills: ["PostgreSQL", "MongoDB", "Neo4j", "SQL"],
		},
		{
			title: "Data Science & IA",
			icon: <LineChart size={24} />,
			skills: [
				"Machine Learning",
				"Deep Learning",
				"NLP",
				"Computer Vision",
				"Séries temporelles",
			],
		},
		{
			title: "Statistiques & Modélisation",
			icon: <Cpu size={24} />,
			skills: [
				"Régression linéaire/logistique",
				"Tests d'hypothèses",
				"ANOVA",
				"Clustering",
				"Réduction dimensionnelle",
			],
		},
		{
			title: "DevOps & Déploiement",
			icon: <Cloud size={24} />,
			skills: ["Docker", "Vercel", "AWS", "Azure", "Ubuntu"],
		},
		{
			title: "Développement 3D",
			icon: <Globe size={24} />,
			skills: ["Unity"],
		},
		{
			title: "Langages de programmation",
			icon: <Code size={24} />,
			skills: ["Python", "SQL", "JavaScript", "HTML", "C#", "CSS"],
		},
	];

	return (
		<section id="skills" className="py-20">
			<div
				className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
					isVisible
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-10"
				}`}
			>
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold mb-4">Compétences</h2>
					<div className="h-1 w-20 bg-primary mx-auto"></div>
					<p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
						Une large gamme de compétences techniques pour répondre
						à divers besoins en développement et analyse de données.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{skillCategories.map((category, index) => (
						<div
							key={index}
							className="bg-card rounded-lg p-6 shadow-sm border border-border hover:border-primary transition-colors"
						>
							<div className="flex items-center gap-3 mb-4">
								<div className="text-primary">
									{category.icon}
								</div>
								<h3 className="font-semibold">
									{category.title}
								</h3>
							</div>

							<ul className="space-y-2">
								{category.skills.map((skill, skillIndex) => (
									<li
										key={skillIndex}
										className="text-muted-foreground"
									>
										{skill}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
