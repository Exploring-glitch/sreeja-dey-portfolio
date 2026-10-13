import { useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E7E5E4] bg-[#FAFAF9]/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          className="text-[17px] font-semibold tracking-tight text-[#1C1917]"
        >
          Sreeja Dey
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-[#57534E] transition-colors hover:text-[#1C1917]"
              >
                {link.label}
              </a>
            </li>
          ))}
          {profile.resumeUrl && (
            <li>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#E7E5E4] bg-white px-3.5 py-2 text-sm font-medium text-[#1C1917] transition hover:border-[#3B6EA5] hover:text-[#3B6EA5]"
              >
                <FileText size={15} aria-hidden="true" />
                Resume
              </a>
            </li>
          )}
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-[#E7E5E4] bg-white p-2 text-[#1C1917] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-[#E7E5E4] md:hidden">
          <ul className="space-y-1 px-5 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-[#1C1917] hover:bg-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            {profile.resumeUrl && (
              <li>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 flex items-center gap-2 rounded-lg border border-[#E7E5E4] bg-white px-3 py-2.5 text-[15px] font-medium"
                >
                  <FileText size={15} aria-hidden="true" />
                  Resume
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
