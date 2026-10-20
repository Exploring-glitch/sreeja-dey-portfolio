import { BookOpen } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { coursework } from "../data/portfolio";

export default function Coursework() {
  return (
    <section id="coursework" className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading eyebrow="Coursework" title="What I've studied" />
        <div className="reveal rounded-2xl border border-line bg-white p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent ring-1 ring-accent/10">
              <BookOpen size={19} aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-semibold text-ink">Relevant coursework</h3>
              <p className="mt-1.5 max-w-2xl text-[15px] leading-relaxed text-muted">
                Core subjects from my BCA program and self-study.
              </p>
            </div>
          </div>
          <ul className="mt-6 flex flex-wrap gap-1.5 sm:pl-14">
            {coursework.map((course) => (
              <li
                key={course}
                className="rounded-md border border-line bg-paper-soft px-2.5 py-1 text-[13px] font-medium text-ink"
              >
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
