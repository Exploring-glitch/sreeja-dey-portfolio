import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-b border-[#E7E5E4]">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          description="Grouped by how I actually use them. No proficiency bars — the projects below show what I can do."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="reveal rounded-xl border border-[#E7E5E4] bg-white p-6 transition-shadow hover:shadow-[0_8px_24px_-12px_rgba(28,25,23,0.25)]"
            >
              <h3 className="text-sm font-semibold tracking-wide text-[#1C1917] uppercase">
                {group.title}
              </h3>
              {group.note && (
                <p className="mt-1 text-xs leading-relaxed text-[#57534E]">
                  {group.note}
                </p>
              )}
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-[#E7E5E4] bg-[#FAFAF9] px-3 py-1 text-[13px] font-medium text-[#44403C]"
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
