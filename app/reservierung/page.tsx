import Link from "next/link";
import { Phone, MapPin, Clock, Calendar } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Reservierung — Zitos Little Italy Mannheim",
  description: "Reservieren Sie Ihren Tisch bei Zitos Little Italy in Mannheim. Online oder telefonisch.",
};

const hours = [
  { day: "Mo – Mi", time: "Geschlossen", closed: true },
  { day: "Do – Fr", time: "11:30 – 00:00", closed: false },
  { day: "Samstag", time: "11:30 – 01:00", closed: false },
  { day: "Sonntag", time: "11:30 – 23:00", closed: false },
];

export default function ReservierungPage() {
  return (
    <>
      <PageHeader
        src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Wasserturm_Mannheim.jpg"
        alt="Mannheimer Wasserturm"
        label="Ihr Tisch wartet"
        title="Reservierung"
        subtitle="Wir freuen uns, Sie bald bei uns begrüßen zu dürfen. Reservieren Sie Ihren Tisch bequem online oder rufen Sie uns an."
        overlay="bg-gradient-to-b from-ink/60 via-ink/45 to-ink/75"
      />

      {/* Main content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form — wider */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-4xl text-aegean font-light italic mb-8">
                Online reservieren
              </h2>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-wide uppercase text-muted mb-2">
                      Name *
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
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-wide uppercase text-muted mb-2">
                      Datum *
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full border border-cream-dark rounded-lg px-4 py-3 text-sm bg-cream focus:outline-none focus:border-aegean transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wide uppercase text-muted mb-2">
                      Uhrzeit *
                    </label>
                    <select
                      required
                      className="w-full border border-cream-dark rounded-lg px-4 py-3 text-sm bg-cream focus:outline-none focus:border-aegean transition-colors appearance-none"
                    >
                      <option value="">Bitte wählen</option>
                      {["11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"].map((t) => (
                        <option key={t}>{t} Uhr</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-wide uppercase text-muted mb-2">
                    Anzahl Personen *
                  </label>
                  <select
                    required
                    className="w-full border border-cream-dark rounded-lg px-4 py-3 text-sm bg-cream focus:outline-none focus:border-aegean transition-colors appearance-none"
                  >
                    <option value="">Bitte wählen</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((n) => (
                      <option key={n}>{n} {n === 1 ? "Person" : "Personen"}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-wide uppercase text-muted mb-2">
                    Bereich
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {["Restaurant", "Terrasse", "Cabaret", "Event"].map((area) => (
                      <label key={area} className="flex flex-col items-center gap-2 p-3 border border-cream-dark rounded-lg cursor-pointer hover:border-aegean/40 transition-colors text-center has-[:checked]:border-aegean has-[:checked]:bg-aegean/5">
                        <input type="radio" name="area" value={area} className="sr-only" />
                        <span className="text-xs text-ink">{area}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-wide uppercase text-muted mb-2">
                    Besondere Wünsche
                  </label>
                  <textarea
                    rows={3}
                    className="w-full border border-cream-dark rounded-lg px-4 py-3 text-sm bg-cream focus:outline-none focus:border-aegean transition-colors resize-none"
                    placeholder="Allergien, Geburtstag, besondere Anlässe …"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold text-ink py-4 rounded-full text-sm font-medium tracking-wide hover:bg-gold/90 transition-colors duration-200"
                >
                  Reservierung anfragen
                </button>
                <p className="text-xs text-muted text-center">
                  Diese Anfrage ist noch keine verbindliche Reservierung. Wir melden uns zur Bestätigung.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Phone CTA */}
              <div className="bg-aegean text-cream p-8 rounded-2xl">
                <p className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-2">
                  Lieber telefonisch?
                </p>
                <p className="font-display text-3xl italic font-light mb-4">
                  Rufen Sie uns an
                </p>
                <a
                  href="tel:+4962118033444"
                  className="flex items-center gap-3 text-xl font-medium hover:text-gold transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +49 621 18033444
                </a>
              </div>

              {/* Hours */}
              <div className="bg-surface border border-cream-dark p-8 rounded-2xl">
                <div className="flex items-center gap-2 mb-5">
                  <Clock className="w-4 h-4 text-gold" />
                  <h3 className="text-xs tracking-[0.2em] uppercase font-medium text-muted">
                    Öffnungszeiten
                  </h3>
                </div>
                <div className="space-y-3">
                  {hours.map(({ day, time, closed }) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="text-muted">{day}</span>
                      <span className={closed ? "text-ink/30" : "text-ink font-medium"}>
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="bg-surface border border-cream-dark p-8 rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-gold" />
                  <h3 className="text-xs tracking-[0.2em] uppercase font-medium text-muted">
                    Anfahrt
                  </h3>
                </div>
                <p className="text-sm text-ink mb-4">
                  N6,3 · 68161 Mannheim
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=N6,3,%2068161%20Mannheim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-aegean border border-aegean/20 px-4 py-2 rounded-full hover:bg-aegean hover:text-cream transition-all duration-200"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Auf Google Maps öffnen
                </a>
                <div className="mt-4 pt-4 border-t border-cream-dark">
                  <p className="text-xs text-muted">
                    <span className="font-medium text-ink">Parkplätze</span> stehen in der Umgebung zur Verfügung.
                    Kostenloses WLAN im Restaurant.
                  </p>
                </div>
              </div>

              {/* Event hint */}
              <div className="bg-terracotta/8 border border-terracotta/20 p-6 rounded-2xl">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-ink mb-1">
                      Private Veranstaltungen & Hochzeiten
                    </p>
                    <p className="text-xs text-muted leading-relaxed">
                      Feiern Sie Ihren besonderen Anlass bei uns. Unser Eventbereich
                      auf 2 Etagen steht für private Feiern zur Verfügung.
                    </p>
                    <a
                      href="tel:+4962118033444"
                      className="inline-block mt-3 text-xs text-terracotta font-medium hover:underline"
                    >
                      Jetzt anfragen →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
