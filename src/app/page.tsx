"use client";

import RootContent from "@/components/ui/root/RootContent";
import RootHero from "@/components/ui/root/RootHero";
import RootStats from "@/components/ui/root/RootStats";
import RootTeam from "@/components/ui/root/RootTeam";
import RootTestimonials from "@/components/ui/root/RootTestimonials";

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
