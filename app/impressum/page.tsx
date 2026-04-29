export const metadata = {
  title: "Impressum — Zitos Little Italy Mannheim",
};

export default function ImpressumPage() {
  return (
    <section className="pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
          Rechtliches
        </p>
        <h1 className="font-display text-5xl text-aegean font-light italic mb-10">
          Impressum
        </h1>
        <div className="space-y-8 text-sm text-muted leading-relaxed">
          <div>
            <h2 className="text-xs tracking-[0.2em] uppercase font-medium text-ink mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <p>City-Guard Sicherheit und Service GmbH</p>
            <p>Schumannstraße 27</p>
            <p>60325 Frankfurt</p>
          </div>
          <div>
            <h2 className="text-xs tracking-[0.2em] uppercase font-medium text-ink mb-3">
              Restaurantadresse
            </h2>
            <p>Zitos Little Italy</p>
            <p>N6,3</p>
            <p>68161 Mannheim</p>
          </div>
          <div>
            <h2 className="text-xs tracking-[0.2em] uppercase font-medium text-ink mb-3">
              Kontakt
            </h2>
            <p>
              Telefon:{" "}
              <a href="tel:+4962118033444" className="text-aegean hover:underline">
                +49 621 18033444
              </a>
            </p>
            <p>
              E-Mail:{" "}
              <a href="mailto:info@zitos-little-italy.de" className="text-aegean hover:underline">
                info@zitos-little-italy.de
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-xs tracking-[0.2em] uppercase font-medium text-ink mb-3">
              Umsatzsteuer-ID
            </h2>
            <p>DE454352177</p>
          </div>
        </div>
      </div>
    </section>
  );
}
