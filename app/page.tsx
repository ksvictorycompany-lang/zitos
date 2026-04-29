import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  ChevronRight,
  Wifi,
  Car,
  Users,
  Baby,
  PawPrint,
  Leaf,
  Wind,
  Music,
  Utensils,
  Heart,
} from "lucide-react";

const services = [
  { icon: Wind, label: "Klimatisiert" },
  { icon: Car, label: "Parkplätze" },
  { icon: Wifi, label: "Gratis WLAN" },
  { icon: Baby, label: "Kinderecke" },
  { icon: PawPrint, label: "Haustiere willk." },
  { icon: Leaf, label: "Vegane Optionen" },
  { icon: Users, label: "Private Events" },
  { icon: Music, label: "Cabaret" },
  { icon: Utensils, label: "Catering" },
  { icon: Heart, label: "Hochzeiten" },
];

const hours = [
  { day: "Mo – Mi", time: "Geschlossen", closed: true },
  { day: "Do – Fr", time: "11:30 – 00:00", closed: false },
  { day: "Samstag", time: "11:30 – 01:00", closed: false },
  { day: "Sonntag", time: "11:30 – 23:00", closed: false },
];

const areas = [
  {
    title: "Restaurant",
    sub: "Gehobene Atmosphäre",
    img: "https://cdn.website.dish.co/media/1c/7e/8244656/Zitos-Little-Italy-WhatsApp-Image-2024-07-30-at-15-38-52-8-jpeg.jpg",
  },
  {
    title: "Cabaret",
    sub: "Unterhaltung & Genuss",
    img: "https://cdn.website.dish.co/media/8e/0c/8248442/Zitos-Little-Italy-WhatsApp-Image-2024-07-30-at-15-38-52-1-jpeg.jpg",
  },
  {
    title: "Terrasse",
    sub: "Klimatisiert & gemütlich",
    img: "https://cdn.website.dish.co/media/da/ef/8244680/Zitos-Little-Italy-WhatsApp-Image-2024-07-30-at-15-38-52-11-jpeg.jpg",
  },
  {
    title: "Events",
    sub: "2 Etagen für besondere Anlässe",
    img: "https://cdn.website.dish.co/media/98/fe/8248520/Zitos-Little-Italy-20393fec-605e-4fc6-9958-d6af9a3419e1-jpeg.jpg",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn.website.dish.co/media/37/13/8244666/Zitos-Little-Italy-WhatsApp-Image-2024-07-30-at-15-38-52-jpeg.jpg"
            alt="Zitos Little Italy Restaurant"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/65 via-ink/45 to-ink/75" />
        </div>
        {/* Mannheim grid overlay */}
        <div
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,243,238,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(249,243,238,0.25) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 text-center px-5 sm:px-6 max-w-4xl mx-auto">
          <p className="animate-fade-up text-gold text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase mb-4 sm:mb-6 font-medium">
            Mannheim · N6,3 · Seit 2024
          </p>
          <h1 className="animate-fade-up delay-100 font-display text-6xl sm:text-8xl lg:text-[9rem] text-cream font-light italic leading-none mb-3 sm:mb-4">
            Zitos
          </h1>
          <p className="animate-fade-up delay-200 font-display text-xl sm:text-3xl text-cream/80 font-light tracking-[0.08em] sm:tracking-[0.1em] mb-6 sm:mb-8">
            Little Italy
          </p>
          <p className="animate-fade-up delay-300 text-cream/65 text-sm sm:text-lg max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10">
            Tauchen Sie ein in die köstliche Welt der italienischen Küche —
            mit Leidenschaft und Hingabe zubereitet.
          </p>
          <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Link
              href="/reservierung"
              className="bg-gold text-ink px-7 sm:px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-gold/90 transition-all duration-200 hover:shadow-lg"
            >
              Tisch reservieren
            </Link>
            <Link
              href="/speisekarte"
              className="bg-gold text-ink px-7 sm:px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-gold/90 transition-all duration-200 hover:shadow-lg"
            >
              Speisekarte ansehen
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40">
          <div className="w-px h-10 bg-gradient-to-b from-cream/40 to-transparent" />
        </div>
      </section>

      {/* ── ÜBER UNS ── */}
      <section className="py-16 sm:py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative h-72 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://cdn.website.dish.co/media/7e/8d/8244636/Zitos-Little-Italy-WhatsApp-Image-2024-07-30-at-15-38-43-3-jpeg.jpg"
                  alt="Zitos Restaurant Innenraum"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 right-4 sm:-bottom-8 sm:-right-4 lg:-right-8 bg-aegean text-cream p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl w-40 sm:w-48">
                <p className="font-display text-3xl sm:text-4xl font-light italic text-gold leading-none">
                  4+
                </p>
                <p className="text-[10px] sm:text-xs text-cream/70 mt-1.5 sm:mt-2 leading-snug tracking-wide">
                  Einzigartige Bereiche unter einem Dach
                </p>
              </div>
            </div>
            <div className="space-y-5 sm:space-y-6 lg:pl-8 pt-8 sm:pt-10 lg:pt-0">
              <div>
                <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
                  Willkommen
                </p>
                <h2 className="font-display text-5xl lg:text-6xl text-aegean font-light italic leading-tight">
                  Herzlich willkommen
                  <span className="block not-italic text-2xl text-muted font-light mt-2">
                    in Mannheim
                  </span>
                </h2>
              </div>
              <div className="w-16 h-px bg-gold" />
              <p className="text-muted leading-relaxed">
                Alle im Zitos Little Italy heißen Sie in Mannheim herzlich
                willkommen! Unser Restaurant bietet vielfältige Bereiche —
                Raucherbereich, Eventbereich auf 2 Etagen, klimatisierte
                Terrasse sowie einen Cabaretbereich.
              </p>
              <p className="text-muted leading-relaxed">
                Unsere erfahrenen Köche bereiten preisgekrönte Gourmetgerichte
                zu. Mit glutenfreien und veganen Optionen sorgen wir dafür,
                dass jeder Gast auf seine Kosten kommt.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Glutenfrei", "Vegan", "Gourmet", "Familienfreundlich", "Barrierefrei"].map((tag) => (
                  <span
                    key={tag}
                    className="border border-aegean/20 text-aegean text-xs px-4 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/geschichte"
                className="inline-flex items-center gap-2 text-terracotta text-sm font-medium hover:gap-3 transition-all duration-200"
              >
                Unsere Geschichte <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEREICHE ── */}
      <section className="py-20 bg-surface grid-texture">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
              Unsere Bereiche
            </p>
            <h2 className="font-display text-5xl text-aegean font-light italic">
              Vielfalt unter einem Dach
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {areas.map((item) => (
              <div
                key={item.title}
                className="group relative h-48 sm:h-64 rounded-xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-cream font-display text-xl italic font-light">
                    {item.title}
                  </p>
                  <p className="text-cream/60 text-xs mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/galerie"
              className="inline-flex items-center gap-2 border border-aegean/25 text-aegean text-sm px-8 py-3 rounded-full hover:bg-aegean hover:text-cream transition-all duration-200"
            >
              Alle Fotos ansehen <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
              Für Ihr Wohlbefinden
            </p>
            <h2 className="font-display text-5xl text-aegean font-light italic">
              Unsere Services
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 p-6 bg-surface rounded-xl border border-cream-dark hover:border-gold/40 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-aegean/8 flex items-center justify-center group-hover:bg-aegean/15 transition-colors">
                  <Icon className="w-5 h-5 text-aegean" />
                </div>
                <span className="text-xs text-center text-muted leading-tight tracking-wide">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÖFFNUNGSZEITEN & KONTAKT ── */}
      <section className="py-24 bg-aegean text-cream overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,165,90,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,165,90,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-start">
          {/* Hours */}
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
              Wann wir für Sie da sind
            </p>
            <h2 className="font-display text-5xl lg:text-6xl font-light italic mb-8 leading-tight">
              Öffnungszeiten
            </h2>
            <div className="space-y-4">
              {hours.map(({ day, time, closed }) => (
                <div
                  key={day}
                  className="flex justify-between items-center py-3.5 border-b border-cream/10"
                >
                  <span className="text-cream/60 text-sm">{day}</span>
                  <span className={`text-sm font-medium ${closed ? "text-cream/25" : "text-cream"}`}>
                    {time}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Contact */}
          <div className="space-y-8">
            <div>
              <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
                Besuchen Sie uns
              </p>
              <h2 className="font-display text-5xl lg:text-6xl font-light italic mb-8 leading-tight">
                Kontakt
              </h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-cream/50 mb-1 tracking-wide uppercase">Adresse</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=N6,3,%2068161%20Mannheim"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream hover:text-gold transition-colors"
                    >
                      N6,3 · 68161 Mannheim
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-cream/50 mb-1 tracking-wide uppercase">Telefon</p>
                    <a href="tel:+4962118033444" className="text-cream hover:text-gold transition-colors">
                      +49 621 18033444
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/reservierung"
                className="bg-gold text-ink px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-gold/90 transition-all duration-200 text-center"
              >
                Tisch reservieren
              </Link>
              <Link
                href="/speisekarte"
                className="border border-cream/30 text-cream px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-cream/10 transition-all duration-200 text-center"
              >
                Speisekarte
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAYMENT STRIP ── */}
      <section className="py-10 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center gap-6">
            <p className="text-xs tracking-[0.25em] uppercase text-muted font-medium shrink-0">
              Zahlungsmöglichkeiten
            </p>
            <div className="flex flex-wrap gap-2">
              {["Barzahlung", "VISA", "MasterCard", "Apple Pay", "PayPal", "Kontaktlos", "EC-Karte", "Debitkarte", "Diners Club", "Maestro"].map(
                (method) => (
                  <span
                    key={method}
                    className="text-xs bg-surface border border-cream-dark px-3 py-1.5 rounded-md text-muted"
                  >
                    {method}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
