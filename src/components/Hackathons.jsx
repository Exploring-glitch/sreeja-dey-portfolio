import { Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { hackathons } from "../data/portfolio";

export default function Hackathons() {
  return (
    <section id="hackathons" className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Hackathons & Open Source"
          title="Building beyond coursework"
        />
        <div className="grid gap-4">
          {hackathons.map((hackathon) => {
            const meta = [hackathon.location, hackathon.period]
              .filter(Boolean)
              .join(" · ");

            return (
              <div
                key={hackathon.event}
                className="reveal flex items-start gap-4 rounded-2xl border border-line bg-white p-6 transition-colors hover:border-line-strong sm:p-7"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent ring-1 ring-accent/10">
                  <Trophy size={19} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold text-ink">
                    {hackathon.event}
                  </h3>
                  {meta && (
                    <p className="mt-1 text-xs font-medium text-muted">
                      {meta}
                    </p>
                  )}
                  <ul className="mt-3 space-y-2">
                    {hackathon.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-[15px] leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60"
                        />
                        <span className="min-w-0 text-pretty">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
