"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Education() {
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

		const section = document.getElementById("education");
		if (section) observer.observe(section);

		return () => {
			if (section) observer.unobserve(section);
		};
	}, []);

	const educations = [
		{
			degree: "Master, Statistique et Informatique Décisionnelle",
			institution: "Université Paul Sabatier Toulouse III",
			period: "2019 - 2021",
			type: "education",
		},
		{
			degree: "Licence, Mathématiques Appliquées aux Sciences Humaines et Sociales",
			institution: "Université Jean Jaurès Toulouse II",
			period: "2018 - 2019",
			type: "education",
		},
		{
			degree: "DUT, Statistique et Informatique Décisionnelle",
			institution: "Université de Caen",
			period: "2016 - 2018",
			type: "education",
		},
	];

	const certifications = [
		{
			name: "Azure Data Engineer Associate",
			issuer: "Microsoft",
			date: "2025",
			type: "certification",
		},
	];

	// Animation variants
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.3,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<section id="education" className="py-20 bg-secondary">
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
						Formation & Certification
					</h2>
					<div className="h-1 w-20 bg-primary mx-auto"></div>
					<p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
						Mon parcours académique et mes certifications
						professionnelles.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Education Section */}
					<div>
						<motion.div
							className="flex items-center gap-2 mb-6"
							initial={{ opacity: 0, x: -20 }}
							animate={
								isVisible
									? { opacity: 1, x: 0 }
									: { opacity: 0, x: -20 }
							}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<GraduationCap size={24} className="text-primary" />
							<h3 className="text-2xl font-semibold">
								Formation
							</h3>
						</motion.div>

						<motion.div
							className="space-y-6"
							variants={container}
							initial="hidden"
							animate={isVisible ? "show" : "hidden"}
						>
							{educations.map((item, index) => (
								<motion.div
									key={index}
									variants={item}
									whileHover={{ scale: 1.02, y: -5 }}
									transition={{ duration: 0.2 }}
								>
									<Card className="overflow-hidden">
										<CardContent className="p-0">
											<div className="p-1 bg-primary">
												{" "}
											</div>
											<div className="p-6">
												<h4 className="text-lg font-bold">
													{item.degree}
												</h4>
												<p className="text-primary mt-1">
													{item.institution}
												</p>
												<div className="flex items-center gap-1 mt-2 text-muted-foreground">
													<Calendar size={16} />
													<span>{item.period}</span>
												</div>
											</div>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</motion.div>
					</div>

					{/* Certifications Section */}
					<div>
						<motion.div
							className="flex items-center gap-2 mb-6"
							initial={{ opacity: 0, x: -20 }}
							animate={
								isVisible
									? { opacity: 1, x: 0 }
									: { opacity: 0, x: -20 }
							}
							transition={{ duration: 0.6, delay: 0.3 }}
						>
							<Award size={24} className="text-primary" />
							<h3 className="text-2xl font-semibold">
								Certification
							</h3>
						</motion.div>

						<motion.div
							className="space-y-6"
							variants={container}
							initial="hidden"
							animate={isVisible ? "show" : "hidden"}
						>
							{certifications.map((item, index) => (
								<motion.div
									key={index}
									variants={item}
									whileHover={{ scale: 1.02, y: -5 }}
									transition={{ duration: 0.2 }}
								>
									<Card className="overflow-hidden">
										<CardContent className="p-0">
											<div className="p-1 bg-accent">
												{" "}
											</div>
											<div className="p-6">
												<h4 className="text-lg font-bold">
													{item.name}
												</h4>
												<p className="text-primary mt-1">
													{item.issuer}
												</p>
												<div className="flex items-center gap-1 mt-2 text-muted-foreground">
													<Calendar size={16} />
													<span>
														Obtenu {item.date}
													</span>
												</div>
											</div>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
