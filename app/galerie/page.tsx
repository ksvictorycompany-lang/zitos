import Link from "next/link";
import CardStack from "@/components/CardStack";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Galerie — Zitos Little Italy Mannheim",
  description: "Entdecken Sie das Ambiente von Zitos Little Italy in Mannheim — Restaurant, Cabaret, Terrasse und mehr.",
};

const allCards = [
  {
    src: "https://cdn.website.dish.co/media/7e/8d/8244636/Zitos-Little-Italy-WhatsApp-Image-2024-07-30-at-15-38-43-3-jpeg.jpg",
    alt: "Zitos Restaurant Atmosphäre",
    label: "Restaurant Atmosphäre",
    sublabel: "Unser Restaurant",
  },
  {
    src: "https://cdn.website.dish.co/media/8e/0c/8248442/Zitos-Little-Italy-WhatsApp-Image-2024-07-30-at-15-38-52-1-jpeg.jpg",
    alt: "Zitos Cabaretbereich",
    label: "Cabaretbereich",
    sublabel: "Cabaret",
  },
  {
    src: "https://cdn.website.dish.co/media/1c/7e/8244656/Zitos-Little-Italy-WhatsApp-Image-2024-07-30-at-15-38-52-8-jpeg.jpg",
    alt: "Zitos Innenbereich",
    label: "Innenbereich",
    sublabel: "Unser Restaurant",
  },
  {
    src: "https://cdn.website.dish.co/media/cb/c6/8248447/Zitos-Little-Italy-WhatsApp-Image-2024-07-30-at-15-38-51-1-jpeg.jpg",
    alt: "Zitos Cabaret Bühne",
    label: "Cabaret Bühne",
    sublabel: "Cabaret",
  },
  {
    src: "https://cdn.website.dish.co/media/37/13/8244666/Zitos-Little-Italy-WhatsApp-Image-2024-07-30-at-15-38-52-jpeg.jpg",
    alt: "Zitos Restaurantbereich",
    label: "Restaurantbereich",
    sublabel: "Unser Restaurant",
  },
  {
    src: "https://cdn.website.dish.co/media/ca/59/8248452/Zitos-Little-Italy-WhatsApp-Image-2024-07-30-at-15-38-52-13-jpeg.jpg",
    alt: "Zitos Cabaret Atmosphäre",
    label: "Cabaret Atmosphäre",
    sublabel: "Cabaret",
  },
  {
    src: "https://cdn.website.dish.co/media/da/ef/8244680/Zitos-Little-Italy-WhatsApp-Image-2024-07-30-at-15-38-52-11-jpeg.jpg",
    alt: "Zitos Ambiente",
    label: "Unser Ambiente",
    sublabel: "Terrasse & Außenbereich",
  },
  {
    src: "https://cdn.website.dish.co/media/98/fe/8248520/Zitos-Little-Italy-20393fec-605e-4fc6-9958-d6af9a3419e1-jpeg.jpg",
    alt: "Zitos Eventbereich",
    label: "Eventbereich",
    sublabel: "Private Events",
  },
];

export default function GaleriePage() {
  return (
    <>
      <PageHeader
        src="https://cdn.website.dish.co/media/cb/c6/8248447/Zitos-Little-Italy-WhatsApp-Image-2024-07-30-at-15-38-51-1-jpeg.jpg"
        alt="Zitos Little Italy Ambiente"
        label="Einblicke"
        title="Galerie"
        subtitle="Erleben Sie das einzigartige Ambiente von Zitos Little Italy — von der eleganten Restaurantatmosphäre bis zum lebhaften Cabaret."
      />

      {/* Card Stack */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
              Alle Bereiche
            </p>
            <h2 className="font-display text-5xl text-aegean font-light italic">
              Durch unsere Räume blättern
            </h2>
            <p className="text-muted text-sm mt-3">
              Ziehen Sie die Karten oder navigieren Sie mit den Pfeilen
            </p>
          </div>

          {/* Card stack centered */}
          <div className="flex justify-center overflow-x-hidden py-8">
            <div className="w-full max-w-[640px] px-4">
              <CardStack cards={allCards} autoPlay={true} interval={4000} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-20 bg-surface grid-texture">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Überzeugt?
          </p>
          <h2 className="font-display text-5xl text-aegean font-light italic mb-4">
            Erleben Sie es live
          </h2>
          <p className="text-muted text-base leading-relaxed mb-8 max-w-lg mx-auto">
            Kein Foto kann die Atmosphäre von Zitos Little Italy wirklich
            einfangen. Besuchen Sie uns und erleben Sie es selbst.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservierung"
              className="bg-gold text-ink px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-gold/90 transition-all"
            >
              Tisch reservieren
            </Link>
            <Link
              href="/geschichte"
              className="border border-aegean/25 text-aegean px-8 py-3.5 rounded-full text-sm font-medium hover:bg-aegean hover:text-cream transition-all duration-200"
            >
              Unsere Geschichte
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
