import Navbar from '@/components/Navbar';
import { Logo } from '@/components/Logo';
import { GlassButton } from '@/components/GlassButton';
import InstagramTeaser from '@/components/InstagramTeaser';
import SparkleBackground from '@/components/SparkleBackground';

export default function Home() {
  return (
    <>
      <SparkleBackground />
      <Navbar />

      {/* Smaller, Beautiful Typography Hero */}
      <section className="min-h-[78vh] pt-32 flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">

          <div className="md:col-span-5 flex justify-center md:justify-end">
            <Logo size="large" />
          </div>

          <div className="md:col-span-7">
            <div className="glass rounded-3xl p-10 max-w-lg">
              <h1 className="hero-title text-[#FFCC00] mb-6">
                Welcome to the<br />Collector's Circle
              </h1>

              <p className="subheadline text-[#E0F0FF] mb-8">
                Curated hobby toys, vintage finds, and collectibles
                with a touch of magic.
              </p>

              <p className="text-sm uppercase tracking-[3px] text-[#FFCC00]/90 mb-8">
                This is our magic, so let's enjoy it!
              </p>

              <div className="flex flex-col gap-3">
                <GlassButton primary href="/blog" className="text-lg py-4">
                  Explore Our World 🪄
                </GlassButton>
                <GlassButton href="/contact" className="text-lg py-4">
                  Our Story
                </GlassButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InstagramTeaser />

      <footer className="py-12 text-center text-sm opacity-70 border-t border-white/10">
        © {new Date().getFullYear()} CollectorFanCanada • Shipping from Canada to the World
      </footer>
    </>
  );
}
