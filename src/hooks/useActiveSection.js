import { useEffect, useState } from "react";

/** Tracks which in-page section is currently in the reading area of the viewport. */
export default function useActiveSection(ids) {
  const [active, setActive] = useState("");

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
