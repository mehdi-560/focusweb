import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set("x-focus-language", /^\/ja(?:\/|$)/.test(request.nextUrl.pathname) ? "ja" : "en");
  return NextResponse.next({ request: { headers } });
}

export const config = { matcher: ["/((?!api|_next|images|samples|favicon).*)"] };
