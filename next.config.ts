import { routeMap } from "@/lib/routeMap";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  async rewrites() {
    const rewrites = [];
    for (const [, translations] of Object.entries(routeMap)) {
      const base = translations.en;
      for (const [locale, localizedSlug] of Object.entries(translations)) {
        if (locale === "en") continue;
        if (!localizedSlug || localizedSlug === "") continue;
        if (localizedSlug === base) continue;
        rewrites.push({
          source: `/${locale}/${localizedSlug}`,
          destination: `/${locale}/${base}`
        });
      }
    }
    return rewrites;
  }
};

export default withNextIntl(nextConfig);
