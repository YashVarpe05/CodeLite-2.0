"use client";
import { useEffect, useState } from "react";
// Use selective imports for better tree-shaking
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import InfiniteHero from "./infinite-hero";
import "./styles/loader.css";
export default function Loader() {
	const [done, setDone] = useState(false); // when true, overlays removed but hero stays
	const [fading, setFading] = useState(false);
	useEffect(() => {
		if (typeof window === "undefined") return;

		// Register plugins (idempotent)
		gsap.registerPlugin(CustomEase);
		CustomEase.create("hop", ".8,0,.3,1");

		// --- Split text helper ---
		const splitTextElements = (
			selector,
			type = "words,chars",
			addFirstChar = false
		) => {
			const elements = document.querySelectorAll(selector);
			elements.forEach((el) => {
				const raw = el.textContent.trim();
				if (!raw) return;
				const splitWords = raw.split(/\s+/);
				let html = "";
				splitWords.forEach((word, wIdx) => {
					let chars = "";
					if (type.includes("chars")) {
						[...word].forEach((ch, cIdx) => {
							const first = addFirstChar && wIdx === 0 && cIdx === 0;
							chars += `<span class="char${
								first ? " first-char" : ""
							}"><span>${ch}</span></span>`;
						});
					} else {
						chars = `<span>${word}</span>`;
					}
					html +=
						`<span class="word">${chars}</span>` +
						(wIdx < splitWords.length - 1 ? " " : "");
				});
				el.innerHTML = html;
			});
		};

		// Split required texts
		splitTextElements(".intro-title h1", "words,chars", true);
		splitTextElements(".outro-title h1", "words,chars");
		splitTextElements(".tag p", "words");
		splitTextElements(".card h1", "words,chars", true);

		const isMobile = window.innerWidth <= 1000;

		gsap.set(
			[
				".split-overlay .intro-title .first-char span",
				".split-overlay .outro-title .char span",
			],
			{ y: "0%" }
		);
		gsap.set(".split-overlay .intro-title .first-char", {
			x: isMobile ? "7.5rem" : "18rem",
			y: isMobile ? "-1rem" : "-2.75rem",
			fontWeight: "900",
			scale: 0.75,
		});
		gsap.set(".split-overlay .outro-title .char", {
			x: isMobile ? "-3rem" : "-8rem",
			fontSize: isMobile ? "6rem" : "14rem",
			fontWeight: "500",
		});

		const tl = gsap.timeline({ defaults: { ease: "hop" } });
		const tags = gsap.utils.toArray(".tag");

		tags.forEach((tag, index) => {
			tl.to(
				tag.querySelectorAll("p .word"),
				{
					y: "0%",
					duration: 0.75,
				},
				0.5 + index * 0.1
			);
		});

		tl.to(
			".preloader .intro-title .char span",
			{
				y: "0%",
				duration: 0.75,
				stagger: 0.05,
			},
			0.5
		)
			.to(
				".preloader .intro-title .char:not(.first-char) span",
				{
					y: "100%",
					duration: 0.75,
					stagger: 0.05,
				},
				2
			)
			.to(
				".preloader .outro-title .char span",
				{
					y: "0%",
					duration: 0.75,
					stagger: 0.075,
				},
				2.5
			)
			.to(
				".preloader .intro-title .first-char",
				{
					x: isMobile ? "9rem" : "21.25rem",
					duration: 1,
				},
				3.5
			)
			.to(
				".preloader .outro-title .char",
				{
					x: isMobile ? "-3rem" : "-8rem",
					duration: 1,
				},
				3.5
			)
			.to(
				".preloader .intro-title .first-char",
				{
					x: isMobile ? "7.5rem" : "18rem",
					y: isMobile ? "-1rem" : "-2.75rem",
					fontWeight: "900",
					scale: 0.75,
					duration: 0.75,
				},
				4.5
			)
			.to(
				".preloader .outro-title .char",
				{
					x: isMobile ? "-3rem" : "-8rem",
					fontSize: isMobile ? "6rem" : "14rem",
					fontWeight: "500",
					duration: 0.75,
					onComplete: () => {
						gsap.set(".preloader", {
							clipPath: "polygon(0 0,100% 0, 100% 50%,0 50%)",
						});
						gsap.set(".split-overlay", {
							clipPath: "polygon(0 50%,100% 50%,100% 100%,0 100%)",
						});
					},
				},
				4.5
			)
			.to(
				".container",
				{
					clipPath: "polygon(0% 48%,100% 48%, 100% 52%, 0% 52%)",
				},
				5
			);

		tags.forEach((tag, index) => {
			tl.to(
				tag.querySelectorAll("p .word"),
				{
					y: "100%",
					duration: 0.75,
				},
				5.5 + index * 0.1
			);
		});

		tl.to(
			[".preloader", ".split-overlay"],
			{
				y: (i) => (i === 0 ? "-50%" : "50%"),
				duration: 1,
			},
			6
		)
			.to(
				".container",
				{
					clipPath: "polygon(0% 0% ,100% 0%, 100% 100%, 0% 100%)",
					duration: 1,
				},
				6
			)
			.to(
				".container .card",
				{
					clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
					duration: 0.75,
				},
				6.25
			)
			.to(
				".container .card h1 .char span",
				{
					y: "0%",
					duration: 0.75,
					stagger: 0.05,
					onComplete: () => {
						// Signal that loader sequence finished so nav can fade in
						window.dispatchEvent(new Event("codelite-loader-complete"));
						// Start fade out
						setFading(true);
						// After fade remove overlays but keep hero visible
						setTimeout(() => {
							setDone(true);
							setFading(false);
						}, 600);
					},
				},
				6.35
			);
	}, []);

	return (
		<div
			className={"codelite-loader" + (fading ? " codelite-loader--fading" : "")}
		>
			{!done && (
				<>
					{/* Preloader */}
					<div className="preloader">
						<div className="intro-title">
							<h1>CodeLite Hackthon</h1>
						</div>
						<div className="outro-title">
							<h1>2.0</h1>
						</div>
					</div>

					{/* Split Overlay */}
					<div className="split-overlay">
						<div className="intro-title">
							<h1>CodeLite Hackthon</h1>
						</div>
						<div className="outro-title">
							<h1>2.0</h1>
						</div>
					</div>

					{/* Tags */}
					<div className="tags-overlay">
						<div className="tag tag-1">
							<p>Negative Space</p>
						</div>
						<div className="tag tag-2">
							<p>Form & Void</p>
						</div>
						<div className="tag tag-3">
							<p>Light Studies</p>
						</div>
					</div>
				</>
			)}
			{/* Container / Hero always present */}
			<InfiniteHero />
		</div>
	);
}
