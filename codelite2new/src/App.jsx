import React from "react";
import TopBanner from "./components/TopBanner";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CountdownSection from "./components/CountdownSection";
import StatsSection from "./components/StatsSection";
import EcosystemLogos from "./components/EcosystemLogos";
import CommunitySection from "./components/CommunitySection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import CommunityPartnersection from "./components/CommunityPartnersection";

function App() {
	return (
		<div className="bg-gray-11 text-white">
			{/* <TopBanner /> */}

			<div className="mx-auto max-w-[90rem]">
				<Header />

				<main>
					<HeroSection />

					{/* Video embed */}
					<div className="px-6">
						<div className="border-gray-7 before:border-gray-8 pointer-events-none relative mx-auto aspect-video w-full max-w-4xl -translate-y-8 rounded-lg border-2 before:absolute before:-inset-1.5 before:rounded-lg before:border md:-translate-y-24">
							<iframe
								title="Introducing Colosseum Video"
								src="https://www.youtube.com/embed/qDI3lFYPQ2E?si=kib8Ej7PWvGgRTGv"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
								className="pointer-events-auto aspect-video w-full rounded-[6px]"
							></iframe>
						</div>
					</div>

					<CountdownSection />
					<StatsSection />
					<EcosystemLogos />
					<CommunityPartnersection />
					<CommunitySection />
					<TestimonialsSection />
				</main>

				<Footer />
			</div>
		</div>
	);
}

export default App;
