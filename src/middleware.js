import { NextResponse } from "next/server";

const user = false;

export function middleware(request) {
  if (!user) return NextResponse.rewrite(new URL("/login", request.url));
}

export const config = {
  matcher: "/dashboard",
};
