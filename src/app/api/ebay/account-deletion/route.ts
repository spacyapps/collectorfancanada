import { createHash } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

// eBay ownership verification: GET ?challenge_code=xxx
export async function GET(req: NextRequest) {
  const challengeCode = req.nextUrl.searchParams.get('challenge_code');
  if (!challengeCode) {
    return NextResponse.json({ error: 'missing challenge_code' }, { status: 400 });
  }

  const verificationToken = process.env.EBAY_VERIFICATION_TOKEN;
  const endpoint = process.env.EBAY_DELETION_ENDPOINT;

  if (!verificationToken || !endpoint) {
    return NextResponse.json({ error: 'server misconfigured' }, { status: 500 });
  }

  // eBay-specified hash: SHA-256(challengeCode + verificationToken + endpoint)
  const hash = createHash('sha256')
    .update(challengeCode + verificationToken + endpoint)
    .digest('hex');

  return NextResponse.json({ challengeResponse: hash });
}

// Deletion notification: POST — acknowledge receipt, no user data stored here
export async function POST() {
  return new NextResponse(null, { status: 200 });
}
