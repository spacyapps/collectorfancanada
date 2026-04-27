'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { SparklingNavLink } from './SparklingNavLink';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/blog', label: 'Blog' },
  { href: '/ebay-shop', label: 'eBay Shop' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-2xl border-b border-white/10 py-2">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Left: Logo — links home, sparkles when on home */}
        <a href="/" className="relative inline-flex" onClick={() => setMenuOpen(false)}>
          <Logo size="small" />
          {isHome && [...Array(5)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute text-[#FFCC00] text-xl pointer-events-none"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.6, 1.3, 0.8],
                x: Math.random() * 60 - 30,
                y: Math.random() * 50 - 25,
              }}
              transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.15 }}
            >
              ✨
            </motion.span>
          ))}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          {NAV_LINKS.map(({ href, label }) => (
            <SparklingNavLink
              key={href}
              href={href}
              isActive={pathname === href}
              className="text-sm py-2.5 px-5"
            >
              {label}
            </SparklingNavLink>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden glass p-3 rounded-xl text-white"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={menuOpen ? 'open' : 'closed'}
            className="w-5 h-4 flex flex-col justify-between"
          >
            <motion.span
              className="block h-0.5 bg-white rounded-full origin-center"
              variants={{ open: { rotate: 45, y: 7 }, closed: { rotate: 0, y: 0 } }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 bg-white rounded-full"
              variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 bg-white rounded-full origin-center"
              variants={{ open: { rotate: -45, y: -7 }, closed: { rotate: 0, y: 0 } }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-white/10"
          >
            <div className="flex flex-col gap-2 px-6 py-4">
              {NAV_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    glass px-5 py-3 rounded-2xl text-sm font-medium text-center transition-all
                    ${pathname === href
                      ? 'bg-white/20 ring-2 ring-[#FFCC00] text-white'
                      : 'text-white hover:bg-white/20'
                    }
                  `}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
