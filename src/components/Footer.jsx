import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./icons";
import { profile } from "../data/portfolio";

const year = new Date().getFullYear();

const socials = [
  { label: "GitHub", href: profile.github, Icon: GithubIcon },
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedinIcon },
  { label: "LeetCode", href: profile.leetcode, Icon: LeetcodeIcon },
];

export default function Footer() {
  return (
    <footer className="bg-paper-soft">
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <a
              href="#top"
              className="group inline-flex items-center gap-2.5 text-[15px] font-semibold tracking-tight text-ink"
            >
              <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-[11px] font-semibold tracking-widest text-white transition-colors group-hover:bg-accent"
              >
                SD
              </span>
              {profile.name}
            </a>
            <p className="mt-2 text-[13px] text-muted">
              {profile.role} · Kolkata, India
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white text-muted transition-colors hover:border-line-strong hover:text-accent"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col-reverse items-start justify-between gap-3 border-t border-line pt-5 sm:flex-row sm:items-center">
          <p className="text-[13px] text-muted">
            © {year} {profile.name}. Built with React &amp; Tailwind CSS.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted transition-colors hover:text-accent"
          >
            Back to top
            <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
