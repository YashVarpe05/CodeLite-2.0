import React from "react";

const CommunityPartnersection = () => {
	const ecosystemLogos = [
		{ src: "/images/ecosystems/logo_lightprotocol.png", alt: "Light Protocol" },
		{ src: "/images/ecosystems/logo_zeta.png", alt: "Zeta" },
		{ src: "/images/ecosystems/logo_ionet.png", alt: "IONet" },
	];

	return (
		<section>
			<div className="text-gray-1 mx-auto max-w-6xl px-6 sm:mb-24 md:mb-48">
				<div className="mb-16 md:mb-16">
					<div className="mb-8 w-fit">
						<svg
							width="286"
							height="97"
							viewBox="0 0 286 97"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.669922 55.3027V46.8877C0.669922 46.4775 0.916016 46.2383 1.20996 46.1904C1.24414 46.1836 1.28516 46.1836 1.32617 46.1836C1.43555 46.1836 1.54492 46.2041 1.6543 46.252C1.81152 46.3135 1.94141 46.4297 2.04395 46.5938L4.00586 49.6836L5.96094 46.5938C6.0498 46.4297 6.17969 46.3135 6.34375 46.252C6.45996 46.2041 6.57617 46.1768 6.68555 46.1836C6.71973 46.1836 6.76074 46.1836 6.79492 46.1904C7.08887 46.2383 7.33496 46.4775 7.33496 46.8877V55.3027C7.34863 56.2324 5.93359 56.2324 5.93359 55.3027V49.2939L4.83301 50.9346C4.74414 51.0781 4.73047 51.2217 4.73047 51.4199V51.5771C4.73047 51.8164 4.65527 52.001 4.50488 52.1172C4.34766 52.2402 4.18359 52.3018 4.00586 52.3018C3.82812 52.3018 3.66406 52.2402 3.50684 52.1172C3.34961 52.001 3.27441 51.8164 3.27441 51.5771V51.4199C3.27441 51.208 3.26758 51.0781 3.17871 50.9346L2.07129 49.2939V55.3027C2.08496 56.2324 0.669922 56.2324 0.669922 55.3027Z"
								fill="#343434"
							></path>
						</svg>
					</div>
					<div className="relative isolate flex items-center justify-between">
						<div className="absolute -bottom-[40%] right-0 -z-10 w-32 sm:bottom-1/2 sm:block sm:translate-y-1/2 md:bottom-[11%] md:w-36 lg:bottom-1/2 lg:w-auto w-fit">
							<svg
								width="170"
								height="164"
								viewBox="0 0 170 164"
								fill="none"
								className="absolute -bottom-[40%] right-0 -z-10 w-32 sm:bottom-1/2 sm:block sm:translate-y-1/2 md:bottom-[11%] md:w-36 lg:bottom-1/2 lg:w-auto"
								xmlns="http://www.w3.org/2000/svg"
							>
								<mask
									id="mask0_2385_279105"
									style={{ maskType: "alpha" }}
									maskUnits="userSpaceOnUse"
									x="30"
									y="27"
									width="111"
									height="111"
								>
									<circle
										cx="55.0444"
										cy="55.0444"
										r="54.6808"
										transform="matrix(-1 0 0 1 140.09 27)"
										fill="url(#paint0_linear_2385_279105)"
										stroke="#414141"
										strokeWidth="0.727352"
									></circle>
								</mask>
								<g mask="url(#mask0_2385_279105)">
									<circle
										cx="55.0444"
										cy="55.0444"
										r="54.6808"
										transform="matrix(-0.5 -0.866025 -0.866025 0.5 160.238 102.193)"
										fill="url(#paint1_linear_2385_279105)"
										stroke="#343434"
										strokeWidth="0.727352"
									></circle>
									<path
										d="M132.804 55.4048C131.836 53.7289 129.653 52.7629 126.357 52.5642C123.078 52.3666 118.801 52.9374 113.809 54.218C103.831 56.7778 91.0838 62.1522 77.9404 69.7406C64.797 77.329 53.769 85.6812 46.5631 93.0424C42.9583 96.7249 40.3252 100.144 38.8569 103.083C37.3809 106.036 37.1261 108.41 38.0937 110.086C39.0612 111.761 41.244 112.727 44.54 112.926C47.8189 113.124 52.0967 112.553 57.0882 111.272C67.0661 108.713 79.8134 103.338 92.9568 95.7497C106.1 88.1614 117.128 79.8092 124.334 72.448C127.939 68.7655 130.572 65.3462 132.04 62.4078C133.516 59.454 133.771 57.0807 132.804 55.4048Z"
										stroke="#343434"
										strokeWidth="0.727352"
									></path>
									<path
										d="M132.807 55.4057C127.63 46.44 117.667 41.3248 105.679 40.3494C93.6925 39.3742 79.7188 42.5449 66.611 50.1127C53.5032 57.6805 43.7704 68.1967 38.6217 79.0649C33.4723 89.9348 32.9206 101.121 38.0969 110.086C43.2732 119.052 53.2364 124.167 65.2247 125.143C77.2113 126.118 91.1849 122.947 104.293 115.379C117.401 107.812 127.133 97.2954 132.282 86.4272C137.431 75.5573 137.983 64.3713 132.807 55.4057Z"
										stroke="#343434"
										strokeWidth="0.727352"
									></path>
									<path
										d="M112.388 129.399C119.974 125.019 123.88 115.792 123.973 104.301C124.067 92.8205 120.347 79.1541 112.774 66.0366C105.2 52.9191 95.2247 42.8649 85.2353 37.2053C75.2375 31.5409 65.2934 30.3095 57.7073 34.6894C50.1212 39.0692 46.2155 48.2967 46.1222 59.7873C46.0289 71.2681 49.7482 84.9345 57.3215 98.052C64.8949 111.169 74.8707 121.224 84.8601 126.883C94.8579 132.548 104.802 133.779 112.388 129.399Z"
										stroke="#343434"
										strokeWidth="0.727352"
									></path>
									<path
										d="M112.384 129.399C112.95 129.072 113.377 128.456 113.634 127.509C113.891 126.559 113.968 125.312 113.86 123.788C113.645 120.742 112.698 116.674 111.099 111.86C107.905 102.238 102.135 89.7088 94.5431 76.5598C86.9515 63.4108 78.9863 52.1493 72.2505 44.5715C68.8806 40.7804 65.8312 37.926 63.3009 36.2163C62.035 35.361 60.9163 34.8042 59.9655 34.5525C59.0161 34.3012 58.2696 34.3624 57.7033 34.6894C57.1369 35.0164 56.7107 35.6322 56.4536 36.5801C56.1962 37.5293 56.119 38.7766 56.2268 40.3005C56.4422 43.3467 57.3895 47.4147 58.9878 52.2287C62.1825 61.851 67.9526 74.3798 75.5442 87.5288C83.1358 100.678 91.1009 111.939 97.8368 119.517C101.207 123.308 104.256 126.163 106.786 127.872C108.052 128.728 109.171 129.284 110.122 129.536C111.071 129.787 111.818 129.726 112.384 129.399Z"
										stroke="#343434"
										strokeWidth="0.727352"
									></path>
								</g>
								<g style={{ mixBlendMode: "color-dodge" }} opacity="0.8">
									<rect
										width="153.514"
										height="2.31795"
										transform="matrix(-1 8.74228e-08 8.74228e-08 1 162 79.6838)"
										fill="#D864D8"
									></rect>
									<rect
										width="64.205"
										height="2.7699"
										transform="matrix(-1 8.74228e-08 8.74228e-08 1 88.0332 86.0654)"
										fill="#D864D8"
									></rect>
									<rect
										width="39.8737"
										height="2.31797"
										transform="matrix(-1 8.74228e-08 8.74228e-08 1 111.658 96.6819)"
										fill="#D864D8"
									></rect>
									<rect
										width="39.8737"
										height="2.31797"
										transform="matrix(-1 8.74228e-08 8.74228e-08 1 111.658 96.6819)"
										fill="#D864D8"
									></rect>
									<rect
										width="129.819"
										height="5.5398"
										transform="matrix(1 -1.22822e-07 -3.03323e-07 -1 4 87.1731)"
										fill="#E7FCF7"
									></rect>
									<rect
										width="45.3212"
										height="2.21592"
										transform="matrix(1 -1.22822e-07 -3.03323e-07 -1 87.0898 79.9719)"
										fill="#E7FCF7"
									></rect>
									<rect
										width="34.9351"
										height="1.66194"
										transform="matrix(1 -1.22822e-07 -3.03323e-07 -1 51.209 71.6619)"
										fill="#E7FCF7"
									></rect>
									<rect
										width="34.8895"
										height="5.4086"
										transform="matrix(-1 8.74228e-08 8.74228e-08 1 115.646 84.3196)"
										fill="#25D0AB"
									></rect>
									<rect
										width="24.4226"
										height="2.31797"
										transform="matrix(-1 8.74228e-08 8.74228e-08 1 41.3809 96.6819)"
										fill="#25D0AB"
									></rect>
									<rect
										width="24.4226"
										height="2.31797"
										transform="matrix(-1 8.74228e-08 8.74228e-08 1 64.3105 79.6838)"
										fill="#25D0AB"
									></rect>
									<rect
										width="13.9558"
										height="2.31797"
										transform="matrix(-1 8.74228e-08 8.74228e-08 1 91.7207 82.7742)"
										fill="#25D0AB"
									></rect>
									<rect
										width="11.9621"
										height="3.09063"
										transform="matrix(-1 8.74228e-08 8.74228e-08 1 30.9141 84.3196)"
										fill="#0F0F0F"
									></rect>
									<rect
										width="22.9274"
										height="2.31797"
										transform="matrix(-1 8.74228e-08 8.74228e-08 1 71.7852 86.6377)"
										fill="#0F0F0F"
									></rect>
									<rect
										width="32.8142"
										height="2.80645"
										transform="matrix(-1 8.74228e-08 8.74228e-08 1 117.855 86.8379)"
										fill="#0F0F0F"
									></rect>
								</g>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M10.1821 153.471V159.29H10.9094V153.471L16.7283 153.471V152.744L10.9094 152.744V146.925H10.1821V152.744L4.36328 152.744V153.471L10.1821 153.471Z"
									fill="#343434"
								></path>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M158.561 153.471V159.29H159.288V153.471L165.107 153.471V152.744L159.288 152.744V146.925H158.561V152.744L152.742 152.744V153.471L158.561 153.471Z"
									fill="#343434"
								></path>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M10.1821 10.9102V16.729H10.9094V10.9102L16.7283 10.9102V10.1828L10.9094 10.1828V4.36401H10.1821V10.1828L4.36328 10.1828V10.9102L10.1821 10.9102Z"
									fill="#343434"
								></path>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M158.561 10.9102V16.729H159.288V10.9102L165.107 10.9102V10.1828L159.288 10.1828V4.36401H158.561V10.1828L152.742 10.1828V10.9102L158.561 10.9102Z"
									fill="#343434"
								></path>
								<defs>
									<linearGradient
										id="paint0_linear_2385_279105"
										x1="55.0444"
										y1="0"
										x2="55.0444"
										y2="110.089"
										gradientUnits="userSpaceOnUse"
									>
										<stop stopColor="#191817"></stop>
										<stop offset="1" stopColor="#191817"></stop>
									</linearGradient>
									<linearGradient
										id="paint1_linear_2385_279105"
										x1="55.0444"
										y1="0"
										x2="55.0444"
										y2="110.089"
										gradientUnits="userSpaceOnUse"
									>
										<stop stopColor="#191817"></stop>
										<stop offset="1" stopColor="#191817"></stop>
									</linearGradient>
								</defs>
							</svg>
						</div>
						<h2 className="max-w-3xl text-[2.5rem] font-semibold leading-[3rem] md:text-5xl md:leading-[3.5rem]">
							Community Partners
						</h2>
					</div>
				</div>
				<div>
					<ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
						{ecosystemLogos.map((logo, index) => (
							<li key={index}>
								<div className="border-gray-8 bg-gray-13 bg-grid-1 outline-gray-9 hover:border-gray-7 hover:before:content-right-angle hover:after:border-gray-8 hover:after:content-right-angle relative flex h-28 items-center justify-center rounded-lg border bg-opacity-50 bg-center bg-no-repeat p-4 opacity-80 outline outline-2 -outline-offset-[6px] hover:bg-transparent hover:opacity-100 hover:outline-none hover:before:absolute hover:before:bottom-1 hover:before:left-3 hover:before:rotate-180 hover:after:absolute hover:after:flex hover:after:h-[calc(100%-0.4rem)] hover:after:w-[calc(100%-0.5rem)] hover:after:items-start hover:after:justify-end hover:after:rounded-lg hover:after:border hover:after:pr-2">
									<img src={logo.src} alt={logo.alt} />
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default CommunityPartnersection;
