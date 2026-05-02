const EBAY_SELLER_ID = 'collectorfancanada';
const EBAY_TOKEN_URL = 'https://api.ebay.com/identity/v1/oauth2/token';
const EBAY_SEARCH_URL = 'https://api.ebay.com/buy/browse/v1/item_summary/search';
const EBAY_SCOPE = 'https://api.ebay.com/oauth/api_scope';

export interface Listing {
  id: string;
  title: string;
  price?: { value: string; currency: string };
  image?: string;
  condition?: string;
  url: string;
}

async function getEbayToken(): Promise<string> {
  const clientId = process.env.EBAY_CLIENT_ID;
  const clientSecret = process.env.EBAY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('EBAY_CLIENT_ID and EBAY_CLIENT_SECRET env vars are required');
  }

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const res = await fetch(EBAY_TOKEN_URL, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=client_credentials&scope=${encodeURIComponent(EBAY_SCOPE)}`,
    next: { revalidate: 6000 },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`eBay token error ${res.status}: ${text}`);
  }

  const data = await res.json();
  return data.access_token as string;
}

const SEARCH_TERMS = ['the', 'figure', 'lot', 'comic', 'set', 'card', 'new', 'vintage'];
const DISPLAY_LIMIT = 20;

async function searchEbay(token: string, q: string): Promise<Record<string, unknown>[]> {
  const url = new URL(EBAY_SEARCH_URL);
  url.searchParams.set('q', q);
  url.searchParams.set('filter', `sellers:{${EBAY_SELLER_ID}}`);
  url.searchParams.set('limit', '50');
  url.searchParams.set('sort', '-date');

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${token}`,
      'X-EBAY-C-MARKETPLACE-ID': 'EBAY_US',
    },
    next: { revalidate: 300 },
  });

  if (!res.ok) return [];
  const data = await res.json();
  return data.itemSummaries ?? [];
}

export async function fetchEbayListings(): Promise<{ listings: Listing[]; total: number; error?: string }> {
  try {
    const token = await getEbayToken();

    const results = await Promise.all(SEARCH_TERMS.map((q) => searchEbay(token, q)));

    const seen = new Set<string>();
    const merged: Listing[] = [];

    for (const items of results) {
      for (const item of items) {
        const id = item.itemId as string;
        if (seen.has(id)) continue;
        seen.add(id);
        merged.push({
          id,
          title: item.title as string,
          price: item.price as { value: string; currency: string } | undefined,
          image: (item.thumbnailImages as { imageUrl: string }[] | undefined)?.[0]?.imageUrl
            ?? (item.image as { imageUrl: string } | undefined)?.imageUrl,
          condition: item.condition as string | undefined,
          url: item.itemWebUrl as string,
        });
      }
    }

    const listings = merged.slice(0, DISPLAY_LIMIT);
    return { listings, total: seen.size };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return { listings: [], total: 0, error: message };
  }
}
