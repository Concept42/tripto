import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import { redirectForLanguageSwitch } from "./utils/utils";

const nextIntlMiddleware = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/fonts") ||
    pathname === "/favicon.png"
  ) {
    return NextResponse.next();
  }

  const mismatchResponse = redirectForLanguageSwitch(req);
  if (mismatchResponse) {
    return mismatchResponse;
  }

  return nextIntlMiddleware(req);
}

export const config = {
  matcher: "/((?!_next|images|fonts|favicon.ico).*)"
};
