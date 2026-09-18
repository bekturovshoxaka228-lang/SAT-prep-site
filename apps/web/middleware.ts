import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_PATHS = ["/login", "/api/v1/auth/login", "/api/v1/auth/register", "/api/v1/sat/official-dates", "/health"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionCookie = request.cookies.get("session")?.value;

  const isPublicPath = PUBLIC_PATHS.some((path) => pathname === path || pathname.startsWith("/api/"));

  // 1. If not authenticated and trying to access protected page -> redirect to /login
  if (!sessionCookie && !isPublicPath) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // 2. If authenticated and accessing /login -> redirect to /dashboard
  if (sessionCookie && pathname === "/login") {
    const dashUrl = new URL("/dashboard", request.url);
    return NextResponse.redirect(dashUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
