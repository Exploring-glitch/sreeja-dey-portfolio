import { ArrowDown, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(44rem_24rem_at_78%_-12%,var(--color-accent-soft),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="reveal grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-14">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-muted">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
              />
              BCA student · Open to internships
            </p>

            <h1 className="mt-6 max-w-xl text-balance text-4xl leading-[1.05] font-semibold tracking-tight text-ink sm:text-[3.4rem]">
              Hi, I&apos;m <span className="text-accent">Sreeja Dey.</span>
            </h1>
            <p className="mt-3 max-w-xl text-balance text-xl leading-snug text-ink sm:text-2xl">
              I&apos;m a developer who enjoys turning ideas into useful digital
              products.
            </p>
            <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent"
              >
                Explore My Work
                <ArrowDown size={15} aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <Mail size={15} aria-hidden="true" />
                Get In Touch
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-line bg-white/70 px-3.5 font-medium text-muted transition-colors hover:border-line-strong hover:text-ink"
              >
                <GithubIcon size={15} />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-line bg-white/70 px-3.5 font-medium text-muted transition-colors hover:border-line-strong hover:text-ink"
              >
                <LinkedinIcon size={15} />
                LinkedIn
              </a>
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  download="Sreeja-Dey-Resume.pdf"
                  className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-line bg-white/70 px-3.5 font-medium text-muted transition-colors hover:border-line-strong hover:text-ink"
                >
                  <Download size={15} aria-hidden="true" />
                  Resume
                </a>
              )}
            </div>
          </div>

          {profile.photo && (
            <div className="relative order-first justify-self-center md:order-last md:justify-self-end">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-full bg-accent-soft"
              />
              <img
                src={profile.photo}
                alt="Sreeja Dey"
                width={176}
                height={176}
                decoding="async"
                className="relative h-36 w-36 rounded-full object-cover shadow-[0_16px_40px_-20px_rgba(28,25,23,0.45)] ring-1 ring-line sm:h-44 sm:w-44"
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
