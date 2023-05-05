import LandingContent from "@/components/landing/LandingContent";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingHero from "@/components/landing/LandingHero";
import LandingTeam from "@/components/landing/LandingTeam";
import LandingTestimonials from "@/components/landing/LandingTestimonials";
import LandingStats from "@/components/landing/landingStats";
import React from "react";

const Page = () => {
  return (
    <div>
      <LandingHeader />
      <LandingHero />
      {/* @ts-ignore */}
      <LandingStats />
      <LandingContent />
      <LandingTestimonials />
      <LandingTeam />
    </div>
  );
};

export default Page;
