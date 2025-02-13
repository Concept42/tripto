import { Button } from "@/components/ui/elements/Button";
import { THeroData } from "@/utils/types";
import { useTranslations } from "next-intl";
import React from "react";
import LogoCarosel from "./LogoCarosel";
import Link from "@/i18n/Link";

type Props = {
  data: THeroData;
};

const AlternateHero = ({ data }: Props) => {
  const t = useTranslations("homePage");

  return (
    <section className="mb-10 flex flex-col items-center xl:mb-32 xl:mt-24">
      <div className="pageContainer grid overflow-visible xl:grid-cols-2">
        <div className="my-20 flex flex-col items-center gap-6 px-4 text-center xl:my-32 xl:items-start xl:text-start">
          <h1>{t(data.title)}</h1>
          <h5 className="text-neutrals-grey60">{t(data.hero_text)}</h5>
          <Button icon="chevron-white" className="mt-4">
            <Link className="flex" href={data.cta.href}>
              {t(data.cta.title)}
            </Link>
          </Button>
        </div>
        <div className="relative flex h-full w-full items-center justify-center">
          <img
            src={data.image.src}
            alt={data.image.alt}
            className="left-0 top-1/2 transform md:w-2/3 xl:absolute xl:w-[1100px] xl:max-w-[1100px] xl:-translate-y-1/2"
          />
        </div>
      </div>
      <div className="mt-20">
        <LogoCarosel data={data.caroselSection} />
      </div>
    </section>
  );
};

export default AlternateHero;
