import { NextResponse } from 'next/server';

const EBAY_SELLER_ID = 'CollectorFanCanada';
const EBAY_TOKEN_URL = 'https://api.ebay.com/identity/v1/oauth2/token';
const EBAY_SEARCH_URL = 'https://api.ebay.com/buy/browse/v1/item_summary/search';
const EBAY_SCOPE = 'https://api.ebay.com/oauth/api_scope';

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
    next: { revalidate: 6000 }, // tokens are valid for ~2hrs, cache for ~100min
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`eBay token error ${res.status}: ${text}`);
  }

  const data = await res.json();
  return data.access_token as string;
}

export async function GET() {
  try {
    const token = await getEbayToken();

    const url = new URL(EBAY_SEARCH_URL);
    url.searchParams.set('q', '*');
    url.searchParams.set('filter', `sellers:{${EBAY_SELLER_ID}}`);
    url.searchParams.set('limit', '50');
    url.searchParams.set('sort', '-date');

    const res = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-EBAY-C-MARKETPLACE-ID': 'EBAY_CA',
      },
      next: { revalidate: 300 }, // cache listings for 5 minutes
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`eBay search error ${res.status}: ${text}`);
    }

    const data = await res.json();

    const listings = (data.itemSummaries ?? []).map((item: Record<string, unknown>) => ({
      id: item.itemId,
      title: item.title,
      price: (item.price as { value: string; currency: string } | undefined),
      image: (item.thumbnailImages as { imageUrl: string }[] | undefined)?.[0]?.imageUrl
        ?? (item.image as { imageUrl: string } | undefined)?.imageUrl,
      condition: item.condition,
      url: item.itemWebUrl,
    }));

    return NextResponse.json({ listings, total: data.total ?? listings.length });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
