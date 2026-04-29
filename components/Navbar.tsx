"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/speisekarte", label: "Speisekarte" },
  { href: "/reservierung", label: "Reservierung" },
  { href: "/galerie", label: "Galerie" },
  { href: "/geschichte", label: "Geschichte" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const onImage = !scrolled;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-400">
      {/* Solid cream bar when scrolled */}
      <div
        className={`absolute inset-0 transition-opacity duration-400 backdrop-blur-md bg-cream/95 shadow-sm ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-12">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="https://cdn.website.dish.co/media/c4/aa/8248506/Zitos-Little-Italy-zitoslogo-jpg.jpg"
              alt="Zitos Little Italy"
              width={44}
              height={44}
              className="rounded-full object-cover w-11 h-11 ring-2 ring-gold/50 group-hover:ring-gold transition-all shrink-0"
            />
            <div className="hidden sm:block">
              <span
                className={`font-display text-xl leading-none tracking-wide transition-colors duration-300 ${
                  onImage ? "text-gold font-bold" : "text-aegean font-semibold"
                }`}
              >
                Zitos
              </span>
              <span
                className={`block text-[10px] tracking-[0.18em] uppercase transition-colors duration-300 ${
                  onImage ? "text-gold/70" : "text-muted"
                }`}
              >
                Little Italy · Mannheim
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-4 py-2 text-sm tracking-wide transition-all duration-200 ${
                    active
                      ? onImage ? "font-semibold" : "text-aegean font-medium"
                      : onImage ? "font-medium" : "text-ink/65 hover:text-aegean"
                  }`}
                  style={
                    onImage
                      ? { color: active ? "#C9A55A" : "rgba(201,165,90,0.82)" }
                      : undefined
                  }
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-0 left-4 right-4 h-px bg-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            <a
              href="tel:+4962118033444"
              className={`hidden sm:flex items-center gap-2 text-sm px-4 py-2 rounded-full transition-all duration-200 ${
                onImage
                  ? "border border-gold/60 text-gold font-medium hover:bg-gold/10"
                  : "bg-aegean text-cream hover:bg-aegean-light"
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="tracking-wide">Anrufen</span>
            </a>
            <button
              onClick={() => setOpen(!open)}
              className={`md:hidden p-2 transition-colors ${
                onImage ? "text-gold" : "text-aegean"
              }`}
              aria-label="Menü öffnen"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="relative bg-ink/95 backdrop-blur-md border-t border-white/10 px-5 py-4 space-y-0.5">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center px-3 py-3.5 rounded-lg text-[15px] font-medium transition-colors ${
                  active ? "bg-gold/15" : "hover:bg-white/8"
                }`}
                style={{ color: active ? "#C8A96A" : "rgba(200,169,106,0.82)" }}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="tel:+4962118033444"
            className="flex items-center gap-2.5 px-3 py-3.5 font-medium text-[15px]"
            style={{ color: "#C8A96A" }}
          >
            <Phone className="w-4 h-4" />
            +49 621 18033444
          </a>
        </div>
      </div>
    </header>
  );
}
