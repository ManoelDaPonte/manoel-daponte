import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-secondary py-8">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-lg font-semibold mb-4">
							Manoel Da Ponte
						</h3>
						<p className="text-muted-foreground mb-4">
							Full Stack Engineer & Data Scientist à Toulouse,
							France.
						</p>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">
							Quick Links
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="#about"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									A propos
								</Link>
							</li>
							<li>
								<Link
									href="#experience"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Expérience
								</Link>
							</li>
							<li>
								<Link
									href="#projects"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Projets
								</Link>
							</li>
							<li>
								<Link
									href="#contact"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">Contact</h3>
						<ul className="space-y-2">
							<li className="flex items-center gap-2 text-muted-foreground">
								<Mail size={16} />
								<span>daponte.manoel@gmail.com</span>
							</li>
							<li className="flex items-center gap-2 text-muted-foreground">
								<Phone size={16} />
								<span>(+33) 6 82 69 71 32</span>
							</li>
							<li className="flex items-center gap-2">
								<Link
									href="https://www.linkedin.com/in/manoel-da-ponte-4092ab139"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
								>
									<Linkedin size={16} />
									<span>LinkedIn</span>
								</Link>
							</li>
							<li className="flex items-center gap-2">
								<Link
									href="https://github.com/ManoelDaPonte"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
								>
									<Github size={16} />
									<span>GitHub</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-8 pt-8 border-t border-border">
					<p className="text-center text-muted-foreground">
						© {currentYear} Manoel Da Ponte.
					</p>
				</div>
			</div>
		</footer>
	);
}
