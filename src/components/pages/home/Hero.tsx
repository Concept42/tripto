import { Button } from "@/components/ui/elements/Button";
import { THeroData } from "@/utils/types";
import { useTranslations } from "next-intl";
import React from "react";
import LogoCarosel from "./LogoCarosel";
import Link from "@/i18n/Link";

type Props = {
  data: THeroData;
};

const Hero = ({ data }: Props) => {
  const t = useTranslations("homePage");
  return (
    <section className="mb-10 flex flex-col items-center xl:mb-32 xl:mt-24">
      <div className="my-20 flex max-w-[840px] flex-col items-center gap-6 px-4 text-center xl:my-32">
        <h1>{t(data.title)}</h1>
        <h5 className="text-neutrals-grey60">{t(data.hero_text)}</h5>
        <Button icon="chevron-white" className="mt-4">
          <Link className="flex" href={data.cta.href}>
            {t(data.cta.title)}
          </Link>
        </Button>
      </div>
      <LogoCarosel data={data.caroselSection} />
    </section>
  );
};

export default Hero;
