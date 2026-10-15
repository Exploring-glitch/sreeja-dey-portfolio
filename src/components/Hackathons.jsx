import { Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { hackathons } from "../data/portfolio";

export default function Hackathons() {
  return (
    <section id="hackathons" className="scroll-mt-20 border-b border-[#E7E5E4]">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading
          eyebrow="Hackathons & Open Source"
          title="Building beyond coursework"
        />
        <div className="grid gap-4">
          {hackathons.map((h) => (
            <div
              key={h.event}
              className="reveal flex items-start gap-4 rounded-xl border border-[#E7E5E4] bg-white p-6"
            >
              <span className="rounded-lg bg-[#FAFAF9] p-2.5 text-[#3B6EA5] ring-1 ring-[#E7E5E4]">
                <Trophy size={20} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold text-[#1C1917]">{h.event}</h3>
                {(h.period || h.location) && (
                  <p className="mt-1 text-xs font-medium text-[#57534E]">
                    {[h.location, h.period].filter(Boolean).join(" · ")}
                  </p>
                )}
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-[#57534E]">
                  {h.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
