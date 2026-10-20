import SectionHeading from "./SectionHeading";

const facts = [
  {
    label: "Studying",
    value: "BCA, Techno India University, Kolkata",
  },
  { label: "Focus", value: "Full-stack web development (MERN)" },
  { label: "Practice", value: "DSA in C++, LeetCode" },
  { label: "Looking for", value: "Internships & software engineering opportunities" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="About"
          title="A student developer learning by building"
        />
        <div className="reveal grid gap-10 md:grid-cols-[1.5fr_1fr] md:gap-12">
          <div className="max-w-[65ch] space-y-4 text-pretty leading-relaxed text-muted">
            <p>
              I&apos;m studying for my BCA at Techno India University, Kolkata,
              where I started with C and Python and gradually moved toward web
              development. What kept me going was seeing a page I built actually
              work for someone else.
            </p>
            <p>
              These days I mostly work with the MERN stack — React on the
              frontend, Node.js and Express on the backend, MongoDB for data.
              I&apos;ve built things like a campus social platform, a
              role-based task manager, and a URL shortener, which taught me
              more about auth, APIs, and deployment than any tutorial did.
            </p>
            <p>
              Alongside that, I practise data structures and algorithms in C++
              and solve problems on LeetCode. I&apos;m currently looking for
              full-stack development internships where I can contribute to real
              projects and keep improving.
            </p>
          </div>

          <aside className="h-fit rounded-2xl border border-line bg-white p-6 sm:p-7">
            <h3 className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-accent"
              />
              At a glance
            </h3>
            <dl className="mt-5 space-y-4 text-sm">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[11px] font-medium tracking-[0.08em] text-muted uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 leading-snug font-medium text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
