import React from "react";
import LandingContent from "@/components/landing/LandingContent";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingHero from "@/components/landing/LandingHero";
import LandingTeam from "@/components/landing/LandingTeam";
import LandingTestimonials from "@/components/landing/LandingTestimonials";
import LandingStats from "@/components/landing/landingStats";

import { getLandingStats } from "@/lib/utils";

const Page = async () => {
	let stats = await getLandingStats();

	return (
		<div>
			<LandingHeader />
			<LandingHero />
			<LandingStats data={stats} />
			<LandingContent />
			<LandingTestimonials />
			<LandingTeam />
		</div>
	);
};

export default Page;
