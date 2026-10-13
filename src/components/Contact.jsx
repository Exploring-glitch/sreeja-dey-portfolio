import { Download, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./icons";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

export default function Contact() {
  const hasEmail = Boolean(profile.email);
  const hasPhone = Boolean(profile.phone);
  const phoneHref = hasPhone
    ? `tel:${profile.phone.replace(/[^+\d]/g, "")}`
    : "";

  return (
    <section id="contact" className="scroll-mt-20 border-b border-[#E7E5E4]">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk"
          description="I'm open to full-stack development internships, collaboration on practical projects, and software engineering opportunities."
        />
        <div className="reveal rounded-xl border border-[#E7E5E4] bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#E7E5E4] bg-[#FAFAF9] px-4 py-2.5 text-sm font-medium text-[#1C1917] transition hover:border-[#3B6EA5] hover:text-[#3B6EA5]"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#E7E5E4] bg-[#FAFAF9] px-4 py-2.5 text-sm font-medium text-[#1C1917] transition hover:border-[#3B6EA5] hover:text-[#3B6EA5]"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#E7E5E4] bg-[#FAFAF9] px-4 py-2.5 text-sm font-medium text-[#1C1917] transition hover:border-[#3B6EA5] hover:text-[#3B6EA5]"
            >
              <LeetcodeIcon size={16} />
              LeetCode
            </a>
            {hasEmail ? (
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#1C1917] px-4 py-2.5 text-sm font-medium break-all text-white transition hover:bg-[#3B6EA5]"
              >
                <Mail size={16} aria-hidden="true" className="shrink-0" />
                {profile.email}
              </a>
            ) : (
              <p className="inline-flex items-center rounded-lg border border-dashed border-[#E7E5E4] px-4 py-2.5 text-sm text-[#57534E]">
                Email on request — reach me via LinkedIn or GitHub
              </p>
            )}
            {hasPhone && (
              <a
                href={phoneHref}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#E7E5E4] bg-[#FAFAF9] px-4 py-2.5 text-sm font-medium text-[#1C1917] transition hover:border-[#3B6EA5] hover:text-[#3B6EA5]"
              >
                <Phone size={16} aria-hidden="true" />
                {profile.phone}
              </a>
            )}
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                download="Sreeja-Dey-Resume.pdf"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#E7E5E4] bg-[#FAFAF9] px-4 py-2.5 text-sm font-medium text-[#1C1917] transition hover:border-[#3B6EA5] hover:text-[#3B6EA5]"
              >
                <Download size={16} aria-hidden="true" />
                Download Resume
              </a>
            )}
          </div>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#57534E]">
            The fastest way to reach me is email or phone. If you&apos;re
            hiring interns or want to collaborate, include a bit about the
            project and timeline.
          </p>
        </div>
      </div>
    </section>
  );
}
