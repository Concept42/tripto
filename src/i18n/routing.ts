import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const locales = ["en", "nl-BE", "fr-BE", "en-BE", "de-DE", "en-DE", "en-GB"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always"
});
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
