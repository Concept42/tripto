import { THospitalsPageData } from "@/utils/types";
import { useTranslations } from "next-intl";
import React from "react";
import LastSectionBackground from "./LastSectionBackground";

type Props = {
  data: THospitalsPageData["lastSection"];
};

const LastSection = ({ data }: Props) => {
  const t = useTranslations("hospitalsPage");
  return (
    <section className="relative z-10 overflow-hidden bg-primary-icyBlue px-4 py-14 xl:py-32">
      <div className="flex flex-col items-center gap-10">
        <h2 className="">{t(data.title)}</h2>
        <div className="flex w-full max-w-[1056px] flex-wrap justify-center gap-8 xl:justify-between">
          <div className="flex w-full max-w-[462px] flex-col gap-4">
            <img src={data.leftPart.image.src} alt={data.leftPart.image.alt} />
            <h4>{t(data.leftPart.title)}</h4>
            <p className="text-neutrals-grey80">{t(data.leftPart.text)}</p>
          </div>
          <div className="flex w-full max-w-[462px] flex-col gap-4">
            <img src={data.rightPart.image.src} alt={data.rightPart.image.alt} />
            <h4>{t(data.rightPart.title)}</h4>
            <p className="text-neutrals-grey80">{t(data.rightPart.text)}</p>
          </div>
        </div>
      </div>
      <LastSectionBackground />
    </section>
  );
};

export default LastSection;
