import { NextResponse, type NextRequest } from "next/server";

// Define allowed origin for production and set a wildcard for development
const allowedOrigin =
  process.env.NODE_ENV === "development"
    ? "*"
    : "https://dashboard-theta-gilt.vercel.app";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Set CORS headers
  res.headers.set("Access-Control-Allow-Origin", allowedOrigin);
  res.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  // Handle preflight requests for CORS
  if (req.method === "OPTIONS") {
    return new NextResponse(null, { status: 204, headers: res.headers });
  }

  return res;
}

export const config = {
  matcher: ["/api/:path*"],
};
