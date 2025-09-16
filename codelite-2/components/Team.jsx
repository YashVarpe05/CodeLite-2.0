"use client";

import SocialCard from "./forgeui/social-card";
import { GiStrikingDiamonds } from "react-icons/gi";
import { FaXTwitter, FaGithub } from "react-icons/fa6";

export default function Team() {
	return (
		<section
			id="team"
			className="bg-[#141414] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 scroll-mt-28"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="text-sm sm:text-base font-semibold text-[#ffffbe] uppercase tracking-wide">
						MEET THE TEAM
					</h2>
					<p className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance text-[#ffffff]">
						The minds behind <br className="hidden sm:block" /> CodeLite 2.0
					</p>
				</div>

				{/* Team Grid - Fully Responsive */}
				<div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
					{/* Main Team Grid */}
					<div
						className="grid gap-4 sm:gap-6 md:gap-8 
						grid-cols-1 
						xs:grid-cols-1 
						sm:grid-cols-2 
						md:grid-cols-2 
						lg:grid-cols-3 
						xl:grid-cols-4 
						2xl:grid-cols-4
						auto-rows-fr
						justify-items-center"
					>
						{/* Team Member 1 - Yash Varpe */}
						<div className="w-full max-w-[320px]">
							<SocialCard
								image="https://avatars.githubusercontent.com/u/104847857?v=4"
								title="Team Lead"
								name="Yash Varpe"
								pitch="Leading the vision and execution of CodeLite 2.0. Passionate about innovation and collaboration."
								buttons={[
									{
										label: "Portfolio",
										icon: <FaXTwitter />,
										link: "https://yashvarpe.vercel.app/",
									},
									{
										label: "Github",
										icon: <FaGithub />,
										link: "https://github.com/YashVarpe05",
									},
								]}
							/>
						</div>
						{/* Team Member 2 - Akash Satao */}
						<div className="w-full max-w-[320px]">
							<SocialCard
								image="https://avatars.githubusercontent.com/u/104847857?v=4"
								title="Co-Lead"
								name="Akash Satao"
								pitch="Coordinating teams and managing operations to ensure seamless event execution."
								buttons={[
									{
										label: "Twitter",
										icon: <FaXTwitter />,
										link: "https://x.com/amanshakya0018",
									},
									{
										label: "Github",
										icon: <FaGithub />,
										link: "https://github.com/amanshakya0018",
									},
								]}
							/>
						</div>
						{/* Team Member 3 - Technical Lead */}
						<div className="w-full max-w-[320px]">
							<SocialCard
								image="https://avatars.githubusercontent.com/u/104847857?v=4"
								title="Technical Lead"
								name="Vedant Chawre"
								pitch="Architecting the technical infrastructure and ensuring robust development practices."
								buttons={[
									{
										label: "Twitter",
										icon: <FaXTwitter />,
										link: "https://x.com/amanshakya0018",
									},
									{
										label: "Github",
										icon: <FaGithub />,
										link: "https://github.com/amanshakya0018",
									},
								]}
							/>
						</div>
						{/* Team Member 4 - Additional Member */}
						<div className="w-full max-w-[320px]">
							<SocialCard
								image="https://avatars.githubusercontent.com/u/104847857?v=4"
								title="Core Team"
								name="Team Member"
								pitch="Contributing to various aspects of CodeLite 2.0 and supporting community engagement."
								buttons={[
									{
										label: "Twitter",
										icon: <FaXTwitter />,
										link: "https://x.com/amanshakya0018",
									},
									{
										label: "Github",
										icon: <FaGithub />,
										link: "https://github.com/amanshakya0018",
									},
								]}
							/>
						</div>
						{/* Team Member 5 - Additional Member */}
						<div className="w-full max-w-[320px] sm:col-span-2 md:col-span-1">
							<SocialCard
								image="https://avatars.githubusercontent.com/u/104847857?v=4"
								title="Core Team"
								name="Team Member"
								pitch="Supporting event organization, logistics, and participant experience enhancement."
								buttons={[
									{
										label: "Twitter",
										icon: <FaXTwitter />,
										link: "https://x.com/amanshakya0018",
									},
									{
										label: "Github",
										icon: <FaGithub />,
										link: "https://github.com/amanshakya0018",
									},
								]}
							/>
						</div>
						{/* Team Member 6 - Additional Member */}
						<div className="w-full max-w-[320px] sm:col-span-2 md:col-span-1">
							<SocialCard
								image="https://avatars.githubusercontent.com/u/104847857?v=4"
								title="Core Team"
								name="Team Member"
								pitch="Managing community outreach, marketing initiatives, and stakeholder relationships."
								buttons={[
									{
										label: "Twitter",
										icon: <FaXTwitter />,
										link: "https://x.com/amanshakya0018",
									},
									{
										label: "Github",
										icon: <FaGithub />,
										link: "https://github.com/amanshakya0018",
									},
								]}
							/>
						</div>{" "}
						<div className="w-full max-w-[320px] sm:col-span-2 md:col-span-1">
							<SocialCard
								image="https://avatars.githubusercontent.com/u/104847857?v=4"
								title="Core Team"
								name="Team Member"
								pitch="Managing community outreach, marketing initiatives, and stakeholder relationships."
								buttons={[
									{
										label: "Twitter",
										icon: <FaXTwitter />,
										link: "https://x.com/amanshakya0018",
									},
									{
										label: "Github",
										icon: <FaGithub />,
										link: "https://github.com/amanshakya0018",
									},
								]}
							/>
						</div>{" "}
						<div className="w-full max-w-[320px] sm:col-span-2 md:col-span-1">
							<SocialCard
								image="https://avatars.githubusercontent.com/u/104847857?v=4"
								title="Core Team"
								name="Team Member"
								pitch="Managing community outreach, marketing initiatives, and stakeholder relationships."
								buttons={[
									{
										label: "Twitter",
										icon: <FaXTwitter />,
										link: "https://x.com/amanshakya0018",
									},
									{
										label: "Github",
										icon: <FaGithub />,
										link: "https://github.com/amanshakya0018",
									},
								]}
							/>
						</div>{" "}
						<div className="w-full max-w-[320px] sm:col-span-2 md:col-span-1">
							<SocialCard
								image="https://avatars.githubusercontent.com/u/104847857?v=4"
								title="Core Team"
								name="Team Member"
								pitch="Managing community outreach, marketing initiatives, and stakeholder relationships."
								buttons={[
									{
										label: "Twitter",
										icon: <FaXTwitter />,
										link: "https://x.com/amanshakya0018",
									},
									{
										label: "Github",
										icon: <FaGithub />,
										link: "https://github.com/amanshakya0018",
									},
								]}
							/>
						</div>{" "}
						<div className="w-full max-w-[320px] sm:col-span-2 md:col-span-1">
							<SocialCard
								image="https://avatars.githubusercontent.com/u/104847857?v=4"
								title="Core Team"
								name="Team Member"
								pitch="Managing community outreach, marketing initiatives, and stakeholder relationships."
								buttons={[
									{
										label: "Twitter",
										icon: <FaXTwitter />,
										link: "https://x.com/amanshakya0018",
									},
									{
										label: "Github",
										icon: <FaGithub />,
										link: "https://github.com/amanshakya0018",
									},
								]}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
