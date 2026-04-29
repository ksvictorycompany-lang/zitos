import Link from "next/link";
import { MapPin, Phone, Mail, Globe, Share2 } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/speisekarte", label: "Speisekarte" },
  { href: "/reservierung", label: "Reservierung" },
  { href: "/galerie", label: "Galerie" },
  { href: "/geschichte", label: "Geschichte" },
];

export default function Footer() {
  return (
    <footer className="bg-aegean text-cream/80">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <div>
            <h3 className="font-display text-3xl text-cream italic font-light">
              Zitos
            </h3>
            <p className="text-xs tracking-[0.2em] uppercase text-gold mt-1">
              Little Italy · Mannheim
            </p>
          </div>
          <p className="text-sm leading-relaxed text-cream/60 max-w-xs">
            Authentische italienische Küche mit Leidenschaft und Hingabe
            zubereitet — im Herzen von Mannheim.
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase text-gold mb-6 font-medium">
            Navigation
          </h4>
          <nav className="space-y-3">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block text-sm hover:text-cream transition-colors duration-150"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact + Hours */}
        <div className="space-y-6">
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold mb-4 font-medium">
              Kontakt
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=N6,3,%2068161%20Mannheim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream transition-colors"
                >
                  N6,3 · 68161 Mannheim
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a
                  href="tel:+4962118033444"
                  className="hover:text-cream transition-colors"
                >
                  +49 621 18033444
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a
                  href="mailto:info@zitos-little-italy.de"
                  className="hover:text-cream transition-colors"
                >
                  info@zitos-little-italy.de
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold mb-4 font-medium">
              Öffnungszeiten
            </h4>
            <ul className="space-y-1.5 text-sm">
              <li className="flex justify-between gap-6">
                <span className="text-cream/50">Mo – Mi</span>
                <span>Geschlossen</span>
              </li>
              <li className="flex justify-between gap-6">
                <span className="text-cream/50">Do – Fr</span>
                <span>11:30 – 00:00</span>
              </li>
              <li className="flex justify-between gap-6">
                <span className="text-cream/50">Samstag</span>
                <span>11:30 – 01:00</span>
              </li>
              <li className="flex justify-between gap-6">
                <span className="text-cream/50">Sonntag</span>
                <span>11:30 – 23:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} Zitos Little Italy Mannheim. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            <Link href="/impressum" className="hover:text-cream/70 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-cream/70 transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
