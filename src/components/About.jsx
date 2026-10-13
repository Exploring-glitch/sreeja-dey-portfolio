import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-[#E7E5E4]">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading eyebrow="About" title="A student developer learning by building" />
        <div className="reveal grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 leading-relaxed text-[#44403C]">
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
          <aside className="h-fit rounded-xl border border-[#E7E5E4] bg-white p-6">
            <h3 className="text-sm font-semibold tracking-wide text-[#1C1917] uppercase">
              At a glance
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-medium text-[#1C1917]">Studying</dt>
                <dd className="text-[#57534E]">
                  BCA, Techno India University, Kolkata
                </dd>
              </div>
              <div>
                <dt className="font-medium text-[#1C1917]">Focus</dt>
                <dd className="text-[#57534E]">
                  Full-stack web development (MERN)
                </dd>
              </div>
              <div>
                <dt className="font-medium text-[#1C1917]">Practice</dt>
                <dd className="text-[#57534E]">DSA in C++, LeetCode</dd>
              </div>
              <div>
                <dt className="font-medium text-[#1C1917]">Looking for</dt>
                <dd className="text-[#57534E]">
                  Internships &amp; software engineering opportunities
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
