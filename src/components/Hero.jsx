import { ArrowDown, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="border-b border-[#E7E5E4]">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="reveal grid items-center gap-10 md:grid-cols-[1.5fr_auto]">
          <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#E7E5E4] bg-white px-3 py-1.5 text-xs font-medium text-[#57534E]">
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rounded-full bg-[#3B6EA5]"
            />
            BCA student · Open to internships
          </p>

          <h1 className="mt-6 max-w-xl text-4xl leading-[1.08] font-semibold tracking-tight text-balance text-[#1C1917] sm:text-5xl">
            Hi, I&apos;m Sreeja Dey.
          </h1>
          <p className="mt-3 max-w-xl text-xl leading-snug text-balance text-[#1C1917] sm:text-2xl">
            I&apos;m a developer who enjoys turning ideas into useful digital
            products.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-pretty text-[#57534E]">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#1C1917] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#3B6EA5]"
            >
              Explore My Work
              <ArrowDown size={15} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#E7E5E4] bg-white px-5 py-2.5 text-sm font-medium text-[#1C1917] transition hover:border-[#3B6EA5] hover:text-[#3B6EA5]"
            >
              <Mail size={15} aria-hidden="true" />
              Get In Touch
            </a>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                download="Sreeja-Dey-Resume.pdf"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#E7E5E4] bg-white px-5 py-2.5 text-sm font-medium text-[#1C1917] transition hover:border-[#3B6EA5] hover:text-[#3B6EA5]"
              >
                <Download size={15} aria-hidden="true" />
                Download Resume
              </a>
            )}
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-md px-2 py-2 font-medium text-[#57534E] transition hover:text-[#3B6EA5] hover:underline hover:underline-offset-4"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-md px-2 py-2 font-medium text-[#57534E] transition hover:text-[#3B6EA5] hover:underline hover:underline-offset-4"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
          </div>
          </div>

          {profile.photo && (
            <div className="order-first justify-self-center md:order-last md:justify-self-end">
              <img
                src={profile.photo}
                alt="Sreeja Dey"
                width={176}
                height={176}
                className="h-36 w-36 rounded-full object-cover ring-1 ring-[#E7E5E4] shadow-[0_12px_32px_-16px_rgba(28,25,23,0.35)] sm:h-44 sm:w-44"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
