"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
	return (
		<section
			id="hero"
			className="min-h-[90vh] flex items-center relative overflow-hidden"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl">
					<motion.h1
						className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						Bonjour, je suis{" "}
						<motion.span
							className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5, duration: 1 }}
						>
							Manoel Da Ponte
						</motion.span>
					</motion.h1>

					<motion.h2
						className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-muted-foreground"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.8 }}
					>
						Full Stack Engineer & Data Scientist
					</motion.h2>

					<motion.p
						className="text-lg mb-8 max-w-2xl"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.8 }}
					>
						Spécialisé dans l'ingénierie de données et le
						développement full-stack, je conçois des solutions
						analytiques innovantes avec une approche orientée
						résultats et business value.
					</motion.p>

					<motion.div
						className="flex flex-wrap gap-4 mb-12"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.9, duration: 0.8 }}
					>
						<Button asChild size="lg">
							<Link href="#contact">Me contacter</Link>
						</Button>

						<Button asChild variant="outline" size="lg">
							<Link href="#projects">Voir mes projets</Link>
						</Button>
					</motion.div>

					<motion.div
						className="flex gap-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.2, duration: 0.8 }}
					>
						<motion.div
							className="rounded-full p-2 border border-border bg-background hover:bg-primary hover:border-primary transition-colors duration-300"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							<Link
								href="https://linkedin.com/in/manoel-da-ponte-4092ab139"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
								className="flex items-center justify-center w-10 h-10 text-foreground hover:text-white transition-colors duration-300"
							>
								<Linkedin size={20} />
							</Link>
						</motion.div>

						<motion.div
							className="rounded-full p-2 border border-border bg-background hover:bg-primary hover:border-primary transition-colors duration-300"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							<Link
								href="https://github.com/ManoelDaPonte"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
								className="flex items-center justify-center w-10 h-10 text-foreground hover:text-white transition-colors duration-300"
							>
								<Github size={20} />
							</Link>
						</motion.div>

						<motion.div
							className="rounded-full p-2 border border-border bg-background hover:bg-primary hover:border-primary transition-colors duration-300"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							<Link
								href="mailto:daponte.manoel@gmail.com"
								aria-label="Email"
								className="flex items-center justify-center w-10 h-10 text-foreground hover:text-white transition-colors duration-300"
							>
								<Mail size={20} />
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</div>

			<motion.div
				className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 1.5,
					duration: 0.8,
					repeat: Infinity,
					repeatType: "reverse",
				}}
			>
				<Link href="#about" aria-label="Scroll to About section">
					<ArrowDown size={32} />
				</Link>
			</motion.div>

			{/* Background decoration */}
			<motion.div
				className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full filter blur-3xl -z-10"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
			/>
			<motion.div
				className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full filter blur-3xl -z-10"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5, delay: 0.5 }}
			/>
		</section>
	);
}
