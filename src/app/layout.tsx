import "@/app/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RootLayoutWrapper from "@/components/layout/RootLayoutWrapper";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Locales } from "@/utils/types";
import { ReactNode } from "react";
import { routing } from "@/i18n/routing";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locales }>;
};

// This function is used to generate all the pages and their translations on build time.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

//NOTE: This is the default metadata for all the pages that have no metadata defined.
export async function generateMetadata({ params }: Omit<Props, "children">) {
  const layoutLocale = await params;
  const t = await getTranslations({ locale: layoutLocale.locale, namespace: "localeLayout" });
  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
      apple: "/apple-touch-icon.png"
    }
  };
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locales }>;
}>) {
  const messages = await getMessages();
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <RootLayoutWrapper>{children}</RootLayoutWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
