import Image from "next/image";

interface PageHeaderProps {
  src: string;
  alt: string;
  label: string;
  title: string;
  subtitle?: string;
  /** Tailwind overlay gradient — defaults to dark bottom-to-top */
  overlay?: string;
  /** Extra bottom padding to push text down, defaults to pb-20 */
  pb?: string;
}

export default function PageHeader({
  src,
  alt,
  label,
  title,
  subtitle,
  overlay = "bg-gradient-to-b from-ink/55 via-ink/40 to-ink/72",
  pb = "pb-20",
}: PageHeaderProps) {
  return (
    <section className={`relative pt-0 min-h-[52vh] flex items-end overflow-hidden`}>
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className={`absolute inset-0 ${overlay}`} />
      </div>

      {/* Content */}
      <div className={`relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 pt-32 sm:pt-36 ${pb} w-full`}>
        <p className="text-gold text-[10px] sm:text-xs tracking-[0.3em] uppercase font-medium mb-2 sm:mb-3">
          {label}
        </p>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light italic text-cream leading-none">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 sm:mt-4 text-cream/65 max-w-xl text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
