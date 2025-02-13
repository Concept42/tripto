import { THospitalsPageData } from "@/utils/types";
import { useTranslations } from "next-intl";
import React from "react";
import HospitalsBackground from "./HospitalsBackground";

type Props = {
  data: THospitalsPageData["hero"];
};

const Hero = ({ data }: Props) => {
  const t = useTranslations("hospitalsPage");
  return (
    <section className="relative z-10 mb-14 flex flex-col items-center overflow-hidden md:mb-32">
      <HospitalsBackground position="left" className="absolute left-[-42%] sm:left-[-17%] lg:left-[-10%] xl:left-0" />
      <div className="mb-10 mt-20 flex max-w-[840px] flex-col items-center gap-6 px-4 text-center md:px-0 xl:mb-[84px] xl:mt-32">
        <h1>{t(data.title)}</h1>
        <h5 className="text-neutrals-grey60">{t(data.hero_text)}</h5>
      </div>
      <div className="mx-4 flex items-center justify-center rounded-2xl bg-primary-icyBlue p-4 md:p-8">
        <img src={data.image.src} alt={data.image.alt} className="hidden md:block" />
        <img src={data.image.mobileSrc} alt={data.image.alt} className="md:hidden" />
      </div>
      <HospitalsBackground
        position="right"
        className="absolute right-[-42%] sm:right-[-17%] lg:right-[-10%] xl:right-0"
      />
    </section>
  );
};

export default Hero;
