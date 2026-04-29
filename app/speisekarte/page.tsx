import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Speisekarte — Zitos Little Italy Mannheim",
  description: "Entdecken Sie unsere authentische italienische Speisekarte mit Gourmetgerichten und erfrischenden Getränken.",
};

export default function SpeisakartePage() {
  return (
    <>
      <PageHeader
        src="https://cdn.website.dish.co/media/0c/83/8966246/Zitos-Little-Italy-WhatsApp-Image-2025-04-02-at-14-47-19-jpeg.jpg"
        alt="Zitos Speisekarte — Italienische Küche"
        label="Unsere Küche"
        title="Speisekarte"
        subtitle="Authentische italienische Gourmetküche — frisch zubereitet mit ausgewählten Zutaten und mediterraner Leidenschaft."
      />

      {/* Menu Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Speisekarte */}
            <div className="group">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://cdn.website.dish.co/media/86/b6/8222905/Speisekarte.jpg"
                  alt="Zitos Speisekarte"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block bg-gold text-ink text-xs px-3 py-1 rounded-full font-medium tracking-wide mb-3">
                    Speisen
                  </span>
                  <h2 className="font-display text-4xl italic text-cream font-light">
                    Speisekarte
                  </h2>
                  <p className="text-cream/70 text-sm mt-2">
                    Antipasti · Pasta · Pizza · Hauptgerichte · Desserts
                  </p>
                </div>
              </div>
              <div className="mt-4 p-6 bg-surface rounded-xl border border-cream-dark">
                <p className="text-muted text-sm leading-relaxed">
                  Von hausgemachter Pasta bis hin zu preisgekrönten
                  Fleischgerichten — unsere Küche verbindet traditionelle
                  Rezepte mit modernen Akzenten. Glutenfreie und vegane
                  Optionen auf Anfrage.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Antipasti", "Pasta", "Pizza", "Hauptgerichte", "Desserts", "Glutenfrei", "Vegan"].map((cat) => (
                    <span key={cat} className="text-xs border border-aegean/15 text-aegean px-3 py-1 rounded-full">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Getränkekarte */}
            <div className="group">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://cdn.website.dish.co/media/21/df/8966280/Getranke.jpg"
                  alt="Zitos Getränkekarte"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block bg-terracotta text-cream text-xs px-3 py-1 rounded-full font-medium tracking-wide mb-3">
                    Getränke
                  </span>
                  <h2 className="font-display text-4xl italic text-cream font-light">
                    Getränkekarte
                  </h2>
                  <p className="text-cream/70 text-sm mt-2">
                    Weine · Cocktails · Softdrinks · Heiße Getränke
                  </p>
                </div>
              </div>
              <div className="mt-4 p-6 bg-surface rounded-xl border border-cream-dark">
                <p className="text-muted text-sm leading-relaxed">
                  Erfrischende Getränke und erlesene Weine ergänzen perfekt
                  Ihre Mahlzeit. Wählen Sie aus unserer sorgfältig
                  zusammengestellten Getränkekarte.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Rotweine", "Weißweine", "Cocktails", "Aperitifs", "Softdrinks", "Kaffee"].map((cat) => (
                    <span key={cat} className="text-xs border border-terracotta/20 text-terracotta px-3 py-1 rounded-full">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Info banner */}
          <div className="mt-12 p-8 bg-aegean/5 border border-aegean/10 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="font-display text-2xl italic text-aegean font-light">
                Fragen zur Speisekarte?
              </p>
              <p className="text-muted text-sm mt-1">
                Wir beraten Sie gerne telefonisch oder bei Ihrem Besuch.
                Allergene und Unverträglichkeiten berücksichtigen wir selbstverständlich.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <a
                href="tel:+4962118033444"
                className="flex items-center gap-2 bg-aegean text-cream px-6 py-3 rounded-full text-sm hover:bg-aegean-light transition-colors"
              >
                <Phone className="w-4 h-4" />
                Anrufen
              </a>
              <Link
                href="/reservierung"
                className="border border-aegean/30 text-aegean px-6 py-3 rounded-full text-sm hover:bg-aegean hover:text-cream transition-all duration-200"
              >
                Reservieren
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bestellbereich */}
      <section className="py-20 bg-surface grid-texture">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
              Bequem bestellen
            </p>
            <h2 className="font-display text-5xl text-aegean font-light italic">
              Speisen bestellen
            </h2>
            <p className="text-muted mt-3 text-sm">
              Selbstabholung oder direkt im Restaurant — wir freuen uns auf Ihre Bestellung.
            </p>
          </div>

          <form className="bg-surface rounded-2xl border border-cream-dark p-8 space-y-5 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs tracking-wide uppercase text-muted mb-2">
                  Ihr Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-cream-dark rounded-lg px-4 py-3 text-sm bg-cream focus:outline-none focus:border-aegean transition-colors"
                  placeholder="Max Mustermann"
                />
              </div>
              <div>
                <label className="block text-xs tracking-wide uppercase text-muted mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full border border-cream-dark rounded-lg px-4 py-3 text-sm bg-cream focus:outline-none focus:border-aegean transition-colors"
                  placeholder="+49 621 …"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs tracking-wide uppercase text-muted mb-2">
                E-Mail
              </label>
              <input
                type="email"
                className="w-full border border-cream-dark rounded-lg px-4 py-3 text-sm bg-cream focus:outline-none focus:border-aegean transition-colors"
                placeholder="ihre@email.de"
              />
            </div>
            <div>
              <label className="block text-xs tracking-wide uppercase text-muted mb-2">
                Ihre Bestellung *
              </label>
              <textarea
                required
                rows={4}
                className="w-full border border-cream-dark rounded-lg px-4 py-3 text-sm bg-cream focus:outline-none focus:border-aegean transition-colors resize-none"
                placeholder="Bitte wählen Sie Gerichte aus unserer Speisekarte und geben Sie Ihre Bestellung ein …"
              />
            </div>
            <div>
              <label className="block text-xs tracking-wide uppercase text-muted mb-3">
                Lieferart *
              </label>
              <div className="flex gap-4">
                {["Selbstabholung", "Im Restaurant essen"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="delivery" className="accent-aegean" />
                    <span className="text-sm text-ink">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs tracking-wide uppercase text-muted mb-3">
                Zahlung *
              </label>
              <div className="flex flex-wrap gap-4">
                {["Barzahlung", "Kreditkarte", "EC-Karte"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="payment" className="accent-aegean" />
                    <span className="text-sm text-ink">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
            <p className="text-xs text-muted">
              Für Rückfragen rufen Sie uns an:{" "}
              <a href="tel:+4962118033444" className="text-aegean hover:underline">
                +49 621 18033444
              </a>
            </p>
            <button
              type="submit"
              className="w-full bg-aegean text-cream py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-aegean-light transition-colors duration-200"
            >
              Jetzt bestellen
            </button>
            <p className="text-xs text-muted text-center">
              Dieses Formular stellt keine Bestellbestätigung dar. Das Restaurant
              wird Sie zur Bestätigung kontaktieren.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
