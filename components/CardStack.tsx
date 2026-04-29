"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

interface CardItem {
  src: string;
  alt: string;
  label: string;
  sublabel?: string;
}

interface CardStackProps {
  cards: CardItem[];
  autoPlay?: boolean;
  interval?: number;
}

const MAX_OFFSET = 3;
const STEP_DEG = 5;
const ASPECT = 9 / 14; // height / width ratio

function getCardStyle(offset: number, cardW: number) {
  const abs = Math.abs(offset);
  const sign = Math.sign(offset);
  const spacing = cardW * 0.025;
  return {
    rotate: sign * abs * STEP_DEG,
    x: sign * abs * spacing * 2,
    y: abs * (cardW * 0.015),
    scale: 1 - abs * 0.06,
    zIndex: MAX_OFFSET - abs,
    opacity: abs > MAX_OFFSET ? 0 : 1 - abs * 0.12,
  };
}

export default function CardStack({
  cards,
  autoPlay = true,
  interval = 3500,
}: CardStackProps) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [cardW, setCardW] = useState(520);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  // Responsive card dimensions
  useEffect(() => {
    function update() {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      setCardW(Math.min(520, Math.max(260, w - 32)));
    }
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const cardH = Math.round(cardW * ASPECT);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % cards.length);
  }, [cards.length]);

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + cards.length) % cards.length);
  }, [cards.length]);

  useEffect(() => {
    if (!autoPlay || hovered || prefersReduced) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [autoPlay, hovered, next, interval, prefersReduced]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center gap-8 w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Stack container */}
      <div
        className="relative select-none mx-auto"
        style={{ width: cardW, height: cardH }}
      >
        {cards.map((card, i) => {
          const offset = ((i - active + cards.length) % cards.length);
          const centered = offset > cards.length / 2 ? offset - cards.length : offset;
          if (Math.abs(centered) > MAX_OFFSET) return null;
          const style = getCardStyle(centered, cardW);
          const isActive = centered === 0;

          return (
            <motion.div
              key={card.src}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
              style={{ originX: 0.5, originY: 1 }}
              animate={{
                rotate: prefersReduced ? 0 : style.rotate,
                x: prefersReduced ? 0 : style.x,
                y: style.y,
                scale: style.scale,
                zIndex: style.zIndex,
                opacity: style.opacity,
              }}
              transition={{ type: "spring", stiffness: 280, damping: 28, mass: 0.9 }}
              drag={isActive ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) next();
                else if (info.offset.x > 50) prev();
              }}
              onClick={() => !isActive && setActive(i)}
              whileDrag={{ scale: 1.02, cursor: "grabbing" }}
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                className="object-cover pointer-events-none"
                sizes={`${cardW}px`}
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />

              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 }}
                  className="absolute bottom-0 left-0 right-0 p-5 sm:p-7"
                >
                  {card.sublabel && (
                    <p className="text-gold text-[10px] sm:text-xs tracking-[0.2em] uppercase font-medium mb-1">
                      {card.sublabel}
                    </p>
                  )}
                  <p className="font-display text-2xl sm:text-3xl italic text-cream font-light">
                    {card.label}
                  </p>
                </motion.div>
              )}

              {isActive && (
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-cream/15 backdrop-blur-sm rounded-full px-2.5 py-1 text-cream text-[10px] sm:text-xs tracking-wide">
                  ← Wischen →
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex items-center gap-2">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Bild ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === active
                ? "w-5 h-2 bg-aegean"
                : "w-2 h-2 bg-cream-dark hover:bg-muted"
            }`}
          />
        ))}
      </div>

      {/* Arrows */}
      <div className="flex items-center gap-4">
        <button
          onClick={prev}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-cream-dark flex items-center justify-center text-muted hover:border-aegean hover:text-aegean transition-all duration-200 text-sm"
        >
          ←
        </button>
        <span className="text-xs text-muted tracking-wide tabular-nums">
          {active + 1} / {cards.length}
        </span>
        <button
          onClick={next}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-cream-dark flex items-center justify-center text-muted hover:border-aegean hover:text-aegean transition-all duration-200 text-sm"
        >
          →
        </button>
      </div>
    </div>
  );
}
