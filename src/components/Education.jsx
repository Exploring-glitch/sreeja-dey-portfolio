import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading eyebrow="Education" title="Where I'm studying" />
        <div className="grid gap-4">
          {education.map((item) => {
            const meta = [item.period, item.location, item.board]
              .filter(Boolean)
              .join(" · ");

            return (
              <div
                key={item.school}
                className="reveal flex items-start gap-4 rounded-2xl border border-line bg-white p-6 transition-colors hover:border-line-strong sm:p-7"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent ring-1 ring-accent/10">
                  <GraduationCap size={19} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold text-ink">{item.degree}</h3>
                  <p className="mt-0.5 text-sm font-medium text-accent">
                    {item.school}
                  </p>
                  {meta && (
                    <p className="mt-1 text-xs font-medium text-muted">
                      {meta}
                    </p>
                  )}
                  <p className="mt-2.5 max-w-2xl text-[15px] leading-relaxed text-muted">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
          <p className="reveal max-w-2xl px-1 text-[13px] leading-relaxed text-muted">
            No employment history or certifications listed — I&apos;m applying
            for my first internships.
          </p>
        </div>
      </div>
    </section>
  );
}
