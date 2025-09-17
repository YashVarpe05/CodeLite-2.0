const CommunitySection = () => {
	const tracks = [
		{
			id: 1,
			name: "Web3",
			description: "Blockchain, DeFi, NFTs, and decentralized applications",
			icon: "🌐",
			color: "from-blue-500 to-purple-600",
		},
		{
			id: 2,
			name: "Agentic AI",
			description: "Autonomous agents, LLMs, and intelligent automation",
			icon: "🤖",
			color: "from-green-500 to-teal-600",
		},
		{
			id: 3,
			name: "Open Innovation",
			description: "Collaborative development and open-source solutions",
			icon: "💡",
			color: "from-orange-500 to-red-600",
		},
	];

	return (
		<section className="py-16">
			<div className="font-tasa-orbiter-display md:bg-grid-1 mx-auto mb-32 grid max-w-7xl items-center px-6 text-lg md:mb-64 md:grid-cols-2 md:bg-[size:66%] md:bg-[position:25%_150%] md:bg-no-repeat">
				<div className="bg-illustration-3 relative z-10 mt-12 bg-contain bg-no-repeat pt-[19.5rem] md:mt-0 md:bg-none md:bg-center md:pt-0">
					<h2 className="text-gray-1 text-5xl font-bold uppercase leading-[3.5rem] md:text-7xl md:leading-[6.5rem]">
						Our Innovation Tracks
					</h2>
					<p className="text-gray-2 max-w-xl text-base font-medium md:text-lg mb-8">
						Explore cutting-edge technologies and build the future across three
						exciting domains.
					</p>

					{/* Tracks Grid */}
					<div className="space-y-4 mb-8">
						{tracks.map((track) => (
							<div
								key={track.id}
								className="group relative bg-gray-12/50 border border-gray-8 rounded-lg p-4 hover:border-gray-7 transition-all duration-300 hover:bg-gray-12/70"
							>
								<div className="flex items-start gap-4">
									<div className="text-2xl">{track.icon}</div>
									<div className="flex-1">
										<h3 className="text-gray-1 text-2xl font-semibold mb-1">
											{track.name}
										</h3>
										<p className="text-gray-3 text-md leading-relaxed">
											{track.description}
										</p>
									</div>
								</div>
								{/* Gradient accent */}
								<div
									className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${track.color} rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
								></div>
							</div>
						))}
					</div>

					<div className="flex items-center gap-4 mt-6">
						<a
							className="font-nb-architekt rounded-[4px] uppercase bg-green-2 text-green-1 focus-within:outline-green-1 outline-none transition-all duration-300 ease-in-out focus-within:outline-offset-2 focus-within:brightness-150 hover:brightness-150 px-4 py-3 text-[14px] md:px-7 md:py-4 md:text-[18px]"
							href="#"
						>
							Join Community
						</a>
						<a
							className="font-nb-architekt rounded-[4px] uppercase bg-gray-1 text-gray-10 outline-none transition-all duration-300 ease-in-out focus-within:outline-offset-2 focus-within:outline-white hover:contrast-75 focus-within:hover:contrast-75 px-4 py-3 text-[14px] md:px-7 md:py-4 md:text-[18px]"
							href="#"
						>
							Learn More
						</a>
					</div>
				</div>
				<div className="hidden md:block">
					<img
						className="mx-auto"
						src="/illustrations/illustration-3.png"
						alt="Innovation Tracks Illustration"
					/>
				</div>
			</div>
		</section>
	);
};

export default CommunitySection;
