import { locales } from "@/i18n/routing";
import tailwindConfig from "../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";
import { Locales, RouteKey, TLocalStorageKeys, TMessages, TRenderedOnPage } from "./types";
import { routeMap } from "@/lib/routeMap";
import { NextRequest, NextResponse } from "next/server";

export const isClient = typeof window !== "undefined";

export const colorVars = resolveConfig(tailwindConfig).theme.colors;

export function getBrowserLanguage() {
  if (isClient) {
    return navigator.language as Locales;
  }
}

export const saveToLocalStorage = (key: TLocalStorageKeys, value: string) => {
  if (!isClient) return;
  localStorage.setItem(key, value);
};
export const getFromLocalStorage = (key: TLocalStorageKeys) => {
  if (!isClient) return;
  return localStorage.getItem(key);
};
/**
 * Function that splits a string into two parts, the bold part and the rest of the string.
 *
 * @param  text - Pass a translated string to split bold text.
 * @returns Desctructure the return object into isBold, boldPart and rest.
 */
export const splitBoldText = (text: string) => {
  const isBold = text.includes(":");
  const boldPart = isBold ? text.split(":")[0] + ":" : "";
  const rest = isBold ? text.split(":")[1] : "";
  const formatedText = isBold ? boldPart + rest : text;

  return { isBold, boldPart, rest, formatedText };
};

/**
 * Function that reutrns the metadata for the current page.
 *
 * @param  messages - Pass the correct dictionary function for the current locale.
 * @param page - Pass the TRenderedOnPage enum for the current page (it gets its data from the translated json dictiorary).
 * @param routeKey - Pass the routeKey for the current page (defined in the lib/routeMap.ts file).
 * @param locale - Pass the current locale.
 * @returns Returns an object with the title, description, keywords and alternate head link tag for the current page.
 */
export const generateLocalisedMetadata = (t: TMessages, page: TRenderedOnPage, routeKey: RouteKey, locale: Locales) => {
  const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;
  const alternates = {
    canonical: `${DOMAIN}/${locale}/${getEffectiveSlug(routeKey, locale)}`,
    languages: Object.fromEntries(locales.map((loc) => [loc, `${DOMAIN}/${loc}/${getEffectiveSlug(routeKey, loc)}`]))
  };
  return {
    title: t(`${page}.meta.title`),
    description: t(`${page}.meta.description`),
    keywords: t(`${page}.meta.keywords`),
    alternates
  };
};

export const slugToRoute: Record<Locales, Record<string, { routeKey: RouteKey }>> = {
  en: {},
  "nl-BE": {},
  "fr-BE": {},
  "en-BE": {},
  "de-DE": {},
  "en-DE": {},
  "en-GB": {}
};

export function getEffectiveSlug(routeKey: keyof typeof routeMap, locale: string): string {
  const route = routeMap[routeKey];
  const localeSlug = route[locale as keyof typeof route] as string | undefined;
  return localeSlug || route.en;
}

for (const routeKey in routeMap) {
  const rk = routeKey as RouteKey;
  for (const locale of locales) {
    const effectiveSlug = getEffectiveSlug(rk, locale);
    slugToRoute[locale][effectiveSlug] = { routeKey: rk };
  }
}

export function redirectForLanguageSwitch(req: NextRequest) {
  const { pathname, origin, searchParams } = req.nextUrl;
  const segments = pathname.replace(/^\/+/, "").split("/");

  if (segments.length < 2) {
    return null;
  }

  const [currentLocale, currentSlug, ...rest] = segments;

  let routeKey: RouteKey | undefined;
  if (slugToRoute[currentLocale as Locales] && currentSlug in slugToRoute[currentLocale as Locales]) {
    routeKey = slugToRoute[currentLocale as Locales][currentSlug].routeKey;
  } else {
    for (const locale of locales) {
      if (slugToRoute[locale] && currentSlug in slugToRoute[locale]) {
        routeKey = slugToRoute[locale][currentSlug].routeKey;
        break;
      }
    }
  }

  if (!routeKey) {
    return null;
  }

  const effectiveSlug = getEffectiveSlug(routeKey, currentLocale);

  if (effectiveSlug === currentSlug) {
    return null;
  }

  const newPath = `/${currentLocale}/${effectiveSlug}${rest.length > 0 ? "/" + rest.join("/") : ""}`;

  if (newPath === pathname) {
    return null;
  }

  const newUrl = new URL(newPath, origin);
  newUrl.search = searchParams.toString();
  return NextResponse.redirect(newUrl);
}

export function checkSlugMismatch(req: NextRequest) {
  const { pathname, origin, searchParams } = req.nextUrl;
  const segments = pathname.replace(/^\/+/, "").split("/");

  if (segments.length < 2) {
    return null;
  }

  const [localeSegment, slugSegment, ...rest] = segments;
  if (!locales.includes(localeSegment as Locales)) {
    return null;
  }
  const currentLocale = localeSegment as Locales;

  if (slugSegment === undefined || slugSegment === "") {
    return null;
  }

  if (!(slugSegment in slugToRoute[currentLocale])) {
    return null;
  }
  const { routeKey } = slugToRoute[currentLocale][slugSegment];
  const correctSlug = getEffectiveSlug(routeKey, currentLocale);

  if (slugSegment !== correctSlug) {
    const newUrl = new URL(`/${currentLocale}/${correctSlug}/${rest.join("/")}`, origin);
    newUrl.search = searchParams.toString();
    return NextResponse.redirect(newUrl);
  }
  return null;
}
