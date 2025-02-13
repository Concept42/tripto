import TransparentCheckMark from "@/components/Icons/TransparentCheckMark";
import { TBenefitsData } from "@/utils/types";
import { useTranslations } from "next-intl";
import React from "react";
import BenefitsBackground from "./BenefitsBackground";

type Props = {
  data: TBenefitsData;
};

const Benefits = ({ data }: Props) => {
  const t = useTranslations("nemtPage");
  return (
    <section className="relative w-full overflow-hidden bg-primary-oceanBlue py-14 xl:py-32">
      <div className="pageContainer flex flex-col items-center gap-11">
        <h2 className="text-center text-neutrals-white xl:leading-[56px]">{t(data.title)}</h2>
        <div className="grid gap-11 md:grid-cols-2 md:place-items-center md:gap-4">
          <ul className="z-20 order-2 flex flex-col gap-6 md:order-1">
            {data.list.map((listItem, index) => (
              <li className="flex items-center gap-4" key={index}>
                <TransparentCheckMark />
                <h6 className="font-normal text-neutrals-white xl:font-bold">{t(listItem)}</h6>
              </li>
            ))}
          </ul>
          <img src={data.image.src} alt={data.image.alt} className="z-20 order-1" />
        </div>
      </div>
      <BenefitsBackground />
    </section>
  );
};

export default Benefits;
