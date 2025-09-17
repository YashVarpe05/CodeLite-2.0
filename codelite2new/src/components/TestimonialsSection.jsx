import React from "react";
import TeamCard from "./TeamCard";
import { FaGithub, FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";
import {
	FaCode,
	FaRocket,
	FaBrain,
	FaHeart,
	FaStar,
	FaLock,
	FaUsers,
} from "react-icons/fa";

const TestimonialsSection = () => {
	// Team data - replace with your actual team information
	const teamMembers = [
		{
			id: 1,
			name: "Yash_Varpe.exe",
			title: "Lead Organiser",
			image: "/team/yash1.png",
			pitch:
				"Passionate about building innovative solutions and leading development teams to create amazing products.",
			icon: <FaCode />,
			socialLinks: [
				{
					platform: "GitHub",
					url: "https://github.com/codelitehacks",
					icon: <FaGithub />,
				},
				{
					platform: "Twitter",
					url: "https://x.com/codelitehacks",
					icon: <FaXTwitter />,
				},
				{
					platform: "LinkedIn",
					url: "https://linkedin.com/company/codelitehacks",
					icon: <FaLinkedin />,
				},
				{
					platform: "Instagram",
					url: "https://www.instagram.com/codelitehacks/",
					icon: <FaInstagram />,
				},
			],
		},
		{
			id: 2,
			name: "Akash_Satao.exe",
			title: "Lead Organiser",
			image: "/team/akash.jpg",
			pitch:
				"Creating beautiful and intuitive user experiences that make technology accessible to everyone.",
			icon: <FaHeart />,
			socialLinks: [
				{
					platform: "GitHub",
					url: "https://github.com/codelitehacks",
					icon: <FaGithub />,
				},
				{
					platform: "Twitter",
					url: "https://x.com/codelitehacks",
					icon: <FaXTwitter />,
				},
				{
					platform: "LinkedIn",
					url: "https://linkedin.com/company/codelitehacks",
					icon: <FaLinkedin />,
				},
				{
					platform: "Instagram",
					url: "https://www.instagram.com/codelitehacks/",
					icon: <FaInstagram />,
				},
			],
		},
		{
			id: 3,
			name: "Abhishek_Kaware.exe",
			title: "Co-Lead",
			image: "/team/abhi.jpg",
			pitch:
				"Building scalable and robust backend systems that power the next generation of applications.",
			icon: <FaRocket />,
			socialLinks: [
				{
					platform: "GitHub",
					url: "https://github.com/codelitehacks",
					icon: <FaGithub />,
				},
				{
					platform: "Twitter",
					url: "https://x.com/codelitehacks",
					icon: <FaXTwitter />,
				},
				{
					platform: "LinkedIn",
					url: "https://linkedin.com/company/codelitehacks",
					icon: <FaLinkedin />,
				},
				{
					platform: "Instagram",
					url: "https://www.instagram.com/codelitehacks/",
					icon: <FaInstagram />,
				},
			],
		},
		{
			id: 4,
			name: "Nikhil_Gawade.exe",
			title: "Media Lead",
			image: "/team/nikhil.jpeg",
			pitch:
				"Bridging the gap between technology and user needs to deliver products that truly matter.",
			icon: <FaBrain />,
			socialLinks: [
				{
					platform: "GitHub",
					url: "https://github.com/codelitehacks",
					icon: <FaGithub />,
				},
				{
					platform: "Twitter",
					url: "https://x.com/codelitehacks",
					icon: <FaXTwitter />,
				},
				{
					platform: "LinkedIn",
					url: "https://linkedin.com/company/codelitehacks",
					icon: <FaLinkedin />,
				},
				{
					platform: "Instagram",
					url: "https://www.instagram.com/codelitehacks/",
					icon: <FaInstagram />,
				},
			],
		},
		{
			id: 5,
			name: "Swapnil_Khot.exe",
			title: "Sponsorship Lead",
			image: "/team/swapnil.jpeg",
			pitch:
				"Ensuring smooth deployments and maintaining infrastructure that scales with our growing platform.",
			icon: <FaRocket />,
			socialLinks: [
				{
					platform: "GitHub",
					url: "https://github.com/codelitehacks",
					icon: <FaGithub />,
				},
				{
					platform: "Twitter",
					url: "https://x.com/codelitehacks",
					icon: <FaXTwitter />,
				},
				{
					platform: "LinkedIn",
					url: "https://linkedin.com/company/codelitehacks",
					icon: <FaLinkedin />,
				},
				{
					platform: "Instagram",
					url: "https://www.instagram.com/codelitehacks/",
					icon: <FaInstagram />,
				},
			],
		},
		{
			id: 6,
			name: "Tejas_Yewale.exe",
			title: "Marketing Lead",
			image: "/team/tejas.jpg",
			pitch:
				"Crafting responsive and interactive user interfaces that bring designs to life.",
			icon: <FaCode />,
			socialLinks: [
				{
					platform: "GitHub",
					url: "https://github.com/codelitehacks",
					icon: <FaGithub />,
				},
				{
					platform: "Twitter",
					url: "https://x.com/codelitehacks",
					icon: <FaXTwitter />,
				},
				{
					platform: "LinkedIn",
					url: "https://linkedin.com/company/codelitehacks",
					icon: <FaLinkedin />,
				},
				{
					platform: "Instagram",
					url: "https://www.instagram.com/codelitehacks/",
					icon: <FaInstagram />,
				},
			],
		},
		{
			id: 7,
			name: "Kanika_Ganjoo.exe",
			title: "Creativity Lead",
			image: "/team/kanika.jpeg",
			pitch:
				"Turning data into insights and building intelligent systems that drive business decisions.",
			icon: <FaBrain />,
			socialLinks: [
				{
					platform: "GitHub",
					url: "https://github.com/codelitehacks",
					icon: <FaGithub />,
				},
				{
					platform: "Twitter",
					url: "https://x.com/codelitehacks",
					icon: <FaXTwitter />,
				},
				{
					platform: "LinkedIn",
					url: "https://linkedin.com/company/codelitehacks",
					icon: <FaLinkedin />,
				},
				{
					platform: "Instagram",
					url: "https://www.instagram.com/codelitehacks/",
					icon: <FaInstagram />,
				},
			],
		},
		{
			id: 8,
			name: "Mahesh_Nirgude.exe",
			title: "Documentation Lead",
			image: "/team/mahesh.jpg",
			pitch:
				"Building brand awareness and connecting with our community to grow our platform.",
			icon: <FaHeart />,
			socialLinks: [
				{
					platform: "GitHub",
					url: "https://github.com/codelitehacks",
					icon: <FaGithub />,
				},
				{
					platform: "Twitter",
					url: "https://x.com/codelitehacks",
					icon: <FaXTwitter />,
				},
				{
					platform: "LinkedIn",
					url: "https://linkedin.com/company/codelitehacks",
					icon: <FaLinkedin />,
				},
				{
					platform: "Instagram",
					url: "https://www.instagram.com/codelitehacks/",
					icon: <FaInstagram />,
				},
			],
		},
		{
			id: 9,
			name: "harshad_Kambale.exe",
			title: "Design Lead",
			image: "/team/harshad.jpeg",
			pitch:
				"Building and nurturing our developer community to create an inclusive and supportive environment.",
			icon: <FaUsers />,
			socialLinks: [
				{
					platform: "GitHub",
					url: "https://github.com/codelitehacks",
					icon: <FaGithub />,
				},
				{
					platform: "Twitter",
					url: "https://x.com/codelitehacks",
					icon: <FaXTwitter />,
				},
				{
					platform: "LinkedIn",
					url: "https://linkedin.com/company/codelitehacks",
					icon: <FaLinkedin />,
				},
				{
					platform: "Instagram",
					url: "https://www.instagram.com/codelitehacks/",
					icon: <FaInstagram />,
				},
			],
		},
		// {
		// 	id: 11,
		// 	name: "Jay_Talole.exe",
		// 	title: "Co-Lead Design",
		// 	image: "/team/jay.jpeg",
		// 	pitch:
		// 		"Protecting our platform and users with cutting-edge security practices and technologies.",
		// 	icon: <FaLock />,
		// 	socialLinks: [
		// 		{
		// 			platform: "GitHub",
		// 			url: "https://github.com/codelitehacks",
		// 			icon: <FaGithub />,
		// 		},
		// 		{
		// 			platform: "Twitter",
		// 			url: "https://x.com/codelitehacks",
		// 			icon: <FaXTwitter />,
		// 		},
		// 		{
		// 			platform: "LinkedIn",
		// 			url: "https://linkedin.com/company/codelitehacks",
		// 			icon: <FaLinkedin />,
		// 		},
		// 		{
		// 			platform: "Instagram",
		// 			url: "https://www.instagram.com/codelitehacks/",
		// 			icon: <FaInstagram />,
		// 		},
		// 	],
		// },
		// {
		// 	id: 10,
		// 	name: "Amol_Arde.exe",
		// 	title: "Co-Lead Marketing",
		// 	image: "/team/amol.jpeg",
		// 	pitch:
		// 		"Building and nurturing our developer community to create an inclusive and supportive environment.",
		// 	icon: <FaUsers />,
		// 	socialLinks: [
		// 		{
		// 			platform: "GitHub",
		// 			url: "https://github.com/codelitehacks",
		// 			icon: <FaGithub />,
		// 		},
		// 		{
		// 			platform: "Twitter",
		// 			url: "https://x.com/codelitehacks",
		// 			icon: <FaXTwitter />,
		// 		},
		// 		{
		// 			platform: "LinkedIn",
		// 			url: "https://linkedin.com/company/codelitehacks",
		// 			icon: <FaLinkedin />,
		// 		},
		// 		{
		// 			platform: "Instagram",
		// 			url: "https://www.instagram.com/codelitehacks/",
		// 			icon: <FaInstagram />,
		// 		},
		// 	],
		// },

		{
			id: 12,
			name: "Aryan_Jagzap.exe",
			title: "Management Lead",
			image: "/team/aryan.jpeg",
			pitch:
				"Building and nurturing our developer community to create an inclusive and supportive environment.",
			icon: <FaUsers />,
			socialLinks: [
				{
					platform: "GitHub",
					url: "https://github.com/codelitehacks",
					icon: <FaGithub />,
				},
				{
					platform: "Twitter",
					url: "https://x.com/codelitehacks",
					icon: <FaXTwitter />,
				},
				{
					platform: "LinkedIn",
					url: "https://linkedin.com/company/codelitehacks",
					icon: <FaLinkedin />,
				},
				{
					platform: "Instagram",
					url: "https://www.instagram.com/codelitehacks/",
					icon: <FaInstagram />,
				},
			],
		},
	];

	return (
		<section className="py-16">
			<div className="font-tasa-orbiter-display mb-5">
				<div className="flex items-start justify-between px-6 relative">
					{/* Left Pillar */}
					<div className="hidden md:block sticky top-20">
						<img src="/illustrations/illustration-4.png" alt="" />
					</div>

					{/* Center Team Section */}
					<div className="w-full flex-1 items-center justify-center px-4 md:px-8">
						{/* Section Header */}
						<div className="text-center mb-16">
							<h2 className="text-gray-1 text-4xl font-semibold md:text-5xl mb-4">
								Meet Our Team
							</h2>
							<p className="text-gray-2 text-lg max-w-2xl mx-auto">
								The passionate individuals behind CodeLite 2.0, working together
								to create amazing experiences.
							</p>
						</div>

						{/* Team Cards Grid */}
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 justify-items-center max-w-6xl mx-auto">
							{teamMembers.map((member) => (
								<TeamCard
									key={member.id}
									name={member.name}
									title={member.title}
									image={member.image}
									pitch={member.pitch}
									socialLinks={member.socialLinks}
								/>
							))}
						</div>
					</div>

					{/* Right Pillar */}
					<div className="hidden md:block sticky top-20">
						<img src="/illustrations/illustration-4.png" alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
