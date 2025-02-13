import React from "react";
import { footerBannerData } from "@/lib/data";
import { useTranslations } from "next-intl";
import FooterBannerPolygonGroup from "@/components/Icons/FooterBannerPolygonGroup";

import { Button } from "@/components/ui/elements/Button";
import Link from "@/i18n/Link";

const FooterBanner = () => {
  const t = useTranslations("common");

  return (
    <div className="pageContainer flex w-full justify-center">
      <div className="relative -mb-[90px] flex min-w-full flex-col gap-6 overflow-hidden bg-primary-oceanBlue px-8 py-6 sm:-mb-[74px] lg:min-w-[890px] xl:-mb-[94px] xl:px-6 xl:py-8">
        <h3 className="text-neutrals-white xl:leading-[56px]">{t(footerBannerData.title)}</h3>
        <Link href={footerBannerData.cta.href}>
          <Button icon="chevron-black" variant="white">
            {t(footerBannerData.cta.title)}
          </Button>
        </Link>
        <FooterBannerPolygonGroup className="absolute right-[-100] top-[60%] translate-y-[-60%] sm:right-[-50] sm:top-1/2 xl:right-0 xl:translate-y-[-50%]" />
      </div>
    </div>
  );
};

export default FooterBanner;
