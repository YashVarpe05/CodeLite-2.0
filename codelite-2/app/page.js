import Loader from "@/components/Loader";
import AboutSection from "@/components/About";
import Team from "@/components/Team";

export default function Home() {
	return (
		<div>
			<Loader />
			<AboutSection />
			<Team />
		</div>
	);
}
