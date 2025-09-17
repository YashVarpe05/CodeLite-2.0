import React from "react";

const HeroSection = () => {
	return (
		<section>
			<div className="bg-grid-2 font-tasa-orbiter-display relative bg-[size:250%] bg-[50%_-50%] bg-no-repeat px-6 pt-14 text-center md:bg-contain md:bg-[50%_-44%] md:pt-32">
				<div>
					<h1 className="text-gray-1 mb-8 text-7xl font-bold uppercase md:mb-2 md:text-[7rem] md:font-bold md:leading-[8rem]">
						Enter the CodeLite 2.0 Arena
					</h1>
					<div className="mx-auto mb-10 max-w-[938px] text-base font-medium md:mb-14 md:text-lg">
						<p className="text-gray-400">
							Join <strong>CodeLite 2.0</strong>, where innovators and
							developers come together to build, compete, and create the future.
							<br className="hidden [@media(min-width:850px)]:block" />
							Winners unlock <strong>cash prizes</strong>, mentorship, and a
							chance to showcase their projects on a bigger stage.
						</p>
					</div>
				</div>
				<div className="mb-2 flex items-center justify-center gap-4 md:mb-16">
					<div>
						<a
							className="font-nb-architekt rounded-[4px] uppercase bg-green-2 text-green-1 focus-within:outline-green-1 outline-none transition-all duration-300 ease-in-out focus-within:outline-offset-2 focus-within:brightness-150 hover:brightness-150 px-4 py-3 text-[14px] md:px-7 md:py-4 md:text-[18px]"
							href=""
						>
							Register
						</a>
					</div>
					<div>
						<a
							className="font-nb-architekt rounded-[4px] uppercase bg-gray-1 text-gray-10 outline-none transition-all duration-300 ease-in-out focus-within:outline-offset-2 focus-within:outline-white hover:contrast-75 focus-within:hover:contrast-75 px-4 py-3 text-[14px] md:px-7 md:py-4 md:text-[18px]"
							href=""
						>
							Join Community
						</a>
					</div>
				</div>
				<div className="mx-auto max-w-5xl md:-mt-10 lg:-mt-12 xl:max-w-6xl">
					<img
						className="pointer-events-none w-full translate-x-4 select-none md:translate-x-6 lg:translate-x-8"
						src="/illustrations/illustration-1.png"
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
