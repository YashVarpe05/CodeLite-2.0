import React from "react";

const TopBanner = () => {
	return (
		<div className="group flex w-full justify-center bg-[#FBE9BB] p-2 text-center shadow-md ring-1 ring-[#0F0F0F]/15 sm:p-4">
			<button
				aria-label="Sign up for the Solana Cypherpunk Hackathon"
				className="flex flex-row items-center gap-x-2 rounded px-2 transition-all duration-300 group-hover:scale-[1.02]"
			>
				<span className="font-pitch relative inline-block text-[12px] font-[900] uppercase leading-[18px] tracking-[0.4px] text-[#0F0F0F] sm:text-[14px] sm:leading-6 sm:tracking-[0.45px] md:text-[15px] md:leading-[22px] md:tracking-[0.48px] lg:text-[16px] lg:leading-[24px] lg:tracking-[0.5px] xl:text-[17px] xl:leading-[26px] xl:tracking-[0.55px] 2xl:text-[18px] 2xl:leading-[28px] 2xl:tracking-[0.6px]">
					<span className="relative inline-block">
						<span className="opacity-0">
							Sign up for the CodeLite 2.0 Hackathon commencing on
							September 25, 2025
						</span>
						<span className="absolute inset-0" aria-hidden="true"></span>
					</span>
				</span>
			</button>
		</div>
	);
};

export default TopBanner;
