import { getTeam } from "@/lib/data";
import SectionTitle from "../ui/SectionTitle";
import SectionSubtitle from "../ui/SectionSubtitle";
import TeamClient from "../client/TeamClient";

export default async function Team({ id }: { id: string }) {
  const team = await getTeam();

  return (
    <section id={id} className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto text-center max-w-85/100 ">
        <SectionTitle text="Meet Our Team" />
        <SectionSubtitle text="Meet the people behind Elmakan System — passionate innovators dedicated to delivering impactful solutions." />
        <TeamClient team={team} />
      </div>
    </section>
  );
}
