"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
	return (
		<NextThemesProvider forcedTheme="dark" enableSystem={false} {...props}>
			{children}
		</NextThemesProvider>
	);
}
