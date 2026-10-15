import { BookOpen } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { coursework } from "../data/portfolio";

export default function Coursework() {
  return (
    <section id="coursework" className="scroll-mt-20 border-b border-[#E7E5E4]">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading eyebrow="Coursework" title="What I've studied" />
        <div className="reveal rounded-xl border border-[#E7E5E4] bg-white p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="rounded-lg bg-[#FAFAF9] p-2.5 text-[#3B6EA5] ring-1 ring-[#E7E5E4]">
              <BookOpen size={20} aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-semibold text-[#1C1917]">Relevant coursework</h3>
              <p className="mt-1 max-w-2xl text-[15px] leading-relaxed text-[#57534E]">
                Core subjects from my BCA program and self-study.
              </p>
            </div>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {coursework.map((c) => (
              <li
                key={c}
                className="rounded-full border border-[#E7E5E4] bg-[#FAFAF9] px-3 py-1 text-[13px] font-medium text-[#44403C]"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
