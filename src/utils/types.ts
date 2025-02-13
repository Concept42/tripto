import { TButtonVariants } from "@/components/ui/elements/Button";
import { JSX } from "react";
import data from "@/lib/data";
import { locales } from "@/i18n/routing";
import { TranslationValues } from "next-intl";

export type PageParams = { params: Promise<{ locale: Locales }> };
export type Locales = (typeof locales)[number];
export type RouteKey = "home" | "hospitals" | "nemt" | "contact-us";
export type TRenderedOnPage = "homePage" | "nemtPage" | "hospitalsPage" | "contactPage";
export type TMessages = {
  <T extends string>(key: T, values?: TranslationValues): string;
  rich(key: string, values?: TranslationValues): React.ReactNode;
};

export type RouteDefinition = {
  en: string;
} & Partial<Record<Exclude<Locales, "en">, string>>;

export type DuplicateLocales<R extends RouteDefinition> = {
  [L in Exclude<Locales, "en">]: R[L] extends string
    ? R[L] extends ""
      ? never
      : R[L] extends R["en"]
        ? L
        : never
    : never;
}[Exclude<Locales, "en">];

export type ValidatedRoute<R extends RouteDefinition> =
  DuplicateLocales<R> extends never
    ? R
    : {
        ERROR: "Non-English slug must be removed or set to empty if it duplicates the en slug.";
        DUPLICATE: DuplicateLocales<R>;
      };

//HEADER TYPES

export type TNavigationItem = {
  id: number;
  name: string;
  href?: string;
  disabledhref?: boolean;
  dropdown?: TNavigationItemDropdown[];
};

export type TNavigationItemDropdown = {
  id: number;
  icon: React.JSX.Element;
  title: string;
  text?: string;
  href: string;
};

export type TNavButtonGroupItem = {
  id: number;
  title: string;
  href: string;
  variant: TButtonVariants;
};

//FOOTER TYPES

export type TFooterDataTopPartLinksSubLinks = {
  id: number;
  name: string;
  href: string;
};

export type TFooterDataTopPartLinkItem =
  | {
      id: number;
      name: string;
      href: string;
    }
  | {
      id: number;
      icon: JSX.Element;
      href: string;
    }
  | {
      id: number;
      name: string;
      subLinks: TFooterDataTopPartLinksSubLinks[];
    };

export type TFooterDataTopPartLinks = {
  id: number;
  title: string;
  links: TFooterDataTopPartLinkItem[];
};

export type TFooterDataTopPart = {
  links: TFooterDataTopPartLinks[];
};

export type TFooterDataBottomPartIcon = {
  id: number;
  icon: JSX.Element;
  href: string;
};

export type TFooterDataBottomPartLink = {
  id: number;
  name: string;
  href: string;
};

export type TFooterBootomPartData = {
  icons: TFooterDataBottomPartIcon[];
  copyright: string;
  legalLinks: TFooterDataBottomPartLink[];
};

export type GenerateMetaData = {
  params: { locale: string };
};

//PAGE DATA TYPES

export type THeroData = typeof data.homePageData.hero;
export type TAllINOneSoftware = typeof data.homePageData.allInOneSoftware;

export type TImageAndTextSection = {
  title: string;
  content?: string[];
  list?: string[];
  background?: boolean;
  reverse?: boolean;
  renderedOnPage: TRenderedOnPage;
  image: {
    src: string;
    alt: string;
  };
};

export type TLocalStorageKeys = "isFirstFlag" | "locale";
export type TTestimonialsData = typeof data.homePageData.testimonials;
export type TNemtHeroData = typeof data.nemtPageData.hero;
export type TStreamlineData = typeof data.nemtPageData.streamLine;
export type TBenefitsData = typeof data.nemtPageData.benefits;
export type THospitalsPageData = typeof data.hospitalsPageData;
