import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./icons";
import { profile } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#FAFAF9]">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center sm:px-8">
        <p className="text-sm text-[#57534E]">
          © {year} {profile.name}. Built with React &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-4 text-sm font-medium">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center gap-1.5 text-[#57534E] transition hover:text-[#3B6EA5]"
          >
            <GithubIcon size={16} />
            <span className="sr-only sm:not-sr-only">GitHub</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center gap-1.5 text-[#57534E] transition hover:text-[#3B6EA5]"
          >
            <LinkedinIcon size={16} />
            <span className="sr-only sm:not-sr-only">LinkedIn</span>
          </a>
          <a
            href={profile.leetcode}
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
            className="inline-flex items-center gap-1.5 text-[#57534E] transition hover:text-[#3B6EA5]"
          >
            <LeetcodeIcon size={16} />
            <span className="sr-only sm:not-sr-only">LeetCode</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
