"use client";

import { useState, useEffect } from "react";
import { GraduationCap, Award, Calendar } from "lucide-react";

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

	return (
		<section id="education" className="py-20 bg-secondary">
			<div
				className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
					isVisible
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-10"
				}`}
			>
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold mb-4">
						Formation & Certification
					</h2>
					<div className="h-1 w-20 bg-primary mx-auto"></div>
					<p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
						Mon parcours académique et mes certifications
						professionnelles.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Education Section */}
					<div>
						<div className="flex items-center gap-2 mb-6">
							<GraduationCap size={24} className="text-primary" />
							<h3 className="text-2xl font-semibold">
								Formation
							</h3>
						</div>

						<div className="space-y-6">
							{educations.map((item, index) => (
								<div
									key={index}
									className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
								>
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
							))}
						</div>
					</div>

					{/* Certifications Section */}
					<div>
						<div className="flex items-center gap-2 mb-6">
							<Award size={24} className="text-primary" />
							<h3 className="text-2xl font-semibold">
								Certification
							</h3>
						</div>

						<div className="space-y-6">
							{certifications.map((item, index) => (
								<div
									key={index}
									className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
								>
									<h4 className="text-lg font-bold">
										{item.name}
									</h4>
									<p className="text-primary mt-1">
										{item.issuer}
									</p>
									<div className="flex items-center gap-1 mt-2 text-muted-foreground">
										<Calendar size={16} />
										<span>Obtenu {item.date}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
