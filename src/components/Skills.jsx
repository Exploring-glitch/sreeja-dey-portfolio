import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          description="Grouped by how I actually use them. No proficiency bars — the projects below show what I can do."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="reveal rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_12px_32px_-20px_rgba(28,25,23,0.3)]"
            >
              <h3 className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                />
                {group.title}
              </h3>
              {group.note && (
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {group.note}
                </p>
              )}
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-line bg-paper-soft px-2.5 py-1 text-[13px] font-medium text-ink"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
