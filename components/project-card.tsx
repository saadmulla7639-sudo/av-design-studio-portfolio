export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="text-sm uppercase tracking-[0.2em] text-luxury-300">{eyebrow}</div>
      <h2 className="mt-4 text-3xl font-medium text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-lg text-stone-300">{description}</p> : null}
    </div>
  );
}
