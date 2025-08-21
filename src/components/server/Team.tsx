import { getTeam } from "@/lib/data";
import TeamClient from "../client/TeamClient";
import SectionTitle from "../ui/SectionTitle";
import SectionSubtitle from "../ui/SectionSubtitle";

export default async function Team({ id }: { id: string }) {
  const team = await getTeam();

  return (
    <section id={id} className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto text-center">
        <SectionTitle text="Meet Our Team" />
        <SectionSubtitle text="Meet the people behind Elmakan System — passionate innovators dedicated to delivering impactful solutions." />
        
        <TeamClient team={team} layout="carousel" /> 
        {/* layout="carousel" or "grid" */}
      </div>
    </section>
  );
}
