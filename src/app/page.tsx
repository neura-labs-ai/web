"use client";

import RootHero from "@/components/root/RootHero";
import RootStats from "@/components/root/RootStats";
import RootContent from "@/components/root/RootContent";
import RootTestimonials from "@/components/root/RootTestimonials";
import RootTeam from "@/components/root/RootTeam";

export default function Root() {
  return (
    <div>
      <main>
        <RootHero />
        <RootStats />
        <RootContent />
        <RootTestimonials />
        <RootTeam />
      </main>
    </div>
  );
}
