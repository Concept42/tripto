import { TNemtHeroData } from "@/utils/types";
import { useTranslations } from "next-intl";
import React from "react";
import TopPartIcons from "./TopPartIcons";
import BottomPartIcons from "./BottomPartIcons";
import HeroBackground from "./HeroBackground";

type Props = {
  data: TNemtHeroData;
};

const Hero = ({ data }: Props) => {
  const t = useTranslations("nemtPage");
  return (
    <section className="z-10 flex flex-col items-center">
      <div className="mb-10 mt-20 flex max-w-[840px] flex-col items-center gap-6 px-4 text-center md:px-0 xl:mb-[84px] xl:mt-32">
        <h1>{t(data.title)}</h1>
        <h5 className="text-neutrals-grey60">{t(data.hero_text)}</h5>
      </div>
      <TopPartIcons data={data.topIconCards} />
      <BottomPartIcons data={data.bottomIconCards} />
      <HeroBackground />
    </section>
  );
};

export default Hero;
