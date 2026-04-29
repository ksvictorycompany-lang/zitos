import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CardStack from "@/components/CardStack";

export const metadata = {
  title: "Unsere Geschichte — Zitos Little Italy Mannheim",
  description: "Erfahren Sie mehr über die Geschichte von Zitos Little Italy — ein Ort voller Leidenschaft, Kultur und mediterraner Gastfreundschaft in Mannheim.",
};

const geschichteCards = [
  {
    src: "https://cdn.website.dish.co/media/03/45/8248497/Zitos-Little-Italy-245755328-116720447441171-5300617792091445844-n-jpg.jpg",
    alt: "Zitos Geschichte",
    label: "Die Anfänge",
    sublabel: "Unsere Geschichte",
  },
  {
    src: "https://cdn.website.dish.co/media/18/83/8248487/Zitos-Little-Italy-245767819-116706460775903-9138084670749991111-n-jpg.jpg",
    alt: "Zitos Gründungszeit",
    label: "Leidenschaft",
    sublabel: "Unsere Geschichte",
  },
  {
    src: "https://cdn.website.dish.co/media/1f/7f/8248490/Zitos-Little-Italy-245789304-116717164108166-4241104890260790009-n-jpg.jpg",
    alt: "Zitos Team",
    label: "Unser Team",
    sublabel: "Unsere Geschichte",
  },
  {
    src: "https://cdn.website.dish.co/media/69/24/8248499/Zitos-Little-Italy-245954930-116702357442980-5289073104649537018-n-jpg.jpg",
    alt: "Zitos Atmosphäre früher",
    label: "Damals & Heute",
    sublabel: "Unsere Geschichte",
  },
];

const milestones = [
  {
    year: "2024",
    title: "Eröffnung in Mannheim",
    text: "Zitos Little Italy öffnet seine Türen im Herzen von Mannheim. Mit einer einzigartigen Vision: authentische italienische Küche, vereint mit mediterranem Flair und Mannheimer Herzlichkeit.",
  },
  {
    year: "2024",
    title: "Das Cabaret entsteht",
    text: "Der Cabaretbereich wird eröffnet — ein Ort, der Kulinarik mit Unterhaltung verbindet. Abende mit Live-Musik und besonderer Atmosphäre werden zu einem festen Teil des Zitos-Erlebnisses.",
  },
  {
    year: "2024",
    title: "Erweiterung auf 2 Etagen",
    text: "Der Eventbereich wächst. Mit 2 Etagen für private Veranstaltungen wird Zitos zur ersten Adresse für Hochzeiten, Firmenfeiern und besondere Anlässe in Mannheim.",
  },
  {
    year: "Heute",
    title: "Ein Ort für alle",
    text: "Heute ist Zitos Little Italy mehr als ein Restaurant — es ist ein Treffpunkt für Menschen, die gutes Essen, schöne Atmosphäre und echte Gastfreundschaft schätzen.",
  },
];

export default function GeschichtePage() {
  return (
    <>
      <PageHeader
        src="https://cdn.website.dish.co/media/d5/69/8248512/Zitos-Little-Italy-15164aa7-447e-48b9-90fc-f1f3b5c4fa04-jpeg.jpg"
        alt="Zitos Little Italy Geschichte"
        label="Seit 2024"
        title="Unsere Geschichte"
        subtitle="Eine Geschichte über Leidenschaft, Kultur und die Liebe zur italienischen Küche — mitten in Mannheim."
        overlay="bg-gradient-to-b from-ink/40 via-ink/50 to-ink/80"
        pb="pb-24"
      />

      {/* Intro */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6">
              <div>
                <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
                  Der Anfang
                </p>
                <h2 className="font-display text-5xl text-aegean font-light italic leading-tight">
                  Eine Leidenschaft
                  <span className="block">wird zur Realität</span>
                </h2>
              </div>
              <div className="w-16 h-px bg-gold" />
              <p className="text-muted leading-relaxed text-base">
                Alle im Zitos Little Italy heißen Sie in Mannheim herzlich
                willkommen! Was als Traum begann — ein Ort zu schaffen, an dem
                Gastfreundschaft, Genuss und Gemeinschaft zusammenkommen — ist
                heute Wirklichkeit.
              </p>
              <p className="text-muted leading-relaxed text-base">
                Unser Restaurant bietet eine Reihe von verschiedenen Bereichen:
                einen Raucherbereich, einen Eventbereich auf 2 Etagen, eine
                klimatisierte Terrasse sowie einen Cabaretbereich. Wir laden
                Sie ein, unsere authentische italienische Küche zu genießen.
              </p>
              <p className="text-muted leading-relaxed text-base">
                Unsere erfahrenen Köche bereiten preisgekrönte Gourmetgerichte
                zu — mit frischen Zutaten, Liebe zum Detail und dem Respekt
                vor der Tradition.
              </p>
            </div>
            <div className="relative">
              <div className="relative h-72 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://cdn.website.dish.co/media/cb/c6/8248447/Zitos-Little-Italy-WhatsApp-Image-2024-07-30-at-15-38-51-1-jpeg.jpg"
                  alt="Zitos Geschichte Cabaret"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 bg-gold text-ink p-6 rounded-2xl shadow-lg">
                <p className="font-display text-5xl font-light italic leading-none">N6,3</p>
                <p className="text-xs mt-1 font-medium tracking-wider">Mannheim</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-surface grid-texture">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
              Meilensteine
            </p>
            <h2 className="font-display text-5xl text-aegean font-light italic">
              Unser Weg
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="bg-cream rounded-xl p-8 border border-cream-dark hover:shadow-md transition-shadow duration-200 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
                <span className="font-display text-5xl text-aegean/15 font-light italic absolute top-4 right-4">
                  {m.year}
                </span>
                <p className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-3">
                  {m.year}
                </p>
                <h3 className="font-display text-xl text-aegean font-medium mb-3">
                  {m.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
              Was uns ausmacht
            </p>
            <h2 className="font-display text-5xl text-aegean font-light italic">
              Unsere Werte
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Gastfreundschaft",
                text: "Jeder Gast ist bei uns herzlich willkommen — von der Kinderecke bis zur Haustierfreundlichkeit. Wir sorgen dafür, dass sich alle wohlfühlen.",
                icon: "❤",
              },
              {
                title: "Authentizität",
                text: "Unsere Küche folgt den Traditionen der italienischen Gastronomie. Preisgekrönte Gourmetgerichte aus frischen Zutaten, mit Hingabe zubereitet.",
                icon: "✦",
              },
              {
                title: "Vielfalt",
                text: "Von glutenfreien bis zu veganen Optionen — bei uns findet jeder etwas. Mannheim ist vielfältig, und das spiegeln wir in unserer Küche wider.",
                icon: "◈",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="text-center p-10 bg-surface rounded-2xl border border-cream-dark"
              >
                <div className="text-3xl text-gold mb-5">{v.icon}</div>
                <h3 className="font-display text-2xl text-aegean font-medium italic mb-4">
                  {v.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geschichte CardStack */}
      <section className="py-24 bg-aegean text-cream relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,165,90,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,165,90,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
              Galerie
            </p>
            <h2 className="font-display text-5xl font-light italic">
              Unsere Geschichte in Bildern
            </h2>
            <p className="text-cream/50 text-sm mt-3">
              Ziehen Sie die Karten oder navigieren Sie mit den Pfeilen
            </p>
          </div>
          <div className="flex justify-center overflow-x-hidden py-6">
            <div className="w-full max-w-[853px] px-4">
              <CardStack cards={geschichteCards} autoPlay={true} interval={4500} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Werden Sie Teil der Geschichte
          </p>
          <h2 className="font-display text-5xl text-aegean font-light italic mb-4">
            Besuchen Sie uns
          </h2>
          <p className="text-muted text-base leading-relaxed mb-8 max-w-lg mx-auto">
            Schreiben Sie Ihre eigene Geschichte bei Zitos Little Italy.
            Ob ein romantisches Dinner, eine Familienfeier oder ein besonderer Abend —
            wir freuen uns auf Sie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservierung"
              className="bg-gold text-ink px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-gold/90 transition-all"
            >
              Tisch reservieren
            </Link>
            <Link
              href="/galerie"
              className="border border-aegean/25 text-aegean px-8 py-3.5 rounded-full text-sm font-medium hover:bg-aegean hover:text-cream transition-all duration-200 inline-flex items-center gap-2"
            >
              Galerie ansehen <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
