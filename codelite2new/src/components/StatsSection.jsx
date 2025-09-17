import React from "react";

const StatsSection = () => {
	return (
		<section>
			<div className="text-gray-1 px-6 text-center md:mb-12">
				<div className="relative">
					<img
						className="mx-auto pt-40 md:pt-0"
						src="/images/illustrations/illustration-2.png"
						alt=""
					/>
					<div className="absolute left-1/2 top-1/2 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 md:top-[40%]">
						<div className="mb-16 md:mb-20">
							<h2 className="font-tasa-orbiter-display mx-auto max-w-2xl text-[2.5rem] font-semibold leading-[3rem] md:text-[4rem] md:leading-[4.5rem]">
								CodeLite 2.0 brings together the brightest minds to build,
								compete, and grow
							</h2>
						</div>
						<div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-16">
							<div>
								<p className="font-nb-architekt text-4xl font-bold uppercase md:text-6xl">
									2000+
								</p>
								<p className="text-gray-2 text-sm font-medium md:text-base">
									Registrations
								</p>
							</div>
							<div>
								<p className="font-nb-architekt text-4xl font-bold uppercase md:text-6xl">
									40+
								</p>
								<p className="text-gray-2 text-sm font-medium md:text-base">
									Teams Competing
								</p>
							</div>
							<div>
								<p className="font-nb-architekt text-4xl font-bold uppercase md:text-6xl">
									₹1L+
								</p>
								<p className="text-gray-2 text-sm font-medium md:text-base">
									Prize Pool
								</p>
							</div>
							<div>
								<p className="font-nb-architekt text-4xl font-bold uppercase md:text-6xl">
									24H
								</p>
								<p className="text-gray-2 text-sm font-medium md:text-base">
									Hackathon Duration
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StatsSection;
