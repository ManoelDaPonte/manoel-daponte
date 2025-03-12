"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Check system preference on load
	useEffect(() => {
		setIsDarkMode(
			window.matchMedia("(prefers-color-scheme: dark)").matches
		);
	}, []);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
		// In a real implementation, you would change the theme here
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
		<header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex-shrink-0">
						<Link
							href="/"
							className="text-foreground font-bold text-xl"
						>
							Manoel Da Ponte
						</Link>
					</div>

					<div className="hidden md:block">
						<div className="ml-10 flex items-center space-x-6">
							{sections.map((section) => (
								<Link
									key={section.name}
									href={section.href}
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									{section.name}
								</Link>
							))}

							<button
								onClick={toggleTheme}
								className="p-2 rounded-full hover:bg-secondary transition-colors"
								aria-label="Toggle theme"
							>
								{isDarkMode ? (
									<Sun size={20} />
								) : (
									<Moon size={20} />
								)}
							</button>
						</div>
					</div>

					<div className="md:hidden flex items-center">
						<button
							onClick={toggleTheme}
							className="p-2 mr-2 rounded-full hover:bg-secondary transition-colors"
							aria-label="Toggle theme"
						>
							{isDarkMode ? (
								<Sun size={20} />
							) : (
								<Moon size={20} />
							)}
						</button>

						<button
							onClick={toggleMenu}
							className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-secondary transition-colors"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{isMenuOpen && (
				<div className="md:hidden">
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
				</div>
			)}
		</header>
	);
}
