'use client';

import { cn } from '@/lib/utils';

interface GlassButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export function GlassButton({
  children,
  primary = false,
  className = "",
  href,
  ...props
}: GlassButtonProps) {
  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      className={cn(
        "glass px-8 py-3.5 rounded-2xl font-medium text-lg transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center justify-center",
        primary
          ? "bg-gradient-to-r from-[#FFCC00] to-amber-400 text-[#0A2540] font-semibold shadow-xl hover:brightness-110"
          : "text-white hover:bg-white/20",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
