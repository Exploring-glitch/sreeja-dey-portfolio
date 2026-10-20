import { useEffect, useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";
import useActiveSection from "../hooks/useActiveSection";

const sectionIds = navLinks.map((link) => link.href.slice(1));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-[15px] font-semibold tracking-tight text-ink"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-[11px] font-semibold tracking-widest text-white transition-colors group-hover:bg-accent"
          >
            SD
          </span>
          Sreeja Dey
        </a>

        <ul className="hidden items-center gap-5 md:flex lg:gap-6">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`group relative text-[13.5px] font-medium transition-colors ${
                    isActive ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-accent transition-transform duration-200 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              </li>
            );
          })}
          {profile.resumeUrl && (
            <li>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-ink px-3.5 py-2 text-[13.5px] font-medium text-white transition-colors hover:bg-accent"
              >
                <FileText size={15} aria-hidden="true" />
                Resume
              </a>
            </li>
          )}
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-line bg-white p-2 text-ink transition-colors hover:border-line-strong md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-line bg-paper/95 backdrop-blur-md md:hidden"
        >
          <ul className="space-y-0.5 px-5 py-4">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "location" : undefined}
                    className={`block rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors ${
                      isActive
                        ? "bg-accent-soft text-accent-dark"
                        : "text-ink hover:bg-paper-soft"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            {profile.resumeUrl && (
              <li className="pt-2">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-ink px-3 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-accent"
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
