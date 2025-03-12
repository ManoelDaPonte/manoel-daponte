"use client";

import React from "react";
import { IconCloud } from "@/components/magicui/icon-cloud";

export default function TechCloud() {
	// Définition des slugs pour les technologies mentionnées dans votre CV
	const slugs = [
		"python",
		"javascript",
		"react",
		"nextdotjs",
		"nodedotjs",
		"tailwindcss",
		"csharp",
		"fastapi",
		"postgresql",
		"mongodb",
		"neo4j",
		"docker",
		"amazonaws",
		"microsoftazure",
		"vercel",
		"unity",
		"html5",
		"css3",
		"openai",
		"ubuntu",
		"prisma",
	];

	// Création des URLs pour les images
	const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}`);

	return (
		<div className="relative flex w-full h-[600px] items-center justify-center overflow-hidden">
			<IconCloud images={images} />
		</div>
	);
}
