import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionCookie = request.cookies.get("session")?.value;

  // 1. Static assets, Next internals, questions diagrams & APIs should never be blocked
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/questions") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // 2. Protect strictly administrative and onboarding routes if unauthenticated
  if (!sessionCookie && (pathname.startsWith("/admin") || pathname.startsWith("/onboarding"))) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // 3. If authenticated user visits /login, redirect to /dashboard
  if (sessionCookie && pathname === "/login") {
    const dashUrl = new URL("/dashboard", request.url);
    return NextResponse.redirect(dashUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
