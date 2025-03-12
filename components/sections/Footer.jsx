import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	// Animation variants
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 10 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	const sections = [
		{ name: "About", href: "#about" },
		{ name: "Experience", href: "#experience" },
		{ name: "Projects", href: "#projects" },
		{ name: "Contact", href: "#contact" },
	];

	const socialLinks = [
		{
			label: "LinkedIn",
			icon: <Linkedin size={16} />,
			href: "https://www.linkedin.com/in/manoel-da-ponte-4092ab139",
		},
		{
			label: "GitHub",
			icon: <Github size={16} />,
			href: "https://github.com/ManoelDaPonte",
		},
	];

	return (
		<motion.footer
			className="bg-secondary py-8"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true }}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="grid grid-cols-1 md:grid-cols-3 gap-8"
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
				>
					<motion.div variants={item}>
						<h3 className="text-lg font-semibold mb-4">
							Manoel Da Ponte
						</h3>
						<p className="text-muted-foreground mb-4">
							Full Stack Engineer & Data Scientist based in
							Toulouse, France.
						</p>
					</motion.div>

					<motion.div variants={item}>
						<h3 className="text-lg font-semibold mb-4">
							Quick Links
						</h3>
						<ul className="space-y-2">
							{sections.map((section, index) => (
								<motion.li
									key={section.name}
									whileHover={{ x: 5 }}
									transition={{ duration: 0.2 }}
								>
									<Link
										href={section.href}
										className="text-muted-foreground hover:text-foreground transition-colors"
									>
										{section.name}
									</Link>
								</motion.li>
							))}
						</ul>
					</motion.div>

					<motion.div variants={item}>
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

							{socialLinks.map((link, index) => (
								<motion.li
									key={index}
									className="flex items-center gap-2"
									whileHover={{ x: 5 }}
									transition={{ duration: 0.2 }}
								>
									<Link
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
									>
										{link.icon}
										<span>{link.label}</span>
									</Link>
								</motion.li>
							))}
						</ul>
					</motion.div>
				</motion.div>

				<motion.div
					className="mt-8 pt-8 border-t border-border"
					variants={item}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
				>
					<p className="text-center text-muted-foreground">
						© {currentYear} Manoel Da Ponte. All rights reserved.
					</p>
				</motion.div>
			</div>
		</motion.footer>
	);
}
