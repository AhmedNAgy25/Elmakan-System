export const dynamic = "force-static";
export const revalidate = 10;

import { getSuccessors } from "@/lib/data";
import { ITeam } from "@/lib/types";
import SectionTitle from "../ui/SectionTitle";
import SectionSubtitle from "../ui/SectionSubtitle";
import SuccessorsClient from "../client/SuccessorsClient";

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default async function Successors({ id }: { id: string }) {
  const data: ITeam[] = await getSuccessors();
  const successors = shuffleArray(data);

  return (
    <section id={id} className="md:py-20 md:px-6 bg-gray-50">
      <div className="container mx-auto text-center max-w-85/100">
        <SectionTitle text="Our Successors" />
        <SectionSubtitle text="The next generation of engineers growing with Elmakan System." />
        <SuccessorsClient successors={successors} />
      </div>
    </section>
  );
}
