"use client";

import { useState } from "react";

interface MenuItem {
  name: string;
  desc?: string;
  price: string;
}

interface WineItem {
  name: string;
  glass: string;
  bottle: string;
}

interface DrinkItem {
  name: string;
  desc?: string;
  size?: string;
  price: string;
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-6 mt-10 first:mt-0">
      <p
        className="text-xs tracking-[0.28em] uppercase font-semibold shrink-0"
        style={{ color: "#C8A96A" }}
      >
        {title}
      </p>
      <div className="h-px flex-1" style={{ background: "rgba(200,169,106,0.3)" }} />
    </div>
  );
}

function MenuRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3.5 border-b border-cream-dark last:border-0">
      <div className="min-w-0">
        <p className="font-display text-lg text-aegean font-medium italic">{item.name}</p>
        {item.desc && (
          <p className="text-muted text-[13px] mt-0.5 leading-snug">{item.desc}</p>
        )}
      </div>
      <p
        className="text-sm font-medium shrink-0 tabular-nums pt-0.5"
        style={{ color: "#C8A96A" }}
      >
        {item.price} €
      </p>
    </div>
  );
}

function WineRow({ item }: { item: WineItem }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3 border-b border-cream-dark last:border-0">
      <p className="font-display text-lg text-aegean font-medium italic min-w-0">{item.name}</p>
      <div className="flex gap-6 shrink-0">
        <p className="text-sm font-medium tabular-nums" style={{ color: "#C8A96A" }}>
          {item.glass} €
        </p>
        <p className="text-sm font-medium tabular-nums text-muted w-14 text-right">
          {item.bottle} €
        </p>
      </div>
    </div>
  );
}

function DrinkRow({ item }: { item: DrinkItem }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3.5 border-b border-cream-dark last:border-0">
      <div className="min-w-0">
        <p className="font-display text-lg text-aegean font-medium italic">{item.name}</p>
        {item.desc && (
          <p className="text-muted text-[13px] mt-0.5 leading-snug">{item.desc}</p>
        )}
      </div>
      <div className="text-right shrink-0 pt-0.5">
        {item.size && <p className="text-[11px] text-muted tabular-nums">{item.size}</p>}
        <p className="text-sm font-medium tabular-nums" style={{ color: "#C8A96A" }}>
          {item.price} €
        </p>
      </div>
    </div>
  );
}

const speiseData = {
  antipasti: [
    { name: "Carpaccio di Manzo", desc: "Rinderfilet, Rucola, Parmesan, Zitronen-Olivenöl", price: "14,90" },
    { name: "Vitello Tonnato", desc: "Kalbfleisch, Thunfischsauce, Kapern, Rucola", price: "13,50" },
    { name: "Bruschetta Classica", desc: "Tomaten, Knoblauch, Basilikum, Olivenöl", price: "8,50" },
    { name: "Antipasto Misto", desc: "Italienische Wurstspezialitäten, Käse, Oliven, Artischocken, getrocknete Tomaten", price: "16,90" },
  ],
  pasta: [
    { name: "Spaghetti Aglio e Olio", desc: "Knoblauch, Olivenöl, Chili, Petersilie", price: "11,90" },
    { name: "Penne all'Arrabbiata", desc: "Tomatensauce, Chili, Knoblauch, Petersilie", price: "12,90" },
    { name: "Tagliatelle al Salmone", desc: "Lachs, Sahnesauce, Dill", price: "15,90" },
    { name: "Ravioli al Tartufo", desc: "Ravioli gefüllt mit Ricotta und Trüffel, Butter-Salbei-Sauce, Parmesan", price: "16,90" },
    { name: "Spaghetti alle Vongole", desc: "Vongole, Weißwein, Knoblauch, Petersilie, Cherrytomaten", price: "16,90" },
  ],
  pizza: [
    { name: "Margherita", desc: "Tomatensauce, Fior di Latte, Basilikum", price: "11,90" },
    { name: "Diavola", desc: "Tomatensauce, Fior di Latte, scharfe Salami, Chili", price: "13,50" },
    { name: "Prosciutto e Funghi", desc: "Tomatensauce, Fior di Latte, Prosciutto Cotto, Champignons", price: "13,50" },
    { name: "Rucola e Parma", desc: "Tomatensauce, Fior di Latte, Rucola, Parmaschinken, Parmesan", price: "15,90" },
    { name: "Quattro Formaggi", desc: "Tomatensauce, Fior di Latte, Gorgonzola, Taleggio, Parmesan", price: "14,90" },
  ],
  carne: [
    { name: "Filetto di Manzo alla Griglia", desc: "Rinderfilet vom Grill, Rosmarin, Gemüse, Kartoffeln", price: "29,90" },
    { name: "Saltimbocca alla Romana", desc: "Kalbfleisch, Parmaschinken, Salbei, Weißwein, Gemüse", price: "22,90" },
    { name: "Petto di Pollo alla Griglia", desc: "Hähnchenbrust vom Grill, Rucola, Cherrytomaten, Parmesan", price: "18,90" },
    { name: "Gamberoni alla Griglia", desc: "Riesengarnelen vom Grill, Knoblauch, Olivenöl, Zitrone", price: "24,90" },
    { name: "Orata al Forno", desc: "Dorade im Ofen gebacken, Kräuter, Gemüse", price: "23,90" },
  ],
  dolci: [
    { name: "Tiramisù", price: "7,50" },
    { name: "Panna Cotta", desc: "mit Waldbeeren", price: "6,90" },
    { name: "Tartufo al Cioccolato", price: "7,50" },
    { name: "Affogato al Caffè", desc: "Vanilleeis, Espresso", price: "6,50" },
  ],
};

const getraenkeData = {
  aperitivo: [
    { name: "Aperol Spritz", desc: "Aperol, Prosecco, Soda, Orange", price: "7,90" },
    { name: "Hugo", desc: "Holunderblütensirup, Prosecco, Soda, Minze, Limette", price: "7,90" },
    { name: "Lillet Berry", desc: "Lillet Blanc, Wild Berry, Beeren", price: "7,90" },
    { name: "Campari Soda / Orange", price: "6,90" },
    { name: "Martini Bianco / Rosso", price: "6,50" },
  ],
  viniRossi: [
    { name: "Montepulciano d'Abruzzo", glass: "7,50", bottle: "26,00" },
    { name: "Chianti Classico", glass: "7,90", bottle: "28,00" },
    { name: "Primitivo di Manduria", glass: "8,50", bottle: "29,00" },
    { name: "Nero d'Avola", glass: "7,50", bottle: "26,00" },
    { name: "Valpolicella Ripasso", glass: "8,90", bottle: "31,00" },
    { name: "Barolo", glass: "12,00", bottle: "42,00" },
  ],
  viniBianchi: [
    { name: "Pinot Grigio delle Venezie", glass: "6,90", bottle: "24,00" },
    { name: "Vermentino di Sardegna", glass: "7,50", bottle: "26,00" },
    { name: "Lugana DOC", glass: "8,50", bottle: "29,00" },
    { name: "Gavi di Gavi", glass: "7,90", bottle: "28,00" },
    { name: "Chardonnay", glass: "7,50", bottle: "26,00" },
  ],
  birra: [
    { name: "Peroni Nastro Azzurro", size: "0,33 l", price: "4,20" },
    { name: "Moretti", size: "0,33 l", price: "4,20" },
    { name: "Peroni Gran Riserva", size: "0,50 l", price: "5,50" },
    { name: "Radler", size: "0,33 l", price: "4,20" },
    { name: "Alkoholfreies Bier", size: "0,23 l", price: "4,20" },
  ],
  softdrinks: [
    { name: "San Pellegrino Wasser", size: "0,25 l", price: "2,80" },
    { name: "San Pellegrino Wasser", size: "0,75 l", price: "6,50" },
    { name: "Coca-Cola / Coca-Cola Zero", size: "0,33 l", price: "3,50" },
    { name: "Fanta / Sprite", size: "0,33 l", price: "3,50" },
    { name: "Orangensaft", size: "0,20 l", price: "3,50" },
    { name: "Apfelsaft", size: "0,20 l", price: "3,50" },
    { name: "Schweppes Tonic / Bitter Lemon", size: "0,20 l", price: "3,50" },
  ],
  digestivi: [
    { name: "Limoncello", size: "4 cl", price: "4,50" },
    { name: "Grappa", size: "4 cl", price: "6,00" },
    { name: "Amaro Averna", size: "4 cl", price: "4,50" },
    { name: "Amaro Montenegro", size: "4 cl", price: "4,50" },
    { name: "Sambuca", size: "4 cl", price: "4,50" },
    { name: "Baileys", size: "4 cl", price: "4,50" },
  ],
};

export default function MenuTabs() {
  const [tab, setTab] = useState<"speise" | "getraenke">("speise");

  return (
    <div>
      {/* Tab switcher */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-full bg-cream-dark p-1 gap-1">
          {(["speise", "getraenke"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-200"
              style={
                tab === t
                  ? { background: "#6E1E2A", color: "#F5F1EA" }
                  : { color: "#6B6560" }
              }
            >
              {t === "speise" ? "Speisekarte" : "Getränkekarte"}
            </button>
          ))}
        </div>
      </div>

      {tab === "speise" ? (
        <div className="max-w-3xl mx-auto">
          <SectionHeader title="Antipasti" />
          {speiseData.antipasti.map((item) => <MenuRow key={item.name} item={item} />)}

          <SectionHeader title="Pasta" />
          {speiseData.pasta.map((item) => <MenuRow key={item.name} item={item} />)}

          <SectionHeader title="Pizza" />
          {speiseData.pizza.map((item) => <MenuRow key={item.name} item={item} />)}

          <SectionHeader title="Carne / Pesce" />
          {speiseData.carne.map((item) => <MenuRow key={item.name} item={item} />)}

          <SectionHeader title="Dolci" />
          {speiseData.dolci.map((item) => <MenuRow key={item.name} item={item} />)}

          <p className="text-center text-muted text-xs mt-10 tracking-wide">
            Glutenfreie &amp; vegane Optionen auf Anfrage · Alle Preise inkl. MwSt.
          </p>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          <SectionHeader title="Aperitivo" />
          {getraenkeData.aperitivo.map((item) => <DrinkRow key={item.name} item={item} />)}

          <SectionHeader title="Vini Rossi" />
          <div className="flex justify-end gap-6 mb-2 pr-0.5">
            <p className="text-[11px] text-muted tracking-wider">0,2 l</p>
            <p className="text-[11px] text-muted tracking-wider w-14 text-right">0,75 l</p>
          </div>
          {getraenkeData.viniRossi.map((item) => <WineRow key={item.name} item={item} />)}

          <SectionHeader title="Vini Bianchi" />
          <div className="flex justify-end gap-6 mb-2 pr-0.5">
            <p className="text-[11px] text-muted tracking-wider">0,2 l</p>
            <p className="text-[11px] text-muted tracking-wider w-14 text-right">0,75 l</p>
          </div>
          {getraenkeData.viniBianchi.map((item) => <WineRow key={item.name} item={item} />)}

          <SectionHeader title="Birra" />
          {getraenkeData.birra.map((item) => <DrinkRow key={item.name} item={item} />)}

          <SectionHeader title="Soft Drinks" />
          {getraenkeData.softdrinks.map((item) => <DrinkRow key={item.name} item={item} />)}

          <SectionHeader title="Digestivi" />
          {getraenkeData.digestivi.map((item) => <DrinkRow key={item.name} item={item} />)}

          <p className="text-center text-muted text-xs mt-10 tracking-wide">
            Alle Preise inkl. MwSt. · Genießen Sie mit Verantwortung.
          </p>
        </div>
      )}
    </div>
  );
}
