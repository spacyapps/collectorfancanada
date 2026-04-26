'use client';

import { useEffect } from 'react';

export default function InstagramTeaser() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
      import App from "https://cdn.fouita.com/public/instagram-feed.js?11";
      new App({
        target: document.getElementById("ft-insta-app"),
        props: {
          "settings": {
            "layout": "grid",
            "source": "insta",
            "selected": "uname",
            "header": true,
            "autoplay": true,
            "zigzag": false,
            "cols": 5,
            "cardHeight": 280,
            "gap": 1,
            "direction": "down",
            "height": 680,
            "bgColor": "rgb(0 0 0)",
            "txtColor": "rgb(255 255 255)",
            "ukey": "ecd10d18-c711-44c8-82e1-ddd2fefc610c"
          }
        }
      });
    `;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-fredoka text-4xl md:text-5xl text-[#FFCC00] mb-3 tracking-tight">
            Latest from the Wizard's Workshop
          </h2>
          <p className="text-[#E0F0FF] text-lg">
            Fresh collectibles, unboxings & daily magic from Instagram
          </p>
        </div>

        <div className="fouita-instagram-container rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <div id="ft-insta-app"></div>
          <div id="ft-insta-brd">
            <a href="https://fouita.com/website-widgets/instagram-feed" target="_blank" rel="noopener noreferrer">Embed Instagram Feed</a>
            <a href="https://fouita.com" target="_blank" rel="noopener noreferrer">with Fouita</a>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/collectorfancanada/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 glass px-10 py-4 rounded-2xl hover:bg-white/20 text-lg transition-all"
          >
            Follow @CollectorFanCanada on Instagram ✨
          </a>
        </div>
      </div>
    </section>
  );
}
