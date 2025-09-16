"use client";
import { useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
export default function AboutSection() {
	const ref = useRef(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		el.classList.add("reveal-hidden");
		const obs = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					el.classList.add("reveal-visible");
					obs.disconnect();
				}
			},
			{ threshold: 0.25 }
		);
		obs.observe(el);
		return () => obs.disconnect();
	}, []);

	// Start unmuted by default per user request. Browsers may block autoplay with sound.
	const [videoMuted, setVideoMuted] = useState(false);
	// Has the user initiated playback at least once? (controls cover visibility)
	const [videoStarted, setVideoStarted] = useState(false);
	// Current playing state (can be paused/resumed)
	const [videoPlaying, setVideoPlaying] = useState(false);
	const videoRef = useRef(null);

	// Attempt autoplay with sound; if blocked, fallback to muted.
	useEffect(() => {
		const v = videoRef.current;
		if (!v) return;
		if (!videoPlaying) return; // only attempt play after user intent
		const playWithFallback = async () => {
			try {
				v.muted = videoMuted;
				await v.play();
			} catch (e) {
				// If blocked with sound, mute then retry once
				if (!videoMuted) {
					v.muted = true;
					setVideoMuted(true);
					try {
						await v.play();
					} catch {}
				}
			}
		};
		playWithFallback();
	}, [videoMuted, videoPlaying]);

	const onTogglePlay = () => {
		const v = videoRef.current;
		if (!v) return;
		if (!videoStarted) setVideoStarted(true);
		if (videoPlaying) {
			v.pause();
			setVideoPlaying(false);
		} else {
			setVideoPlaying(true); // effect handles play attempt
		}
	};

	const toggleMute = () => {
		const v = videoRef.current;
		if (!v) return;
		const newMuted = !videoMuted;
		v.muted = newMuted;
		setVideoMuted(newMuted);
	};
	const codeString = `
import { Hackathon, Button, Stats, Team } from "codelite-2.0";

export default function App() {
  return (
    <Hackathon name="CodeLite 2.0" edition="2nd" theme="Build. Innovate. Impact.">
      <Stats
        participants={500}
        projects={120}
        sponsors={15}
        prizes="₹2,00,000+"
      />

      <Team
        lead="Yash Varpe"
        coLead="Abhishek Kaware"
        technicalLead="Vedant Chawre"
      />

      <Button variant="primary" action="register">
        Register Now 🚀
      </Button>
    </Hackathon>
  );
}
`;
	return (
		<section
			id="about"
			ref={ref}
			className="bg-[#141414] py-24 sm:py-32 scroll-mt-28"
		>
			<div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
				<h2 className="text-center text-base font-semibold text-[#ffffbe]">
					AFTER LAST YEAR’S SUCCESS
				</h2>
				<p className="mx-auto mt-2 max-w-xl text-center text-4xl font-semibold tracking-tight text-balance text-[#ffffff] sm:text-5xl">
					We are back <br /> bigger & better
				</p>
				<div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-6 lg:auto-rows-[minmax(0,1fr)]">
					{/* Performance (row 1 col 1-4) */}
					<div className="relative lg:col-span-4">
						<div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-l-4xl" />
						<div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
							<div className="px-8 pt-8 sm:px-10 sm:pt-10">
								<p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
									CodeLite 1.0
								</p>
								<p className="mt-2 max-w-2xl text-sm/6 text-gray-400 max-lg:text-center">
									THE BEGINNING OF OUR LEGACY
								</p>
							</div>
							<div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-4">
								{/* 16:9 Video Embed */}
								<div className="group/video relative w-full max-w-3xl aspect-[16/9] overflow-hidden rounded-xl ring-1 ring-white/10 bg-black">
									<video
										ref={videoRef}
										className="absolute inset-0 h-full w-full object-cover"
										muted={videoMuted}
										loop
										playsInline
										poster="/window.svg"
									>
										<source src="./Video/webisitevideo.mp4" type="video/mp4" />
										{/* TODO: Replace /video.mp4 with actual video file placed in /public */}
										Your browser does not support the video tag.
									</video>
									{/* Cover image overlay only before first user play */}
									{!videoStarted && (
										<div
											className={`absolute inset-0 transition-opacity duration-500 ${
												videoPlaying
													? "opacity-0 pointer-events-none"
													: "opacity-100"
											}`}
										>
											<img
												src="https://cdn.hashnode.com/res/hashnode/image/upload/v1726979830943/06834d52-4577-41ed-a5ae-4aa3d374cc43.png?auto=compress,format&format=webp"
												alt="CodeLite 1.0 recap cover"
												className="h-full w-full object-cover"
											/>
											<div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/10 to-black/30" />
										</div>
									)}
									{/* Subtle persistent gradient over video */}
									<div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20" />
									{/* Controls */}
									<div className="absolute inset-0 flex flex-col">
										{/* Center Play/Pause Overlay always visible (text/icon changes) */}
										<button
											onClick={onTogglePlay}
											className="mt-[11.6rem] m-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm ring-1 ring-white/20 transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 opacity-0 pointer-events-none group-hover/video:opacity-100 group-hover/video:pointer-events-auto md:opacity-0 md:group-hover/video:opacity-100 md:group-hover/video:pointer-events-auto sm:opacity-100 sm:pointer-events-auto sm:mt-[11.6rem] sm:group-hover/video:opacity-100"
											aria-label={
												videoPlaying
													? "Pause video"
													: videoStarted
													? "Play video"
													: "Play recap video"
											}
										>
											{videoPlaying ? (
												<svg
													className="h-5 w-5"
													viewBox="0 0 24 24"
													fill="currentColor"
												>
													<path d="M6 5h4v14H6zM14 5h4v14h-4z" />
												</svg>
											) : (
												<svg
													className="h-5 w-5"
													viewBox="0 0 24 24"
													fill="currentColor"
												>
													<path d="M8 5v14l11-7z" />
												</svg>
											)}
											{videoPlaying ? "Pause" : "Play"}
										</button>
										<div className="mt-auto flex items-center gap-2 p-2">
											<span className="inline-flex items-center gap-1 rounded-md bg-white/10 px-2 py-0.5 text-[11px] font-medium backdrop-blur-sm ring-1 ring-white/15">
												v1.0 Recap
											</span>
											<button
												type="button"
												onClick={toggleMute}
												className="inline-flex items-center gap-1 rounded-md bg-white/10 px-2 py-0.5 text-[11px] backdrop-blur-sm ring-1 ring-white/15 hover:bg-white/20 transition"
												aria-label={videoMuted ? "Unmute video" : "Mute video"}
											>
												{videoMuted ? (
													<svg
														viewBox="0 0 24 24"
														className="h-4 w-4"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													>
														<path d="M11 5 6 9H2v6h4l5 4V5Z" />
														<path d="m23 9-6 6" />
														<path d="m17 9 6 6" />
													</svg>
												) : (
													<svg
														viewBox="0 0 24 24"
														className="h-4 w-4"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													>
														<path d="M11 5 6 9H2v6h4l5 4V5Z" />
														<path d="M15.54 8.46a5 5 0 0 1 0 7.08" />
														<path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
													</svg>
												)}
												<span>{videoMuted ? "Unmute" : "Mute"}</span>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl" />
					</div>

					{/* Powerful APIs (row 1 col 5-6) */}
					<div className="relative lg:col-span-2">
						<div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-r-4xl" />
						<div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-r-[calc(2rem+1px)]">
							<div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
								<p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
									Powerful APIs
								</p>
								<p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
									Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
									eget sem sodales gravida.
								</p>
							</div>
							<div className="relative min-h-72 w-full grow">
								<div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900/60 outline outline-white/10">
									<div className="flex bg-gray-900 outline outline-white/5">
										<div className="-mb-px flex text-sm/6 font-medium text-gray-400">
											<div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
												CodeLite.jsx
											</div>
											<div className="border-r border-gray-600/10 px-4 py-2">
												2.0.jsx
											</div>
										</div>
									</div>
									<div className="px-6 pt-6 pb-14">
										<SyntaxHighlighter
											language="jsx"
											style={vscDarkPlus}
											showLineNumbers
										>
											{codeString}
										</SyntaxHighlighter>{" "}
									</div>
								</div>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-r-4xl" />
					</div>

					{/* Registrations (row 2 col 1-2) */}
					<div className="relative lg:col-span-2">
						<div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-bl-4xl" />
						<div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
							<div className="px-8 pt-8 sm:px-10 sm:pt-10">
								<p className="text-lg font-medium tracking-tight text-white">
									Tracks
								</p>
								<p className="mt-2 text-4xl font-semibold text-[#ffffbe]">
									Agentic AI, Open Innovation, Web3
								</p>

								{/* Network Image - Responsive */}
								<div className="mt-4 flex justify-center lg:justify-start">
									<div className="relative w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[280px] xl:max-w-[320px]">
										<Image
											src="/dark-bento-01-network.png"
											alt="Network visualization showing global participant connections"
											width={320}
											height={280}
											className="w-full h-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
											priority={false}
										/>
									</div>
								</div>
							</div>
							<div className="flex flex-1 items-end px-8 pb-6">
								<div className="h-2 w-full overflow-hidden rounded-full bg-gray-700">
									<div className="h-full w-[85%] bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-300" />
								</div>
							</div>
						</div>
					</div>

					{/* Middle Column - Two boxes stacked vertically */}
					<div className="relative lg:col-span-2 grid grid-rows-2 gap-4">
						{/* Top box */}
						<div className="relative">
							<div className="absolute inset-px rounded-lg bg-gray-800" />
							<div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[calc(var(--radius-lg)+1px)] ">
								<div className="px-8 pt-8 sm:px-10 sm:pt-10">
									<p className="text-md font-medium tracking-tight text-white">
										Registrations
									</p>
									<p className="mt-2 text-2xl font-semibold text-[#ffffbe]">
										2000+
									</p>
									<p className="mt-2 max-w-sm text-sm text-gray-400">
										Participants already signed up and growing.
									</p>

									{/* Network Image - Responsive */}
									<div className="mt-4 flex justify-center lg:justify-start">
										<div className="relative w-full h-full max-w-[320px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[280px] xl:max-w-[320px]">
											<Image
												src="/dark-bento-01-network.png"
												alt="Network visualization showing global participant connections"
												width={420}
												height={380}
												className="w-full h-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
												priority={false}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Bottom box */}
						<div className="relative">
							<div className="absolute inset-px rounded-lg bg-gray-800" />
							<div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[calc(var(--radius-lg)+1px)] p-4">
								<div>
									<p className="text-sm font-medium tracking-tight text-white">
										Response Time
									</p>
									<p className="mt-1 text-[10px]/4 text-gray-400">
										Quick mentor & support response.
									</p>
								</div>
								<div className="grid grid-cols-1 gap-2 pt-1">
									<div className="text-center">
										<p className="text-sm font-semibold text-[#ffffbe]">24h</p>
										<p className="mt-0.5 text-[8px] uppercase tracking-wide text-gray-400">
											Avg Response
										</p>
									</div>
								</div>
								<div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-gray-700">
									<div className="h-full w-[85%] rounded-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-300" />
								</div>
							</div>
						</div>
					</div>

					{/* Security (right column spanning rows 2-3) */}
					<div className="relative lg:row-span-1 lg:col-span-2">
						<div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-br-4xl" />
						<div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-br-[calc(2rem+1px)] p-8 sm:p-10">
							<p className="text-lg font-medium tracking-tight text-white">
								Security
							</p>
							<p className="mt-2 max-w-sm text-sm/6 text-gray-400">
								Enterprise-grade safeguards, continuous monitoring, and
								encrypted data flows protecting every participant action.
							</p>
							<div className="mt-6 grid grid-cols-2 gap-3 text-[12px] text-gray-300">
								<div className="rounded-md bg-gray-700/30 px-3 py-2 ring-1 ring-inset ring-white/5">
									TLS 1.3
								</div>
								<div className="rounded-md bg-gray-700/30 px-3 py-2 ring-1 ring-inset ring-white/5">
									Audit Logs
								</div>
								<div className="rounded-md bg-gray-700/30 px-3 py-2 ring-1 ring-inset ring-white/5">
									SAST
								</div>
								<div className="rounded-md bg-gray-700/30 px-3 py-2 ring-1 ring-inset ring-white/5">
									Runtime Scan
								</div>
							</div>
							<div className="mt-auto pt-6">
								<div className="h-28 w-full rounded-md border border-white/10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center text-xs text-gray-400">
									Security Diagram
								</div>
							</div>
						</div>
					</div>

					{/* Last row: two smaller compact cards */}
				</div>
			</div>
		</section>
	);
}
