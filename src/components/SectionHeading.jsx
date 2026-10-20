export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="reveal mb-10 max-w-2xl sm:mb-12">
      {eyebrow && (
        <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">
          <span aria-hidden="true" className="h-px w-5 bg-accent/50" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-[26px] leading-tight font-semibold tracking-tight text-ink sm:text-[32px]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
