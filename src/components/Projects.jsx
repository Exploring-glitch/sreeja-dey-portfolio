import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Projects"
          title="Featured work"
          description="Full-stack projects with live demos and source code — spanning social networking, hiring marketplaces, developer tools, and team productivity."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
