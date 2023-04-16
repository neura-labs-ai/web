"use client";

import RootContent from "@/components/root/RootContent";
import RootHero from "@/components/root/RootHero";
import RootStats from "@/components/root/RootStats";
import RootTeam from "@/components/root/RootTeam";
import RootTestimonials from "@/components/root/RootTestimonials";

export default function Root() {
  return (
    <>
      <main>
        <RootHero />
        <RootStats />
        <RootContent />
        <RootTestimonials />
        <RootTeam />
      </main>
    </>
  );
}
