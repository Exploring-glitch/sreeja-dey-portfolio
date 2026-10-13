import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="border-b border-[#E7E5E4]">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="reveal max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#E7E5E4] bg-white px-3 py-1.5 text-xs font-medium text-[#57534E]">
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rounded-full bg-[#3B6EA5]"
            />
            BCA student · Open to internships
          </p>

          <h1 className="mt-6 text-4xl leading-[1.1] font-semibold tracking-tight text-[#1C1917] sm:text-5xl">
            Hi, I&apos;m Sreeja Dey.
          </h1>
          <p className="mt-3 text-xl leading-snug text-[#1C1917] sm:text-2xl">
            I&apos;m a developer who enjoys turning ideas into useful digital
            products.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-[#57534E]">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-[#1C1917] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#3B6EA5]"
            >
              Explore My Work
              <ArrowDown size={15} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-[#E7E5E4] bg-white px-5 py-2.5 text-sm font-medium text-[#1C1917] transition hover:border-[#3B6EA5] hover:text-[#3B6EA5]"
            >
              <Mail size={15} aria-hidden="true" />
              Get In Touch
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4 text-sm">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-[#57534E] transition hover:text-[#3B6EA5]"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-[#57534E] transition hover:text-[#3B6EA5]"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
