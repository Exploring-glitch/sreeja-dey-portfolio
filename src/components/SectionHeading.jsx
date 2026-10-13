export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="reveal mb-10 max-w-2xl">
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold tracking-[0.18em] text-[#3B6EA5] uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-balance text-[#1C1917] sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl leading-relaxed text-pretty text-[#57534E]">{description}</p>
      )}
    </div>
  );
}
