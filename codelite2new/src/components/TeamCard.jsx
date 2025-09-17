import React from "react";

const TeamCard = ({ name, title, image, pitch, socialLinks, icon }) => {
	return (
		<div className="border-gray-8 bg-gray-13 bg-grid-1 outline-gray-9 hover:border-gray-7 hover:before:content-right-angle hover:after:border-gray-8 hover:after:content-right-angle relative flex h-60 flex-col items-center justify-center rounded-lg border bg-opacity-50 bg-center bg-no-repeat p-6 opacity-80 outline outline-2 -outline-offset-[6px] hover:bg-transparent hover:opacity-100 hover:outline-none hover:before:absolute hover:before:bottom-1 hover:before:left-3 hover:before:rotate-180 hover:after:absolute hover:after:flex hover:after:h-[calc(100%-0.4rem)] hover:after:w-[calc(100%-0.5rem)] hover:after:items-start hover:after:justify-end hover:after:rounded-lg hover:after:border hover:after:pr-2">
			{/* Profile Image */}
			<div className="relative mb-4">
				<div className="w-32 h-32 rounded-full bg-gray-9 border-3 border-gray-7 overflow-hidden shadow-lg">
					{image ? (
						<img
							src={image}
							alt={name}
							className="w-full h-full object-cover"
						/>
					) : (
						<div className="w-full h-full flex items-center justify-center text-gray-5 text-xl">
							{icon || name.charAt(0)}
						</div>
					)}
				</div>
				{/* Role Icon */}
			</div>

			{/* Name and Title */}
			<div className="text-center mb-3">
				<h3 className="text-gray-1 text-lg font-semibold mb-1">{name}</h3>
				<p className="text-green-1 text-md font-medium uppercase tracking-wide">
					{title}
				</p>
			</div>

			{/* Social Links */}
			<div className="flex  mt-auto hover:cursor-pointer">
				{socialLinks?.map((link, index) => (
					<a
						key={index}
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						className="w-20 h-20 bg-gray-8 hover:bg-green-2 rounded-full flex items-center justify-center text-gray-3 hover:text-green-1 transition-all duration-200 text-2xl hover:cursor-pointer"
						title={link.platform}
					>
						{link.icon}
					</a>
				))}
			</div>

			{/* Pitch - Hidden by default, shows on hover with better positioning */}
			<div className="absolute inset-x-2 bottom-2 bg-gray-12/95 backdrop-blur-sm rounded-md p-2 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
				<p className="text-gray-3 text-xs leading-relaxed text-center">
					{pitch}
				</p>
			</div>
		</div>
	);
};

export default TeamCard;
