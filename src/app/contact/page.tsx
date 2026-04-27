import Navbar from '@/components/Navbar';
import SparkleBackground from '@/components/SparkleBackground';
import { GlassButton } from '@/components/GlassButton';
import { Logo } from '@/components/Logo';

export default function ContactPage() {
  return (
    <>
      <SparkleBackground />
      <Navbar />

      <div className="pt-36 pb-20 min-h-screen">
        <div className="max-w-2xl mx-auto px-6 text-center">

          <div className="flex justify-center mb-8">
            <Logo size="large" />
          </div>

          <h1 className="font-fredoka text-2xl md:text-3xl mb-6 text-[#FFCC00]">
            Let's Talk Magic
          </h1>

          <div className="glass rounded-3xl p-6 md:p-10">
            <p className="text-sm mb-8 text-white/90">
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

            <GlassButton primary href="mailto:collectorfan.canada@gmail.com" className="mt-8 w-full text-sm py-3">
              Send us a Message
            </GlassButton>
          </div>
        </div>
      </div>
    </>
  );
}
