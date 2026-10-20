import { ArrowUpRight, Code2 } from "lucide-react";
import { GithubIcon } from "./icons";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

export default function Dsa() {
  return (
    <section id="dsa" className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="DSA & Learning"
          title="Consistency over streaks"
          description="I practise data structures and algorithms in C++ alongside web development — focused on fundamentals, not inflated stats."
        />
        <div className="reveal rounded-2xl border border-line bg-white p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent ring-1 ring-accent/10">
              <Code2 size={19} aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-semibold text-ink">Problem-solving in C++</h3>
              <p className="mt-1.5 max-w-2xl text-[15px] leading-relaxed text-muted">
                Regular practice with arrays, strings, recursion, and basic
                data structures. I solve problems on LeetCode and keep notes
                and solutions on GitHub. No solved-counts or ratings listed
                here — those change weekly and I&apos;d rather show steady work
                than a snapshot number.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 pl-0 sm:pl-14">
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent"
            >
              LeetCode profile
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <GithubIcon size={15} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
