'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PANELS = [
  {
    title: "Welcome to the\nCollector's Circle",
    byline: "by CollectorFanCanada",
    body: "Curated hobby toys, vintage finds, and collectibles with a touch of magic.",
  },
  {
    title: "Let's enjoy our hobbies!",
    byline: null,
    body: "Here I'll share what I find as a seasoned collector. Much has changed these days, but fun is still fun!",
  },
  {
    title: "Ok, let's see what\nwe have today!",
    byline: null,
    body: null,
  },
];

const INTERVAL = 5000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % PANELS.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  const panel = PANELS[index];

  return (
    <div>
      {/* Sliding panels */}
      <div className="overflow-hidden min-h-[10rem]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
          >
            <h1 className="hero-title text-[#FFCC00] mb-3 whitespace-pre-line">
              {panel.title}
            </h1>

            {panel.byline && (
              <p className="text-xs uppercase tracking-[3px] text-[#FFCC00]/70 mb-4">
                {panel.byline}
              </p>
            )}

            {panel.body && (
              <p className="subheadline text-[#E0F0FF]">
                {panel.body}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2 mt-6">
        {PANELS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to panel ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'bg-[#FFCC00] w-6' : 'bg-white/30 w-3'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
