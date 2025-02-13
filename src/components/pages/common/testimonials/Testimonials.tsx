"use client";
import { TTestimonialsData } from "@/utils/types";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import useHorizontalScroll from "@/hooks/useHorizontalScroll";
import useResize from "@/hooks/useResize";
import { twMerge } from "tailwind-merge";
import dynamic from "next/dynamic";
import useClientHydration from "@/hooks/useClientHydration";
import { useResizeObserver } from "@/hooks/useResizeObzerver";

const Testimonial = dynamic(() => import("./Testimonial"), { ssr: false });

type Props = {
  data: TTestimonialsData;
};

const Testimonials = ({ data }: Props) => {
  const methods = useHorizontalScroll<HTMLDivElement>();
  const isMounted = useClientHydration();
  const t = useTranslations("homePage");
  const { initialValue } = useResize(
    () => setIsCarousel(true),
    1024,
    () => setIsCarousel(false)
  );
  useResizeObserver(methods.ref, () => {
    if (!methods.ref.current) return;
    const containerWidth = methods.ref.current.scrollWidth;
    const windowWidth = window.innerWidth;
    setIsCenter(windowWidth >= containerWidth);
  });

  const [isCarousel, setIsCarousel] = useState(!initialValue);
  const [isCenter, setIsCenter] = useState<boolean | null>(null);

  if (!isMounted || !methods.ref.current) {
    return (
      <div className="hidescrollbar flex cursor-grab gap-4 overflow-x-scroll px-4 active:cursor-grabbing" {...methods}>
        {data.cards.map((card) => (
          <Testimonial key={card.id} renderedOnPage={data.renderedOnPage} data={card} />
        ))}
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-6 py-14 xl:gap-10 xl:py-32">
      <h2 className="px-4 text-center font-bold">{t(data.title)}</h2>
      {isCarousel ? (
        <div
          className={twMerge(
            "hidescrollbar flex cursor-grab justify-start gap-4 overflow-x-scroll active:cursor-grabbing",
            isCenter ? "justify-center" : "justify-start"
          )}
          {...methods}
        >
          {data.cards.map((card) => (
            <Testimonial isCarousel={isCarousel} key={card.id} renderedOnPage={data.renderedOnPage} data={card} />
          ))}
        </div>
      ) : (
        <div
          className="hidescrollbar flex cursor-grab gap-4 overflow-x-scroll px-4 active:cursor-grabbing"
          {...methods}
        >
          {data.cards.map((card) => (
            <Testimonial key={card.id} renderedOnPage={data.renderedOnPage} data={card} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Testimonials;
