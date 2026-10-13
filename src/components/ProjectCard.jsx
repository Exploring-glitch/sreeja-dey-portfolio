import { ArrowUpRight, Server } from "lucide-react";
import { GithubIcon } from "./icons";

function StatusBadge({ status }) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Live
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700 ring-1 ring-amber-200">
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-amber-500" />
      In Progress
    </span>
  );
}

export default function ProjectCard({ project }) {
  return (
    <article className="reveal flex min-w-0 flex-col rounded-xl border border-[#E7E5E4] bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-16px_rgba(28,25,23,0.3)]">
      <div className="flex items-start justify-between gap-3">
        <h3 className="min-w-0 text-lg font-semibold tracking-tight text-[#1C1917]">
          {project.name}
        </h3>
        <StatusBadge status={project.status} />
      </div>

      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-pretty text-[#57534E]">
        {project.description}
      </p>

      <ul aria-label={`${project.name} technologies`} className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-md bg-[#FAFAF9] px-2 py-1 text-xs font-medium text-[#44403C] ring-1 ring-[#E7E5E4]"
          >
            {t}
          </li>
        ))}
      </ul>
      {project.techNote && (
        <p className="mt-2 text-xs leading-relaxed text-[#57534E]">{project.techNote}</p>
      )}

      {(project.live || project.github || project.backend) && (
        <div className="mt-auto pt-5">
          <div className="flex flex-wrap gap-2 border-t border-[#E7E5E4] pt-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#1C1917] px-3.5 py-2 text-[13px] font-medium text-white transition hover:bg-[#3B6EA5]"
            >
              Live Demo
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#E7E5E4] px-3.5 py-2 text-[13px] font-medium text-[#1C1917] transition hover:border-[#3B6EA5] hover:text-[#3B6EA5]"
            >
              <GithubIcon size={14} />
              GitHub
            </a>
          )}
          {project.backend && (
            <a
              href={project.backend}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-[#E7E5E4] px-3.5 py-2 text-[13px] font-medium text-[#57534E] transition hover:border-[#3B6EA5] hover:text-[#3B6EA5]"
            >
              <Server size={14} aria-hidden="true" />
              API
            </a>
          )}
          </div>
        </div>
      )}
    </article>
  );
}
