import Navbar from '@/components/Navbar';
import SparkleBackground from '@/components/SparkleBackground';
import { fetchEbayListings, type Listing } from '@/lib/ebay';

export default async function EbayShopPage() {
  const { listings, total, error } = await fetchEbayListings();

  return (
    <>
      <SparkleBackground />
      <Navbar />

      <main className="min-h-screen pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-fredoka font-bold text-2xl md:text-3xl text-[#FFCC00] mb-3 tracking-tight">
              eBay Shop
            </h1>
            <p className="text-[#E0F0FF] text-sm opacity-70">
              {error ? 'Could not load listings' : `${total} item${total !== 1 ? 's' : ''} available`}
            </p>
            <a
              href="https://ebay.ca/usr/CollectorFanCanada"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-xs uppercase tracking-widest text-[#FFCC00]/70 hover:text-[#FFCC00] transition-colors"
            >
              View full store on eBay →
            </a>
          </div>

          {/* Error state */}
          {error && (
            <div className="glass rounded-2xl p-8 text-center max-w-lg mx-auto">
              <p className="text-white/70 mb-2">Unable to load listings right now.</p>
              <p className="text-white/40 text-sm">{error}</p>
            </div>
          )}

          {/* Empty state */}
          {!error && listings.length === 0 && (
            <div className="glass rounded-2xl p-8 text-center max-w-lg mx-auto">
              <p className="text-white/70">No active listings found.</p>
            </div>
          )}

          {/* Listings grid */}
          {listings.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {listings.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 group flex flex-col"
                >
                  {/* Image */}
                  <div className="aspect-square bg-white/5 overflow-hidden">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/20 text-4xl">
                        📦
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-3 flex flex-col gap-1 flex-1">
                    <p className="text-white text-xs leading-snug line-clamp-2 font-medium">
                      {item.title}
                    </p>
                    <div className="mt-auto pt-2 flex items-center justify-between">
                      {item.price && (
                        <span className="text-[#FFCC00] font-bold text-sm">
                          {item.price.currency === 'CAD' ? 'CA$' : '$'}{item.price.value}
                        </span>
                      )}
                      {item.condition && (
                        <span className="text-white/40 text-xs">{item.condition}</span>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}

        </div>
      </main>

      <footer className="py-12 text-center text-sm opacity-70 border-t border-white/10">
        © {new Date().getFullYear()} CollectorFanCanada • Shipping from Canada to the World
      </footer>
    </>
  );
}
