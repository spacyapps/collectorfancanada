'use client';

import { Logo } from './Logo';
import { GlassButton } from './GlassButton';
import { SparklingNavLink } from './SparklingNavLink';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-2xl border-b border-white/10 py-2">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Left: Logo — links home */}
        <a href="/">
          <Logo size="small" />
        </a>

        {/* Right: Compact Navigation Buttons */}
        <div className="flex items-center gap-2">
          <SparklingNavLink
            href="/blog"
            isActive={pathname === '/blog'}
            className="text-sm py-2.5 px-5"
          >
            Blog
          </SparklingNavLink>

          <GlassButton
            href="https://ebay.ca/usr/CollectorFanCanada"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm py-2.5 px-5"
          >
            eBay Shop
          </GlassButton>

          <SparklingNavLink
            href="/contact"
            isActive={pathname === '/contact'}
            className="text-sm py-2.5 px-5"
          >
            Contact
          </SparklingNavLink>
        </div>
      </div>
    </nav>
  );
}
