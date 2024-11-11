import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  res.headers.append(
    "Access-Control-Allow-Origin",
    "https://dashboard-theta-gilt.vercel.app"
  );

  return res;
}

export const constructor = {
  matcher: ["/api/:path*"],
};
