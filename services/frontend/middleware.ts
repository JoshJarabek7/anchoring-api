import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This simplified middleware can be expanded to use WorkOS later
export default function middleware(_: NextRequest) {
  // For now, allow all requests with no authentication
  return NextResponse.next();
}

// Match against paths that require auth
export const config = { 
  matcher: [
    '/',
    '/features', 
    '/pricing', 
    '/docs',
    '/dashboard/:path*', 
    '/account/:path*',
    '/callback',
    '/api/:path*'
  ] 
};