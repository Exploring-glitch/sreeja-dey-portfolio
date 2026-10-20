import { ArrowUpRight, Download, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./icons";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

function Channel({ href, icon: Icon, label, value, download }) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
      {...(download ? { download } : {})}
      className="group flex items-center gap-3 rounded-xl border border-line bg-white p-4 transition-colors hover:border-accent/40 hover:bg-accent-soft/50"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-paper-soft text-muted ring-1 ring-line transition-colors group-hover:bg-white group-hover:text-accent">
        <Icon size={16} aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-[10.5px] font-semibold tracking-[0.14em] text-muted uppercase">
          {label}
        </span>
        <span className="mt-0.5 block text-sm font-medium break-words text-ink">
          {value}
        </span>
      </span>
      <ArrowUpRight
        size={15}
        aria-hidden="true"
        className="ml-auto shrink-0 text-line-strong transition-colors group-hover:text-accent"
      />
    </a>
  );
}

export default function Contact() {
  const hasEmail = Boolean(profile.email);
  const hasPhone = Boolean(profile.phone);
  const phoneHref = hasPhone
    ? `tel:${profile.phone.replace(/[^+\d]/g, "")}`
    : "";

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk"
          description="I'm open to full-stack development internships, collaboration on practical projects, and software engineering opportunities."
        />
        <div className="reveal grid gap-3 sm:grid-cols-2">
          {hasEmail && (
            <Channel
              href={`mailto:${profile.email}`}
              icon={Mail}
              label="Email"
              value={profile.email}
            />
          )}
          {hasPhone && (
            <Channel
              href={phoneHref}
              icon={Phone}
              label="Phone"
              value={profile.phone}
            />
          )}
          <Channel
            href={profile.github}
            icon={GithubIcon}
            label="GitHub"
            value="Exploring-glitch"
          />
          <Channel
            href={profile.linkedin}
            icon={LinkedinIcon}
            label="LinkedIn"
            value="sreeja-dey"
          />
          <Channel
            href={profile.leetcode}
            icon={LeetcodeIcon}
            label="LeetCode"
            value="sreeja_solves"
          />
          {profile.resumeUrl && (
            <Channel
              href={profile.resumeUrl}
              icon={Download}
              label="Resume"
              value="Download PDF"
              download="Sreeja-Dey-Resume.pdf"
            />
          )}
        </div>
        <p className="reveal mt-6 max-w-2xl text-[13px] leading-relaxed text-muted">
          The fastest way to reach me is email or phone. If you&apos;re hiring
          interns or want to collaborate, include a bit about the project and
          timeline.
        </p>
      </div>
    </section>
  );
}
