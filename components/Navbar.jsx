"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Après le montage du composant, on peut accéder au thème
	useEffect(() => {
		setMounted(true);
	}, []);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	const sections = [
		{ name: "About", href: "#about" },
		{ name: "Skills", href: "#skills" },
		{ name: "Experience", href: "#experience" },
		{ name: "Projects", href: "#projects" },
		{ name: "Education", href: "#education" },
		{ name: "Contact", href: "#contact" },
	];

	return (
		<motion.header
			className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border"
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<motion.div
						className="flex-shrink-0"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.8 }}
					>
						<Link
							href="/"
							className="text-foreground font-bold text-xl"
						>
							Manoel Da Ponte
						</Link>
					</motion.div>

					<div className="hidden md:block">
						<div className="ml-10 flex items-center space-x-6">
							{sections.map((section, index) => (
								<motion.div
									key={section.name}
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										delay: 0.1 * index,
										duration: 0.5,
									}}
								>
									<Link
										href={section.href}
										className="text-muted-foreground hover:text-foreground transition-colors"
									>
										{section.name}
									</Link>
								</motion.div>
							))}

							<motion.div
								initial={{ opacity: 0, rotate: -90 }}
								animate={{ opacity: 1, rotate: 0 }}
								transition={{ delay: 0.6, duration: 0.5 }}
							>
								<Button
									variant="ghost"
									size="icon"
									onClick={toggleTheme}
									aria-label="Toggle theme"
								>
									{mounted && theme === "dark" ? (
										<Sun size={18} />
									) : (
										<Moon size={18} />
									)}
								</Button>
							</motion.div>
						</div>
					</div>

					<div className="md:hidden flex items-center">
						<Button
							variant="ghost"
							size="icon"
							onClick={toggleTheme}
							className="mr-2"
							aria-label="Toggle theme"
						>
							{mounted && theme === "dark" ? (
								<Sun size={18} />
							) : (
								<Moon size={18} />
							)}
						</Button>

						<Button
							variant="ghost"
							size="icon"
							onClick={toggleMenu}
							aria-expanded="false"
							aria-label="Menu principal"
						>
							<span className="sr-only">
								Ouvrir le menu principal
							</span>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</Button>
					</div>
				</div>
			</div>

			{/* Menu mobile */}
			{isMenuOpen && (
				<motion.div
					className="md:hidden"
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height: "auto" }}
					exit={{ opacity: 0, height: 0 }}
					transition={{ duration: 0.3 }}
				>
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background">
						{sections.map((section) => (
							<Link
								key={section.name}
								href={section.href}
								className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary"
								onClick={() => setIsMenuOpen(false)}
							>
								{section.name}
							</Link>
						))}
					</div>
				</motion.div>
			)}
		</motion.header>
	);
}
