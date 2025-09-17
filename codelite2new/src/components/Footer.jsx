const Footer = () => {
	return (
		<footer>
			<div className="text-gray-3 mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 py-12 text-sm font-medium sm:gap-10 sm:px-6 md:flex-row md:gap-0 md:pb-20 md:pt-36">
				<div className="w-full md:w-auto">
					<div className="mb-6 mt-1 font-normal md:mb-20">
						<a href="/">
							<img
								className="mb-3 h-233 w-auto sm:h-10 md:h-12 lg:max-w-[10.5rem] transition-all duration-200 hover:scale-105"
								src="/logos/logo.png"
								alt="CodeLite 2.0 logo"
							/>
						</a>
						<p className="mr-8 text-xs sm:text-sm">
							2025 Codelite 2.0 © All Rights Reserved
						</p>
					</div>
				</div>

				{/* Connect Section - Updated with your social links */}
				<div className="w-full sm:w-auto">
					<h2 className="text-gray-5 mb-4 text-sm font-medium md:mb-8">
						Connect
					</h2>
					<ul className="grid gap-3 sm:gap-4">
						<li>
							<a
								className="focus-within:text-green-1 hover:text-green-1 transition-colors duration-300 ease-in-out text-xs sm:text-sm"
								href="https://discord.gg/pqENhTcc"
								target="_blank"
								rel="noopener noreferrer"
							>
								Discord
							</a>
						</li>
						<li>
							<a
								className="focus-within:text-green-1 hover:text-green-1 transition-colors duration-300 ease-in-out text-xs sm:text-sm"
								href="https://www.instagram.com/codelitehacks/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Instagram
							</a>
						</li>
						<li>
							<a
								className="focus-within:text-green-1 hover:text-green-1 transition-colors duration-300 ease-in-out text-xs sm:text-sm"
								href="https://x.com/codelitehacks"
								target="_blank"
								rel="noopener noreferrer"
							>
								X (Twitter)
							</a>
						</li>
						<li>
							<a
								className="focus-within:text-green-1 hover:text-green-1 transition-colors duration-300 ease-in-out text-xs sm:text-sm"
								href="mailto:hello@codelitehacks.com"
							>
								Email
							</a>
						</li>
					</ul>
				</div>

				{/* Legal Section */}
				<div className="w-full sm:w-auto">
					<h2 className="text-gray-5 mb-4 text-sm font-medium md:mb-8">
						Legal
					</h2>
					<ul className="grid gap-3 sm:gap-4">
						<li>
							<a
								className="focus-within:text-green-1 hover:text-green-1 transition-colors duration-300 ease-in-out text-xs sm:text-sm"
								href="/privacy"
							>
								Privacy Policy
							</a>
						</li>
						<li>
							<a
								className="focus-within:text-green-1 hover:text-green-1 transition-colors duration-300 ease-in-out text-xs sm:text-sm"
								href="/terms"
							>
								Terms of Service
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
