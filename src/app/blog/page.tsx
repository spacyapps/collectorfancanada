import Navbar from '@/components/Navbar';
import SparkleBackground from '@/components/SparkleBackground';

export default function BlogPage() {
  return (
    <>
      <SparkleBackground />
      <Navbar />

      <div className="pt-40 pb-20 min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="font-fredoka text-6xl text-center mb-4 text-[#FFCC00]">
            The Wizard's Blog
          </h1>
          <p className="text-center text-xl text-[#E0F0FF] mb-16">
            Stories, restoration tips, new arrivals & collector adventures
          </p>

          <div className="text-center py-32 text-white/60">
            <p className="text-2xl">Blog posts coming soon...</p>
            <p className="mt-6">In the meantime, follow us on Instagram for daily updates!</p>
            <a
              href="https://www.instagram.com/collectorfancanada/"
              target="_blank"
              className="mt-8 inline-block glass px-10 py-4 rounded-2xl text-lg hover:bg-white/20"
            >
              Visit Instagram →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
