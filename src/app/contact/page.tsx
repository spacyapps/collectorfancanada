import Navbar from '@/components/Navbar';
import SparkleBackground from '@/components/SparkleBackground';
import { GlassButton } from '@/components/GlassButton';

export default function ContactPage() {
  return (
    <>
      <SparkleBackground />
      <Navbar />

      <div className="pt-40 pb-20 min-h-screen">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h1 className="font-fredoka text-6xl mb-8 text-[#FFCC00]">
            Let's Talk Magic
          </h1>

          <div className="glass rounded-3xl p-12">
            <p className="text-xl mb-10 text-white/90">
              Have a question about a collectible, shipping, or just want to say hello?
            </p>

            <div className="space-y-6 text-left max-w-md mx-auto">
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:collectorfan.canada@gmail.com" className="text-[#FFCC00] hover:underline">
                  collectorfan.canada@gmail.com
                </a>
              </div>

              <div>
                <p className="font-medium">Instagram</p>
                <a href="https://www.instagram.com/collectorfancanada/" target="_blank" className="text-[#FFCC00] hover:underline">
                  @CollectorFanCanada
                </a>
              </div>

              <div>
                <p className="font-medium">eBay</p>
                <a href="https://ebay.ca/usr/CollectorFanCanada" target="_blank" className="text-[#FFCC00] hover:underline">
                  CollectorFanCanada on eBay
                </a>
              </div>
            </div>

            <GlassButton primary href="mailto:collectorfan.canada@gmail.com" className="mt-12 w-full">
              Send us a Message
            </GlassButton>
          </div>
        </div>
      </div>
    </>
  );
}
