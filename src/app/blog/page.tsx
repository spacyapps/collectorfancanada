import Navbar from '@/components/Navbar';
import SparkleBackground from '@/components/SparkleBackground';

export default function BlogPage() {
  return (
    <>
      <SparkleBackground />
      <Navbar />

      <div className="pt-40 pb-20 min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="font-fredoka text-2xl md:text-3xl text-center mb-3 text-[#FFCC00]">
            The Wizard's Blog
          </h1>
          <p className="text-center text-sm text-[#E0F0FF] mb-16">
            Stories, restoration tips, new arrivals & collector adventures
          </p>

          <div className="text-center py-32 text-white/60">
            <p className="text-base">Blog posts coming soon...</p>
            <p className="mt-4 text-sm">In the meantime, follow us on Instagram for daily updates!</p>
            <a
              href="https://www.instagram.com/collectorfancanada/"
              target="_blank"
              className="mt-6 inline-block glass px-6 py-3 rounded-2xl text-sm hover:bg-white/20"
            >
              Visit Instagram →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
