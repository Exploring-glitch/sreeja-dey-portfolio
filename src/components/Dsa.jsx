import { ArrowUpRight, Code2, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

export default function Dsa() {
  return (
    <section id="dsa" className="scroll-mt-20 border-b border-[#E7E5E4]">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading
          eyebrow="DSA & Learning"
          title="Consistency over streaks"
          description="I practise data structures and algorithms in C++ alongside web development — focused on fundamentals, not inflated stats."
        />
        <div className="reveal rounded-xl border border-[#E7E5E4] bg-white p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="rounded-lg bg-[#FAFAF9] p-2.5 text-[#3B6EA5] ring-1 ring-[#E7E5E4]">
              <Code2 size={20} aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-semibold text-[#1C1917]">
                Problem-solving in C++
              </h3>
              <p className="mt-1 max-w-2xl text-[15px] leading-relaxed text-[#57534E]">
                Regular practice with arrays, strings, recursion, and basic
                data structures. I solve problems on LeetCode and keep notes
                and solutions on GitHub. No solved-counts or ratings listed
                here — those change weekly and I&apos;d rather show steady
                work than a snapshot number.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#1C1917] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#3B6EA5]"
            >
              LeetCode profile
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#E7E5E4] px-4 py-2 text-sm font-medium text-[#1C1917] transition hover:border-[#3B6EA5] hover:text-[#3B6EA5]"
            >
              <Github size={15} aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
