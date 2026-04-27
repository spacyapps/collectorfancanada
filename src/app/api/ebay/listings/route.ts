import { NextResponse } from 'next/server';
import { fetchEbayListings } from '@/lib/ebay';

export async function GET() {
  const result = await fetchEbayListings();
  if (result.error) {
    return NextResponse.json(result, { status: 500 });
  }
  return NextResponse.json(result);
}
