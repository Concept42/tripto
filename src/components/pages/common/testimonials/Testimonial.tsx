import Polygon from "@/components/ui/Polygon";
import PolygonMask from "@/components/ui/PolygonMask";
import PolygonMaskMobile from "@/components/ui/PolygonMaskMobile";
import { TTestimonialsData } from "@/utils/types";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {
  data: TTestimonialsData["cards"][number];
  renderedOnPage: TTestimonialsData["renderedOnPage"];
  isCarousel?: boolean;
};

const Testimonial = ({ data, renderedOnPage, isCarousel }: Props) => {
  const t = useTranslations(renderedOnPage);
  if (isCarousel)
    return (
      <div className="relative flex max-h-[440px] min-w-[732px] overflow-hidden bg-primary-skyBlue">
        <div className="max-w-[338px]">
          <PolygonMask
            imageSrc={data.image.src}
            xOffset={110}
            yOffset={80}
            className="translate-x-[-40%] translate-y-[-15%]"
          />
        </div>
        <div className="flex w-[394px] gap-1 px-14 py-10">
          <span className="text-xl leading-8 tracking-[0.015rem]">“</span>
          <div className="flex flex-col gap-6">
            <p>{t(data.text)}</p>
            <div className="flex flex-col gap-2">
              <span className="text-subtitle2">{t(data.companyName)}</span>
              <span className="text-subtitle2 font-normal">{t(data.personName)}</span>
            </div>
          </div>
        </div>
        <Polygon className="absolute bottom-0 right-0 translate-x-[70%] translate-y-[70%]" />
      </div>
    );
  return (
    <div className={"relative flex min-w-[84dvw] flex-col overflow-hidden bg-primary-skyBlue pb-10"}>
      <PolygonMaskMobile className="pl-6" imageSrc={data.image.src} />
      <div className="flex gap-1 pl-[29px] pr-10">
        <span className="text-xl leading-8 tracking-[0.015rem]">“</span>
        <div className="flex flex-col gap-6">
          <p>{t(data.text)}</p>
          <div className="flex flex-col gap-2">
            <span className="text-subtitle2">{t(data.companyName)}</span>
            <span className="text-subtitle2 font-normal">{t(data.personName)}</span>
          </div>
        </div>
      </div>
      <Polygon className="absolute bottom-0 right-0 translate-x-[70%] translate-y-[70%]" />
    </div>
  );
};

export default Testimonial;
