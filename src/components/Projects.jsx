import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-b border-[#E7E5E4]">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading
          eyebrow="Projects"
          title="Featured work"
          description="Real projects with verified links only. Anything still being built is marked In Progress — no fake demos."
        />
        <div className="grid items-stretch gap-5 md:grid-cols-2 [&>*:last-child:nth-child(odd)]:md:col-span-2">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
