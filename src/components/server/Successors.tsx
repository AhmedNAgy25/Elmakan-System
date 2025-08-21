export const dynamic = "force-static";
export const revalidate = 10;

import { getSuccessors } from "@/lib/data";
import { ITeam } from "@/lib/types";
import SectionTitle from "../ui/SectionTitle";
import SectionSubtitle from "../ui/SectionSubtitle";
import SuccessorsClient from "../client/SuccessorsClient";

export default async function Successors({ id }: { id: string }) {
  const successors: ITeam[] = await getSuccessors();

  return (
    <section id={id} className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto text-center">
        <SectionTitle text="Our Successors" />
        <SectionSubtitle text="The next generation of engineers growing with Elmakan System." />
        <SuccessorsClient successors={successors} />
      </div>
    </section>
  );
}
