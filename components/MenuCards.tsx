import Image from "next/image";

// ── Design tokens ──────────────────────────────────────────────────
const WINE   = "#6E1E2A";
const GOLD   = "#C8A96A";
const GOLDLT = "rgba(200,169,106,0.3)";
const INK    = "#1F1F1F";
const MUTED  = "#7A736D";

// ── Shared UI ──────────────────────────────────────────────────────
function Ornament() {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="h-px flex-1" style={{ background: GOLD }} />
      <span style={{ color: GOLD, fontSize: "9px" }}>◆</span>
      <div className="h-px flex-1" style={{ background: GOLD }} />
    </div>
  );
}

function SecDivider({ title }: { title: string }) {
  return (
    <div className="mt-6 mb-3">
      <p className="text-[10.5px] font-bold tracking-[0.28em] uppercase mb-2" style={{ color: WINE }}>
        {title}
      </p>
      <div className="h-px" style={{ background: GOLDLT }} />
    </div>
  );
}

function Row({ name, desc, price }: { name: string; desc?: string; price: string }) {
  return (
    <div className="flex items-start justify-between gap-3 py-1.5 border-b" style={{ borderColor: "rgba(200,169,106,0.12)" }}>
      <div className="min-w-0">
        <p className="text-[12.5px] leading-snug" style={{ color: INK }}>{name}</p>
        {desc && <p className="text-[10.5px] italic mt-0.5 leading-snug" style={{ color: MUTED }}>{desc}</p>}
      </div>
      <p className="text-[12.5px] shrink-0 tabular-nums font-medium" style={{ color: INK }}>{price}</p>
    </div>
  );
}

function PriceRow({ label, price }: { label: string; price: string }) {
  return (
    <div className="flex justify-between gap-2 py-0.5">
      <p className="text-[10.5px]" style={{ color: MUTED }}>{label}</p>
      <p className="text-[11px] tabular-nums font-medium" style={{ color: INK }}>{price}</p>
    </div>
  );
}

function WineRow({ name, glass, bottle }: { name: string; glass: string; bottle: string }) {
  return (
    <div className="flex items-center justify-between gap-2 py-1.5 border-b" style={{ borderColor: "rgba(200,169,106,0.12)" }}>
      <p className="text-[12.5px] min-w-0" style={{ color: INK }}>{name}</p>
      <div className="flex gap-4 shrink-0 tabular-nums">
        <p className="text-[12.5px] font-medium" style={{ color: INK }}>{glass}</p>
        <p className="text-[12.5px] font-medium w-14 text-right" style={{ color: INK }}>{bottle}</p>
      </div>
    </div>
  );
}

function PizzaRow({ name, desc, sm, lg }: { name: string; desc?: string; sm: string; lg?: string }) {
  return (
    <div className="flex items-start justify-between gap-2 py-1.5 border-b" style={{ borderColor: "rgba(200,169,106,0.12)" }}>
      <div className="min-w-0">
        <p className="text-[12.5px] leading-snug" style={{ color: INK }}>{name}</p>
        {desc && <p className="text-[10.5px] italic mt-0.5 leading-snug" style={{ color: MUTED }}>{desc}</p>}
      </div>
      <div className="flex gap-4 shrink-0 text-right tabular-nums">
        <p className="text-[12.5px] font-medium" style={{ color: INK }}>{sm}</p>
        {lg && <p className="text-[12.5px] font-medium w-12 text-right" style={{ color: INK }}>{lg}</p>}
      </div>
    </div>
  );
}

function SpiritRow({ name, cl, price }: { name: string; cl: string; price: string }) {
  return (
    <div className="flex items-center justify-between gap-2 py-1.5 border-b" style={{ borderColor: "rgba(200,169,106,0.12)" }}>
      <p className="text-[12.5px]" style={{ color: INK }}>{name}</p>
      <div className="flex gap-4 shrink-0 text-right tabular-nums">
        <p className="text-[11px]" style={{ color: MUTED }}>{cl}</p>
        <p className="text-[12.5px] font-medium" style={{ color: INK }}>{price}</p>
      </div>
    </div>
  );
}

function SizeRow({ name, desc, size, price }: { name: string; desc?: string; size: string; price: string }) {
  return (
    <div className="flex items-start justify-between gap-2 py-1.5 border-b" style={{ borderColor: "rgba(200,169,106,0.12)" }}>
      <div className="min-w-0">
        <p className="text-[12.5px]" style={{ color: INK }}>{name}</p>
        {desc && <p className="text-[10.5px] italic mt-0.5" style={{ color: MUTED }}>{desc}</p>}
      </div>
      <div className="text-right shrink-0">
        <p className="text-[10px] tabular-nums" style={{ color: MUTED }}>{size}</p>
        <p className="text-[12.5px] font-medium tabular-nums" style={{ color: INK }}>{price}</p>
      </div>
    </div>
  );
}

// ── Card wrapper ───────────────────────────────────────────────────
function CardHeader({ title }: { title: string }) {
  return (
    <>
      <div className="text-center pt-8 px-7">
        <h2
          className="font-display italic font-bold leading-none tracking-[0.15em] uppercase"
          style={{ fontSize: "clamp(2.2rem,4.5vw,3rem)", color: WINE }}
        >
          Zito&apos;s
        </h2>
        <p className="mt-1 text-[9.5px] tracking-[0.45em] uppercase font-semibold" style={{ color: GOLD }}>
          Little Italy
        </p>
        <p className="mt-0.5 text-[8.5px] tracking-[0.22em] uppercase" style={{ color: MUTED }}>
          Ristorante Italiano · Mannheim
        </p>
      </div>
      <div className="px-7"><Ornament /></div>
      <div className="text-center px-7 -mt-1 mb-1">
        <p style={{ fontFamily: "var(--font-great-vibes)", fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: WINE, lineHeight: 1.2 }}>
          {title}
        </p>
      </div>
      <div className="px-7"><Ornament /></div>
    </>
  );
}

function CardFooter({ text, sub }: { text: string; sub: string }) {
  return (
    <div className="px-7 py-6 text-center mt-6" style={{ background: WINE }}>
      <p style={{ fontFamily: "var(--font-great-vibes)", fontSize: "1.9rem", color: GOLD, lineHeight: 1.2 }}>
        {text}
      </p>
      <p className="mt-1.5 text-[8.5px] tracking-[0.32em] uppercase" style={{ color: "rgba(200,169,106,0.6)" }}>
        {sub}
      </p>
    </div>
  );
}

// ── SPEISEKARTE ────────────────────────────────────────────────────
function SpeiseCard() {
  return (
    <div className="relative flex flex-col" style={{ border: `2px solid ${WINE}` }}>
      <div className="absolute inset-[7px] pointer-events-none" style={{ border: `1px solid rgba(110,30,42,0.18)` }} />
      <div className="absolute bottom-16 inset-x-0 flex justify-center pointer-events-none overflow-hidden opacity-[0.05]" aria-hidden>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Wasserturm_Mannheim.jpg" alt="" width={280} height={360} className="object-contain object-bottom" style={{ mixBlendMode: "multiply" }} />
      </div>

      <CardHeader title="Speisekarte" />

      <div className="relative z-10 px-7 flex-1">

        {/* ANTIPASTI */}
        <SecDivider title="Antipasti" />
        <div className="flex justify-between gap-2 pb-1">
          <p className="text-[10px]" style={{ color: MUTED }}>klein / groß</p>
        </div>
        <Row name="Antipasti-Teller, vegetarisch" desc="mit hausgemachtem Brot" price="14,5 | 17,5" />
        <Row name="Anti-Pasti Teller, gemischt" desc="mit hausgemachtem Brot" price="14,5 | 17,5" />
        <Row name="Tomatencremesuppe" price="7,9" />
        <Row name="Vitello Tonnato" desc="Rosa gebratenes Rindfleisch, Thunfischsauce, Kapern, Eier und Brot" price="14,5" />
        <Row name="Mozzarella di Bufala" desc="Büffelmozzarella, Kirschtomaten, Basilikum, Olivenöl" price="14,9" />
        <Row name="Carpaccio di Manzo" desc="Rinderfiletstücke, Rucola, Olivenöl, Kapern, getrocknete Tomaten" price="14,9" />
        <Row name="Burrata" price="18,5" />

        {/* RISOTTO */}
        <SecDivider title="Risotto" />
        <Row name="Risotto al Pomodoro" desc="mit getrockneten Tomaten" price="14,5" />
        <Row name="Risotto con Spinaci und Trüffeln" desc="mit Spinat und Parmesan" price="17,5" />
        <Row name="Risotto al Pasta" desc="mit Tomaten und Parmesan" price="17,5" />
        <Row name="Risotto al limone e gamberetti" desc="mit Garnelen" price="22,5" />

        {/* BURGER */}
        <SecDivider title="Burger" />
        <Row name="Ohhjulia mediterranean Burger" desc="Mehrkornbrötchen, Remoulade, Rucola, Mozzarella, dazu Pommes oder Salat" price="19,9" />
        <Row name="Ohhjulia Crispy Chicken Burger" desc="Hähnchenfleisch, Remoulade, Tomaten, Rucola, Grana Padano" price="17,5" />
        <Row name="Jumbo Burger" desc="400 g Rinderhackfleisch, Grana Padano, Rucola, Tomaten" price="25,9" />
        <Row name="Oh Julia Veggie Burger" desc="Gemüsepatty, Remoulade, Rucola, Tomaten, dazu Pommes oder Salat" price="15,9" />
        <Row name="Oh Julia Fish Burger" desc="Fischfilet, Remoulade, Rucola, Tomaten, dazu Pommes oder Salat" price="17,5" />

        {/* FLEISCH / PESCE VOM GRILL */}
        <SecDivider title="Fleisch / Pesce vom Grill" />
        <Row name="Tagliata vom Grill" desc="Rindersteakscheiben, Rucola, Grana Padano, Rosmarin" price="27,9" />
        <Row name="Steak Fritties" desc="Rindersteakfleisch, Pommes, Kräuterbutter" price="26,9" />
        <Row name="Filetto alla Griglia" desc="Rinderfilet vom Grill" price="33,9" />
        <Row name="Carne Mista alla Griglia" desc="Gemischte Fleischplatte vom Grill mit Rinderfilet und Hähnchenbrust" price="46,5" />
        <Row name="Calamar alla Griglia" desc="Gegrillter Tintenfisch, Rucola, Olivenöl, Spinat" price="24,9" />
        <Row name="Pesce Misto alla Griglia" desc="Gemischte Meeresfrüchte vom Grill" price="35,9" />
        <Row name="Filetti di Dorade alla Griglia" desc="Doradenfilets vom Grill mit Gemüse" price="25,5" />
        <Row name="Salmone alla Griglia" desc="Lachs vom Grill" price="28,5" />

        {/* INSALATA */}
        <SecDivider title="Insalata" />
        <Row name="Römersalat" desc="Gegrillter Römersalat, Parmesan Dressing, Brotwürfel" price="10,9" />
        <div className="ml-3 mb-1">
          <p className="text-[10px] mb-1 mt-1" style={{ color: MUTED }}>Belege nach Wahl:</p>
          <Row name="· mit gegrilltem Rinderfilet" price="17,5" />
          <Row name="· mit Ziegengemüse und Rosmarinhonig" price="17,5" />
          <Row name="· mit gegrillten Garnelen" price="22,5" />
          <Row name="· mit Avocado, Minze, Joghurt-Limetten-Dressing" price="18,5" />
        </div>
        <Row name="Kleiner Romanasalat" price="8,9" />
        <Row name="Kleiner gemischter Salat" price="4,5" />

        {/* BEILAGEN */}
        <SecDivider title="Beilagen" />
        <Row name="Pommes frites" price="5,9" />
        <Row name="Rosmarinkartoffeln" price="7,5" />
        <Row name="Süßkartoffelsticks" price="7,5" />

        {/* VEGETARISCHE PASTA */}
        <SecDivider title="Vegetarische Pasta" />
        <Row name="Spaghetti Aglio e Olio e Peperoncini" desc="Knoblauch, Olivenöl, Chili" price="14,9" />
        <Row name="Penne all'Arrabbiata" desc="Tomatensauce, Knoblauch, Petersilie" price="14,9" />
        <Row name="Spaghetti / Penne al pesto di basilico" desc="Basilikum-Pesto, Walnüsse, Grana Padano" price="14,9" />
        <Row name="Tortelloni al 4 formaggi" desc="Vier-Käse-Creme-Sauce" price="17,9" />
        <Row name="Tortelloni al Tartufo" desc="Sahne-Trüffel-Sauce, frischer Trüffel, Grana Padano" price="20,5" />
        <Row name="Alforno Spinaci" desc="Penne, Spinat, Champignons, Mozzarella, Sahnesauce" price="14,9" />

        {/* PASTA MIT FLEISCH / FISCH */}
        <SecDivider title="Pasta mit Fleisch / Fisch" />
        <Row name="Spaghetti alla Carbonara" desc="Eier, Pecorino, Pancetta, schwarzer Pfeffer" price="15,9" />
        <Row name="Spaghetti alla Bolognese" desc="Rindfleisch-Bolognese, Grana Padano" price="14,5" />
        <Row name="Ravioli mit Spinatfüllung und Trüffel" desc="Rosé-Sauce, Grana Padano, Romano" price="19,5" />
        <Row name="Tagliatelle con melanzane" desc="Auberginen-Ragù, Paprika, Basilikum, Grana Padano" price="15,9" />
        <Row name="Ravioli con Spinaci e gorgonzola" desc="Spinat-Ricotta-Füllung, Gorgonzola-Sauce" price="17,9" />
        <Row name="Tagliatelle Gamberetti e Zucchini" desc="Garnelen, Zucchini, Crème Fraîche, Tomatensauce" price="22,9" />
        <Row name="Lasagne alle Bolognese" desc="Rindfleisch, Mozzarella, Grana Padano" price="15,9" />
        <Row name="Tagliatelle al Salmone" desc="Lachs, Sahnesauce" price="22,5" />
        <Row name="Pasta di Pollo" desc="Penne, Hähnchenfleisch, Champignons, Bacon" price="15,9" />
        <Row name="Spaghetti ai Frutti di Mare" desc="Meeresfrüchte, Knoblauch, Petersilie, Olivenöl" price="22,9" />
        <Row name="Tortelloni Nero al Pesto" desc="Schwarze Tortelloni, Basilikumpesto, Crème Fraîche" price="17,9" />

        {/* PIZZA */}
        <SecDivider title="Pizza" />
        <div className="flex justify-end gap-4 mb-1.5">
          <p className="text-[10px] tracking-wider" style={{ color: MUTED }}>30 cm</p>
          <p className="text-[10px] tracking-wider w-12 text-right" style={{ color: MUTED }}>60 cm</p>
        </div>
        <PizzaRow name="Margherita" desc="Tomatensauce, Mozzarella, Basilikum" sm="12,5" lg="19,9" />
        <PizzaRow name="Funghi" desc="Tomatensauce, Mozzarella, Champignons, Frühlingszwiebeln" sm="14,9" lg="25,9" />
        <PizzaRow name="Prosciutto" desc="Tomatensauce, Mozzarella, Schinken, Champignons" sm="16,5" lg="26,9" />
        <PizzaRow name="Prosciutto e Funghi" desc="Tomatensauce, Mozzarella, Prosciutto, Champignons" sm="16,5" lg="26,9" />
        <PizzaRow name="Quattro Formaggi" desc="Tomatensauce, Mozzarella, Gorgonzola, Taleggio, Parmesan" sm="15,5" lg="25,9" />
        <PizzaRow name="Caprese" desc="Büffelmozzarella, Kirschtomaten, Basilikum" sm="18,5" lg="29,5" />
        <PizzaRow name="Salsiccia e Gorgonzola" desc="Tomatensauce, Salsiccia, Gorgonzola, Chili" sm="17,5" lg="27,5" />
        <PizzaRow name="Rustica" desc="Tomatensauce, Prosciutto Crudo, Rucola, Kirschtomaten, Grana Padano" sm="18,5" lg="28,5" />
        <PizzaRow name="Tonno" desc="Tomatensauce, Mozzarella, Thunfisch, Kapern" sm="16,5" lg="26,9" />
        <PizzaRow name="Spinaci" desc="Tomatensauce, Mozzarella, Spinat, Grana Padano, Kirschtomaten" sm="17,5" lg="27,5" />
        <PizzaRow name="Pizza Garlic" sm="13,5" />
        <PizzaRow name="Pizza pulled Pork" desc="Tomatensauce, Mozzarella, Mais, Pulled Pork, geräucherte Zwiebeln" sm="17,5" lg="27,5" />
        <PizzaRow name="Diavola" desc="Tomatensauce, Mozzarella, scharfe Salami, Chili" sm="18,9" lg="29,5" />
        <PizzaRow name="Pizza Mista" desc="Crème Fraîche, Ziegenkäse, Kirschtomaten, Nüsse, Feigen, Prosciutto" sm="19,5" lg="29,9" />
        <PizzaRow name="Pizza Spicy Italian" desc="BBQ-Hähnchen, Champignons, Mozzarella, BBQ-Sauce" sm="17,5" lg="26,5" />
        <PizzaRow name="Pizza al Pesto" desc="Pesto, Büffelmozzarella, Kirschtomaten" sm="17,5" lg="27,5" />
        <PizzaRow name="Nutella Pizza mit Banane" desc="Nutella, Banane, Puderzucker" sm="13,9" />

        {/* DOLCE */}
        <SecDivider title="Dolce" />
        <Row name="Cioko Soufflé" desc="Schokoladensoufflé" price="7,5" />
        <Row name="Tiramisù" price="7,5" />
        <Row name="Panna Cotta / Kuchen" price="4,9" />

        <p className="text-center mt-5 mb-5 text-[9.5px] tracking-wide" style={{ color: MUTED }}>
          Glutenfreie &amp; vegane Optionen auf Anfrage · Alle Preise inkl. MwSt.
        </p>
      </div>

      <CardFooter text="Buon Appetito!" sub="Grazie e Arrivederci" />
    </div>
  );
}

// ── GETRÄNKEKARTE ──────────────────────────────────────────────────
function GetraenkeCard() {
  return (
    <div className="relative flex flex-col" style={{ border: `2px solid ${WINE}` }}>
      <div className="absolute inset-[7px] pointer-events-none" style={{ border: `1px solid rgba(110,30,42,0.18)` }} />
      <div className="absolute bottom-16 inset-x-0 flex justify-center pointer-events-none overflow-hidden opacity-[0.05]" aria-hidden>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Wasserturm_Mannheim.jpg" alt="" width={280} height={360} className="object-contain object-bottom" style={{ mixBlendMode: "multiply" }} />
      </div>

      <CardHeader title="Getränkekarte" />

      <div className="relative z-10 px-7 flex-1">

        {/* CAFFÈ E TÉ */}
        <SecDivider title="Caffè e Tè" />
        <Row name="Espresso" price="2,2" />
        <Row name="Espresso Doppio" price="2,9" />
        <Row name="Espresso Macchiato" price="2,5" />
        <Row name="Espresso Corretto" price="4,0" />
        <Row name="Cappuccino" price="3,3" />
        <Row name="Latte Macchiato" price="3,6" />
        <Row name="Café Americano" price="2,9" />
        <Row name="Maccha Latte" price="4,9" />
        <Row name="Heiße Schokolade" price="3,9" />
        <Row name="Diverse Teesorten" price="3,9" />
        <Row name="Tee mit frischer Minze" price="4,2" />

        {/* ACQUA, SUCCO, SOFTS */}
        <SecDivider title="Acqua, Succo, Softs" />
        <Row name="S.Pellegrino frizzante / still" desc="0,25 l / 0,5 l / 1 l" price="2,9 | 4,9 | 7,9" />
        <Row name="Acqua Panna" desc="0,25 l / 0,5 l" price="2,9 | 4,9" />
        <Row name="Tafelwasser" desc="0,25 l / 0,5 l" price="2,5 | 3,5" />
        <Row name="Succo / Fruchtsaft" desc="Apfel, Orange, Nektar, Johannisbeere, Maracuja, Rhabarber, Ananas, Mango — 0,25 l" price="5,9" />
        <Row name="Coca-Cola / Coca-Cola Zero" desc="0,33 l" price="4,2" />
        <Row name="Mezzo Mix (Cola+Orange)" desc="0,33 l" price="4,2" />
        <Row name="Fanta" desc="0,33 l" price="4,2" />
        <Row name="Sprite" desc="0,33 l" price="4,2" />
        <Row name="Sanbitér" desc="0,33 l" price="4,2" />
        <Row name="Tonic Water / Bitter Lemon / Ginger Ale" desc="0,25 l" price="4,2" />
        <Row name="Ginger Beer" price="4,2" />
        <Row name="St. Pellegrino Limonata / Aranciata" desc="0,25 l" price="4,9" />
        <Row name="Homemade Lemonade" desc="0,5 l" price="5,9" />
        <Row name="Homemade Ice Tea" desc="0,5 l" price="5,2" />

        {/* APERITIVO */}
        <SecDivider title="Aperitivo" />
        <Row name="Champagner" desc="0,1 l" price="16,9" />
        <Row name="Prosecco" desc="0,1 l" price="9,9" />
        <Row name="Prosecco Spumante Brut DOC" desc="0,75 l" price="25,9" />
        <Row name="Ferrari Rosé" desc="0,1 l" price="38,9" />
        <div className="mt-2">
          <p className="text-[10px] mb-1" style={{ color: MUTED }}>— Spritz —</p>
          <Row name="Aperol Spritz" desc="Aperol, Prosecco, Soda, Orange" price="9,9" />
          <Row name="Hugo" desc="Holunderblütensirup, Prosecco, Soda, Minze, Limette" price="9,9" />
          <Row name="Limoncino Spritz" desc="Limoncino, Vanille, Prosecco, Soda" price="9,9" />
          <Row name="Fragola Spritz" desc="Erdbeerpüree, Prosecco, Soda" price="9,9" />
          <Row name="Lillet Berry" desc="Lillet Blanc, Schweppes Wild Berry, Johannisbeeren" price="9,9" />
          <Row name="Campari Spritz" desc="Campari, Prosecco, Soda, Orange" price="9,9" />
        </div>

        {/* VINO — BIANCO */}
        <SecDivider title="Vino — Bianco" />
        <div className="flex justify-end gap-4 mb-1.5">
          <p className="text-[10px]" style={{ color: MUTED }}>0,2 l</p>
          <p className="text-[10px] w-14 text-right" style={{ color: MUTED }}>0,75 l</p>
        </div>
        <WineRow name="Pinot Grigio IGT" glass="6,2" bottle="24,5" />
        <WineRow name="Chardonnay IGT" glass="6,2" bottle="24,5" />
        <WineRow name="Weißburgunder QbA" glass="6,2" bottle="26,8" />
        <Row name="Weinschorle" desc="0,2 l" price="4,0" />

        {/* VINO — ROSSO */}
        <SecDivider title="Vino — Rosso" />
        <div className="flex justify-end gap-4 mb-1.5">
          <p className="text-[10px]" style={{ color: MUTED }}>0,2 l</p>
          <p className="text-[10px] w-14 text-right" style={{ color: MUTED }}>0,75 l</p>
        </div>
        <WineRow name="Insolence (Languedoc)" glass="6,2" bottle="23,5" />
        <WineRow name="Merlot IGT (Veneto)" glass="6,2" bottle="23,9" />
        <WineRow name="Montepulciano d'Abruzzo DOP" glass="6,9" bottle="25,9" />
        <WineRow name="Primitivo IGT" glass="7,9" bottle="24,9" />
        <WineRow name="Lambrusco" glass="6,2" bottle="23,5" />

        {/* VINO IN BOTTIGLIA */}
        <SecDivider title="Vino in Bottiglia" />
        <p className="text-[10px] mb-2" style={{ color: MUTED }}>Bianco / Weiß</p>
        <Row name="Ca dei Frati, Lugana di Simione" desc="Lombardo" price="35,5" />
        <Row name={'Il Vino del Traketto "Abruzzo DOC"'} price="33,5" />
        <Row name="Principi de Butera Insolia" price="48,5" />
        <p className="text-[10px] mt-3 mb-2" style={{ color: MUTED }}>Rosato / Rosé</p>
        <Row name="Chiaretto rosato" price="39,9" />
        <p className="text-[10px] mt-3 mb-2" style={{ color: MUTED }}>Rosso / Rot</p>
        <Row name="Barbera d'Asti DOC" price="38,5" />
        <Row name="Castello di Abola Chianti Classico" desc="Supertoscano" price="49,5" />
        <Row name="Barolo DOCG Fontanafredda" price="98,5" />

        {/* BIRRA */}
        <SecDivider title="Birra" />
        <SizeRow name="Birra Moretti" size="0,33 l" price="4,9" />
        <SizeRow name="Heineken Pure Malt Lager" size="0,33 l" price="4,9" />
        <SizeRow name="Radeberger Pilsner" size="0,33 l" price="4,2" />
        <SizeRow name="Radler" size="0,33 l" price="4,9" />
        <SizeRow name="Erdinger Brauhaus Helles vom Fass" size="0,33 / 0,5 l" price="4,5 | 5,9" />
        <SizeRow name="Maisels Hefe Weißbier" size="0,5 l" price="5,9" />
        <SizeRow name="Erdinger Urweisse" size="0,5 l" price="5,9" />
        <SizeRow name="Erdinger Dunkel" size="0,5 l" price="5,9" />
        <SizeRow name="Erdinger Kristall" size="0,5 l" price="5,9" />
        <SizeRow name="Erdinger Alkoholfrei" size="0,5 l" price="5,9" />
        <SizeRow name="Clausthaler Alkoholfrei" size="0,33 l" price="5,9" />
        <SizeRow name="Cola Bier" size="0,5 l" price="5,9" />

        {/* APERITIVO / DIGESTIVO */}
        <SecDivider title="Aperitivo / Digestivo" />
        <SpiritRow name="Grappa" cl="3 cl" price="4,9" />
        <SpiritRow name="Vecchio Amaro del Capo" cl="4 cl" price="6,9" />
        <SpiritRow name="Sambuca Secolare" cl="4 cl" price="6,9" />
        <SpiritRow name="Limoncino Del 'Isola'" cl="4 cl" price="5,9" />
        <SpiritRow name="Martini" cl="4 cl" price="6,9" />
        <SpiritRow name="Vodka" cl="4 cl" price="6,9" />
        <SpiritRow name="Tequila Silver / Gold" cl="4 cl" price="6,9" />
        <SpiritRow name="Jägermeister" cl="4 cl" price="6,9" />
        <SpiritRow name="Ramazzotti" cl="4 cl" price="6,9" />

        {/* WHISKY */}
        <SecDivider title="Whisky" />
        <SpiritRow name="Jonny Walker Red Label" cl="4 cl" price="5,5" />
        <SpiritRow name="Chivas Regal" cl="4 cl" price="9,5" />
        <SpiritRow name="Jack Daniels" cl="4 cl" price="7,5" />

        {/* CHAMPAGNER */}
        <SecDivider title="Champagner" />
        <Row name="Veuve Clicquot" desc="0,75 l" price="166,9" />
        <Row name="Moët & Chandon" desc="0,75 l" price="139,9" />
        <Row name="Moët & Chandon Rosé" desc="0,75 l" price="145,9" />
        <Row name="Pommery Brut Royal" desc="0,75 l" price="119,9" />

        {/* NIGHT CALL */}
        <SecDivider title="Night Call" />
        <Row name="Vodka Lemon" price="9,9" />
        <Row name="Gin Tonic" price="9,9" />
        <Row name="Cuba Libre" price="9,9" />
        <Row name="Whisky Cola" price="9,9" />
        <Row name="Campari Orange" price="9,9" />
        <Row name="Vodka Red Bull" price="9,9" />

        {/* COCKTAILS */}
        <SecDivider title="Cocktails mit Alkohol" />
        <Row name="Sex on the Beach" desc="Grapefruitsaft, Wodka, Pfirsichlikör, Amaretto, Ananassaft, Grenadine" price="9,9" />
        <Row name="Mojito" desc="Rum, Rohrzucker, Zitronensaft, Limettensaft, Soda, Minze" price="9,9" />
        <Row name="Strawberry Daiquiri" desc="Rum, Rohrzucker, Zitrone, Erdbeerpüree" price="9,9" />
        <SecDivider title="Alkoholfrei" />
        <Row name="Ipanema" desc="Limetten, Rohzucker, Limonensaft, Schweppes" price="8,9" />
        <Row name="Strawberry Kiss" desc="Maracujasaft, Mangosaft, Orangensaft, Erdbeerpüree" price="8,9" />

        {/* EIS */}
        <SecDivider title="Eis" />
        <Row name="Eiskaffee" desc="Espresso mit Bourbon-Vanilleeis und Sahne" price="6,5" />
        <Row name="Eisschokolade" desc="Schokoladengetränk mit Vanilleeis und Sahne" price="4,5" />
        <Row name="Milchshake nach Wahl" desc="Vanilla, Schokolade oder Erdbeere" price="6,5" />
        <Row name="Gemischtes Eis (2 Kugeln)" price="4,5" />
        <Row name="Iced Matcha Latte" price="5,2" />
        <SecDivider title="Ben & Jerry's (100 ml)" />
        <Row name="Cookie Dough" price="5,9" />
        <Row name="Chocolate Fudge Brownie" price="5,9" />
        <Row name="Caramel Chew Chew" price="5,9" />
        <Row name="Strawberry Cheesecake" price="5,9" />
        <Row name="Chunky Monkey" price="5,9" />

        {/* BREAKFAST */}
        <SecDivider title="Breakfast" />
        <p className="text-[10px] mb-2" style={{ color: MUTED }}>Mo – Sa bis 11:00 Uhr · So bis 13:00 Uhr</p>
        <Row name="Ciabatta con Avocado" desc="Selbstgemachtes Ciabatta, Guacamole Crème, Grana Padano" price="14,5" />
        <Row name="Ciabatta Caprese" desc="Büffelmozzarella, Tomaten, Basilikum, Pesto" price="12,9" />
        <Row name="Ciabatta con Prosciutto Crudo" desc="Rucola, Parmaschinken, Grana Padano" price="15,9" />
        <Row name="Yogurt Bowl" desc="Joghurt, frische Früchte" price="12,9" />
        <Row name="Gourmet-Frühstück für 2" desc="Brot, Croissants, Butter, Konfitüre, Honig, Aufschnitt, Käse, Eier, Orangensaft, Prosecco" price="44,5" />

        <p className="text-center mt-5 mb-5 text-[9.5px] tracking-wide" style={{ color: MUTED }}>
          Alle Preise inkl. MwSt. · Genießen Sie mit Verantwortung.
        </p>
      </div>

      <CardFooter text="Salute!" sub={"Vielen Dank für Ihren Besuch · Bis bald in Zito’s Little Italy"} />
    </div>
  );
}

// ── Export ─────────────────────────────────────────────────────────
export default function MenuCards() {
  return (
    <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-start">
      <SpeiseCard />
      <GetraenkeCard />
    </div>
  );
}
