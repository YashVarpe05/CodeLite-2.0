import { useState } from "react";

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<header>
			<nav>
				<div className="font-base font-tasa-orbiter-display relative">
					<div className="flex items-center justify-between px-4 py-6">
						<div className="flex items-center gap-10">
							<a href="/" className="flex items-center">
								<img
									className="h-8 w-auto sm:h-10 md:h-12 transition-all duration-200 hover:scale-105"
									src="/logos/logo.png"
									alt="CodeLite 2.0 logo"
								/>
							</a>
							{/* Desktop Navigation */}
							<div className="hidden md:block">
								<ul className="text-gray-3 flex items-center gap-8 font-medium">
									<li>
										<a
											className="focus-within:text-green-1 hover:text-green-1 block transition-colors duration-300 ease-in-out"
											href="/hackathon"
										>
											Hackathon
										</a>
									</li>
									<li>
										<a
											className="focus-within:text-green-1 hover:text-green-1 block transition-colors duration-300 ease-in-out"
											href="/eternal"
										>
											About
										</a>
									</li>
									<li>
										<a
											className="focus-within:text-green-1 hover:text-green-1 block transition-colors duration-300 ease-in-out"
											href="/accelerator"
										>
											Team
										</a>
									</li>
									<li>
										<a
											className="focus-within:text-green-1 hover:text-green-1 block transition-colors duration-300 ease-in-out"
											href="/get-started"
										>
											Tracks
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="flex items-center">
							<a
								className="font-nb-architekt rounded-[4px] uppercase bg-green-2 text-green-1 focus-within:outline-green-1 outline-none transition-all duration-300 ease-in-out focus-within:outline-offset-2 focus-within:brightness-150 hover:brightness-150 px-3 py-2 text-[12px] md:px-5 md:py-3 md:text-[14px]"
								href="#"
							>
								Register
							</a>
							{/* Mobile Menu Button */}
							<button
								className="ml-2 md:hidden transition-transform duration-200 hover:scale-105"
								onClick={toggleMobileMenu}
								aria-label="Toggle mobile menu"
							>
								<div className="w-fit">
									<svg
										width="32"
										height="32"
										viewBox="0 0 32 32"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect width="32" height="32" rx="4" fill="#282828"></rect>
										<path
											d={
												isMobileMenuOpen
													? "M11 11L21 21M21 11L11 21"
													: "M9.8335 16.0002H22.1668M9.8335 11.8335H22.1668M9.8335 20.1668H15.6668"
											}
											stroke="#EDEDED"
											strokeWidth="1.5"
											strokeLinecap="square"
										></path>
									</svg>
								</div>
							</button>
						</div>
					</div>

					{/* Mobile Navigation Menu */}
					<div
						className={`md:hidden transition-all duration-300 ease-in-out ${
							isMobileMenuOpen
								? "max-h-96 opacity-100"
								: "max-h-0 opacity-0 overflow-hidden"
						}`}
					>
						<div className="bg-gray-11 border-t border-gray-8 px-4 py-4">
							<ul className="text-gray-3 space-y-4 font-medium">
								<li>
									<a
										className="focus-within:text-green-1 hover:text-green-1 block transition-colors duration-300 ease-in-out py-2"
										href="/hackathon"
										onClick={closeMobileMenu}
									>
										Hackathon
									</a>
								</li>
								<li>
									<a
										className="focus-within:text-green-1 hover:text-green-1 block transition-colors duration-300 ease-in-out py-2"
										href="/eternal"
										onClick={closeMobileMenu}
									>
										About
									</a>
								</li>
								<li>
									<a
										className="focus-within:text-green-1 hover:text-green-1 block transition-colors duration-300 ease-in-out py-2"
										href="/accelerator"
										onClick={closeMobileMenu}
									>
										Team
									</a>
								</li>
								<li>
									<a
										className="focus-within:text-green-1 hover:text-green-1 block transition-colors duration-300 ease-in-out py-2"
										href="/get-started"
										onClick={closeMobileMenu}
									>
										Tracks
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
