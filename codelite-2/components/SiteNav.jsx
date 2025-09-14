"use client";
import React from "react";
import Link from "next/link";

// Simple site nav. It stays visually hidden (opacity-0, pointer-events-none) until
// a 'after-loader' class is added to <body>. Add that class after your GSAP timeline completes.
export default function SiteNav() {
	const links = [
		{ href: "#home", label: "Home" },
		{ href: "#projects", label: "Tracks" },
		{ href: "#about", label: "About" },
		{ href: "#contact", label: "Team" },
	];
	return (
		<nav
			data-site-nav
			className="fixed top-0 left-0 w-full z-[60] flex justify-center py-4 transition-opacity duration-700 opacity-0 pointer-events-none body.after-loader:opacity-100 body.after-loader:pointer-events-auto"
		>
			<ul className="flex gap-6 px-6 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-sm font-medium text-white/80">
				{links.map((l) => (
					<li key={l.href}>
						<Link href={l.href} className="hover:text-white transition-colors">
							{l.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
