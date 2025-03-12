"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<section
			id="hero"
			className="min-h-[90vh] flex items-center relative overflow-hidden"
		>
			<div
				className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
					isVisible
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-10"
				}`}
			>
				<div className="max-w-4xl">
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
						Bonjour, je suis{" "}
						<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
							Manoel Da Ponte
						</span>
					</h1>

					<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-muted-foreground">
						Full Stack Engineer & Data Scientist
					</h2>

					<p className="text-lg mb-8 max-w-2xl">
						Spécialisé dans l'ingénierie de données et le
						développement full-stack, je conçois des solutions
						analytiques innovantes avec une approche orientée
						résultats et business value.
					</p>

					<div className="flex flex-wrap gap-4 mb-12">
						<Link
							href="#contact"
							className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
						>
							Me contacter
						</Link>

						<Link
							href="#projects"
							className="px-6 py-3 border border-border rounded-md font-medium hover:bg-secondary transition-colors"
						>
							Voir mes projets
						</Link>
					</div>

					<div className="flex gap-6">
						<Link
							href="https://linkedin.com/in/manoel-da-ponte-4092ab139"
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
							aria-label="LinkedIn"
						>
							<Linkedin size={20} />
						</Link>

						<Link
							href="https://github.com/yourusername"
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
							aria-label="GitHub"
						>
							<Github size={20} />
						</Link>

						<Link
							href="mailto:daponte.manoel@gmail.com"
							className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
							aria-label="Email"
						>
							<Mail size={20} />
						</Link>
					</div>
				</div>
			</div>

			<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
				<Link href="#about" aria-label="Scroll to About section">
					<ArrowDown size={32} />
				</Link>
			</div>

			{/* Background decoration */}
			<div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full filter blur-3xl -z-10"></div>
			<div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
		</section>
	);
}
