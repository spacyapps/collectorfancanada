'use client';

import { motion } from 'framer-motion';

function sr(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

export default function SparkleBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Rich Magical Gradient */}
      <div className="absolute inset-0 bg-black" />

      {/* Subtle golden glow only */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(251,191,36,0.06),transparent_60%)]" />

      {/* Twinkling Stars */}
      {[...Array(120)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
          initial={{ opacity: 0.3 }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: sr(i * 10 + 0) * 3 + 2.5,
            repeat: Infinity,
            delay: sr(i * 10 + 1) * 6,
          }}
          style={{
            top: `${sr(i * 10 + 2) * 100}%`,
            left: `${sr(i * 10 + 3) * 100}%`,
          }}
        />
      ))}

      {/* Golden Magical Particles */}
      {[...Array(35)].map((_, i) => (
        <motion.div
          key={`gold-${i}`}
          className="absolute text-2xl text-[#FFCC00]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.9, 0],
            y: [0, -220],
            x: [0, sr(i * 10 + 4) * 80 - 40],
          }}
          transition={{
            duration: sr(i * 10 + 5) * 15 + 12,
            repeat: Infinity,
            delay: sr(i * 10 + 6) * 18,
          }}
          style={{
            top: `${sr(i * 10 + 7) * 100}%`,
            left: `${sr(i * 10 + 8) * 100}%`,
          }}
        >
          ✨
        </motion.div>
      ))}

      {/* Floating Magical Orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-6 h-6 rounded-full bg-gradient-to-br from-[#FFCC00]/40 to-[#A855F7]/30 blur-sm"
          animate={{
            x: [0, sr(i * 10 + 0) * 300 - 150],
            y: [0, sr(i * 10 + 1) * 300 - 150],
            scale: [0.6, 1.1, 0.6],
          }}
          transition={{
            duration: sr(i * 10 + 2) * 25 + 20,
            repeat: Infinity,
          }}
          style={{
            top: `${sr(i * 10 + 3) * 90}%`,
            left: `${sr(i * 10 + 4) * 90}%`,
          }}
        />
      ))}

      {/* Subtle Shooting Stars */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute h-[2px] w-16 bg-gradient-to-r from-transparent via-[#FFCC00] to-transparent"
          initial={{ opacity: 0, x: -100, y: sr(i * 10 + 5) * 400 }}
          animate={{
            opacity: [0, 0.8, 0],
            x: [-100, 800],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: i * 6 + sr(i * 10 + 6) * 8,
          }}
        />
      ))}
    </div>
  );
}
