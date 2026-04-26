import type { Metadata } from 'next';
import { Fredoka, Poppins } from 'next/font/google';
import './globals.css';

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  variable: '--font-fredoka'
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','500','600'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "CollectorFanCanada | Hobby Toys & Collectibles",
  description: "Curated hobby toys, vintage finds, and collectibles with a touch of magic.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${poppins.variable}`}>
      <body className="bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
