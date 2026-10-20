import { ArrowUpRight, Server } from "lucide-react";
import { GithubIcon } from "./icons";

function StatusBadge({ status }) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium whitespace-nowrap text-emerald-700 ring-1 ring-emerald-200">
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-emerald-500"
        />
        Live
      </span>
    );
  }
  if (status === "complete") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium whitespace-nowrap text-slate-600 ring-1 ring-slate-200">
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-slate-400"
        />
        Complete
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-medium whitespace-nowrap text-amber-700 ring-1 ring-amber-200">
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full bg-amber-500"
      />
      In Progress
    </span>
  );
}

export default function ProjectCard({ project }) {
  const meta = [project.period, project.location].filter(Boolean).join(" · ");
  const summary = project.tagline || project.description;

  return (
    <article className="reveal flex h-full min-w-0 flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_16px_40px_-24px_rgba(28,25,23,0.35)] sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="text-balance text-[17px] leading-snug font-semibold tracking-tight text-ink">
            {project.name}
          </h3>
          {meta && (
            <p className="mt-1 text-xs font-medium text-muted">{meta}</p>
          )}
        </div>
        <span className="shrink-0">
          <StatusBadge status={project.status} />
        </span>
      </div>

      {summary && (
        <p className="mt-3 text-[15px] leading-relaxed text-pretty text-muted">
          {summary}
        </p>
      )}

      {project.highlights && (
        <ul className="mt-4 flex flex-1 flex-col gap-2.5">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-2.5 text-[14px] leading-relaxed"
            >
              <span
                aria-hidden="true"
                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60"
              />
              <span className="min-w-0 text-pretty text-muted">
                {highlight}
              </span>
            </li>
          ))}
        </ul>
      )}

      {project.tech && (
        <ul
          aria-label={`${project.name} technologies`}
          className="mt-5 flex flex-wrap gap-1.5"
        >
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-line bg-paper-soft px-2 py-0.5 text-[11.5px] font-medium text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      )}
      {project.techNote && (
        <p className="mt-2 text-xs leading-relaxed text-muted">
          {project.techNote}
        </p>
      )}

      {(project.live || project.github || project.backend) && (
        <div className="mt-auto pt-6">
          <div className="flex flex-wrap gap-2 border-t border-line pt-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-ink px-3.5 py-2 text-[13px] font-medium text-white transition-colors hover:bg-accent"
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
                className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3.5 py-2 text-[13px] font-medium text-ink transition-colors hover:border-accent hover:text-accent"
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
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[13px] font-medium text-muted transition-colors hover:text-accent"
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
