'use client';

import { motion } from 'framer-motion';

interface SparklingNavLinkProps {
  children: React.ReactNode;
  href: string;
  isActive: boolean;
  className?: string;
}

export function SparklingNavLink({ children, href, isActive, className = "" }: SparklingNavLinkProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      className={`
        relative px-7 py-3.5 rounded-2xl font-medium text-lg transition-all duration-300 overflow-hidden ${className}
        ${isActive
          ? 'glass bg-white/20 ring-2 ring-[#FFCC00] text-white'
          : 'glass text-white hover:bg-white/20'
        }
      `}
    >
      {children}

      {/* Sparkle Effect - only on active link */}
      {isActive && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute text-[#FFCC00] text-xl pointer-events-none"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.6, 1.3, 0.8],
                x: Math.random() * 50 - 25,
                y: Math.random() * 40 - 20,
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                delay: i * 0.15
              }}
            >
              ✨
            </motion.span>
          ))}
        </>
      )}
    </motion.a>
  );
}
