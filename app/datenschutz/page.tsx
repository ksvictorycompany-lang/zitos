export const metadata = {
  title: "Datenschutz — Zitos Little Italy Mannheim",
};

export default function DatenschutzPage() {
  return (
    <section className="pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
          Rechtliches
        </p>
        <h1 className="font-display text-5xl text-aegean font-light italic mb-10">
          Datenschutzerklärung
        </h1>
        <div className="space-y-8 text-sm text-muted leading-relaxed">
          <div>
            <h2 className="text-xs tracking-[0.2em] uppercase font-medium text-ink mb-3">
              Verantwortlicher
            </h2>
            <p>City-Guard Sicherheit und Service GmbH</p>
            <p>Schumannstraße 27, 60325 Frankfurt</p>
            <p>
              E-Mail:{" "}
              <a href="mailto:info@zitos-little-italy.de" className="text-aegean hover:underline">
                info@zitos-little-italy.de
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-xs tracking-[0.2em] uppercase font-medium text-ink mb-3">
              Erhebung und Verwendung von Daten
            </h2>
            <p>
              Wir erheben personenbezogene Daten nur, wenn Sie uns diese im
              Rahmen von Reservierungen oder Bestellungen freiwillig mitteilen.
              Diese Daten verwenden wir ausschließlich zur Bearbeitung Ihrer
              Anfrage.
            </p>
          </div>
          <div>
            <h2 className="text-xs tracking-[0.2em] uppercase font-medium text-ink mb-3">
              Cookies
            </h2>
            <p>
              Diese Website verwendet technisch notwendige Cookies, um den
              Betrieb der Website zu gewährleisten. Es werden keine
              Marketing-Cookies ohne Ihre Zustimmung gesetzt.
            </p>
          </div>
          <div>
            <h2 className="text-xs tracking-[0.2em] uppercase font-medium text-ink mb-3">
              Ihre Rechte
            </h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
              Wenden Sie sich hierfür an:{" "}
              <a href="mailto:info@zitos-little-italy.de" className="text-aegean hover:underline">
                info@zitos-little-italy.de
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
