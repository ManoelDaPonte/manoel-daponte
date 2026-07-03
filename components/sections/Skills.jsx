"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
			title: "IA Générative & Agents",
			icon: <Cpu size={24} />,
			skills: [
				"Agents LLM & tool use",
				"RAG & recherche sémantique",
				"Embeddings & pgvector",
				"LLM-as-judge",
				"Vision multimodale",
				"Streaming SSE",
				"FinOps IA (coûts, quotas)",
			],
		},
		{
			title: "Machine Learning & Data Science",
			icon: <LineChart size={24} />,
			skills: [
				"NLP",
				"Computer Vision",
				"Fine-tuning de LLM",
				"Deep Learning",
				"Séries temporelles",
				"Statistiques (tests, clustering)",
			],
		},
		{
			title: "Data Engineering",
			icon: <Database size={24} />,
			skills: [
				"ETL & pipelines idempotents",
				"PostgreSQL / pgvector",
				"SQLAlchemy / Alembic / Prisma",
				"pandas",
				"Prefect",
				"Data warehousing",
			],
		},
		{
			title: "Backend",
			icon: <Server size={24} />,
			skills: [
				"Python",
				"FastAPI",
				"Node.js",
				"API REST",
				"Pydantic / Zod",
				"C#",
			],
		},
		{
			title: "Frontend",
			icon: <Layout size={24} />,
			skills: [
				"Next.js",
				"React",
				"TypeScript",
				"Tailwind CSS",
				"Zustand / React Query",
			],
		},
		{
			title: "Cloud & DevOps",
			icon: <Cloud size={24} />,
			skills: [
				"Azure (Container Apps, Blob, ACR)",
				"Docker",
				"GitHub Actions (CI/CD)",
				"Vercel",
				"Neon PostgreSQL",
				"AWS",
			],
		},
		{
			title: "3D Temps Réel",
			icon: <Globe size={24} />,
			skills: [
				"Gaussian Splatting",
				"PlayCanvas / WebGL2",
				"Shaders GLSL",
				"Unity",
				"Google Maps 3D",
				"glTF / GLB",
			],
		},
		{
			title: "Sécurité & Identité",
			icon: <Code size={24} />,
			skills: [
				"SSO (WorkOS, SAML)",
				"MFA TOTP",
				"JWT inter-services",
				"RBAC multi-tenant",
				"Audit logging",
			],
		},
	];

	// Animation variants
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<section id="skills" className="py-20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					animate={
						isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
					}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-3xl font-bold mb-4">Compétences</h2>
					<div className="h-1 w-20 bg-primary mx-auto"></div>
					<p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
						Une large gamme de compétences techniques pour répondre
						à divers besoins en développement et analyse de données.
					</p>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
					variants={container}
					initial="hidden"
					animate={isVisible ? "show" : "hidden"}
				>
					{skillCategories.map((category, index) => (
						<motion.div
							key={index}
							variants={item}
							whileHover={{
								scale: 1.03,
								boxShadow:
									"0 10px 30px -15px var(--color-ring)",
							}}
							transition={{ duration: 0.2 }}
						>
							<Card className="h-full border-border hover:border-primary/50 transition-all duration-300">
								<CardHeader className="pb-2">
									<CardTitle className="flex items-center gap-3">
										<div className="text-primary">
											{category.icon}
										</div>
										<span>{category.title}</span>
									</CardTitle>
								</CardHeader>
								<CardContent>
									<ul className="space-y-2">
										{category.skills.map(
											(skill, skillIndex) => (
												<li
													key={skillIndex}
													className="text-muted-foreground flex items-center gap-2"
												>
													<span className="h-1.5 w-1.5 rounded-full bg-primary inline-block"></span>
													{skill}
												</li>
											)
										)}
									</ul>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
