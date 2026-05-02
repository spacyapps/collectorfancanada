import Navbar from '@/components/Navbar';
import { GlassButton } from '@/components/GlassButton';
import InstagramTeaser from '@/components/InstagramTeaser';
import SparkleBackground from '@/components/SparkleBackground';
import HeroCarousel from '@/components/HeroCarousel';
import { Logo } from '@/components/Logo';

export default function Home() {
  return (
    <>
      <SparkleBackground />
      <Navbar />

      <section className="min-h-[78vh] pt-32 flex items-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 w-full">
          <div className="glass rounded-3xl p-6 md:p-10">

            <div className="flex flex-col md:flex-row items-center gap-8">

              {/* Left: text + buttons */}
              <div className="flex-1 min-w-0">
                <HeroCarousel />
                <div className="flex flex-col gap-3 mt-8">
                  <GlassButton primary href="/blog" className="text-sm py-3">
                    Explore Our World 🪄
                  </GlassButton>
                  <GlassButton href="/contact" className="text-sm py-3">
                    Our Story
                  </GlassButton>
                </div>
              </div>

              {/* Right: animated logo */}
              <div className="shrink-0">
                <Logo size="large" />
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
