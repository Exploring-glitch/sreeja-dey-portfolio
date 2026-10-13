import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-b border-[#E7E5E4]">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading eyebrow="Education" title="Where I'm studying" />
        <div className="grid gap-4">
          {education.map((e) => (
            <div
              key={e.school}
              className="reveal flex items-start gap-4 rounded-xl border border-[#E7E5E4] bg-white p-6"
            >
              <span className="rounded-lg bg-[#FAFAF9] p-2.5 text-[#3B6EA5] ring-1 ring-[#E7E5E4]">
                <GraduationCap size={20} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold text-[#1C1917]">{e.degree}</h3>
                <p className="mt-0.5 text-sm font-medium text-[#3B6EA5]">
                  {e.school}
                </p>
                <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-[#57534E]">
                  {e.detail}
                </p>
              </div>
            </div>
          ))}
          <p className="reveal text-sm text-[#8A8580]">
            No employment history or certifications listed — I&apos;m applying
            for my first internships.
          </p>
        </div>
      </div>
    </section>
  );
}
