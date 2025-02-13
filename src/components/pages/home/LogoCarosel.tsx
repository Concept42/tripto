"use client";
import useResize from "@/hooks/useResize";
import { Link } from "@/i18n/routing";
import { THeroData } from "@/utils/types";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import useClientHydration from "@/hooks/useClientHydration";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false
});

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};

type Props = {
  data: THeroData["caroselSection"];
};

const LogoCarousel = ({ data }: Props) => {
  const { initialValue } = useResize(
    () => setIsCarousel(false),
    1691,
    () => setIsCarousel(true)
  );

  const [isCarousel, setIsCarousel] = useState(initialValue);
  const t = useTranslations("homePage");

  const isMounted = useClientHydration();

  if (!isMounted)
    return (
      <div className="flex flex-col items-center gap-8 overflow-hidden xl:gap-12">
        <h5 className="px-4 text-center text-neutrals-grey60">{t(data.title)}</h5>

        <div className="flex items-center justify-center gap-20">
          {data.images.map((image, index) => (
            <Link target="_blank" rel="noopener noreferrer" href={image.href} key={index}>
              <img key={index} src={image.src} alt={image.alt} />
            </Link>
          ))}
        </div>
      </div>
    );

  return (
    <div className="flex flex-col items-center gap-8 overflow-hidden xl:gap-12">
      <h5 className="px-4 text-center text-neutrals-grey60">{t(data.title)}</h5>
      {isCarousel ? (
        <div className="slider-container w-screen">
          <Slider {...settings} className="pl-8 md:pl-0">
            {data.images.map((image, index) => (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={image.href}
                key={index}
                className="w-[134px] xl:max-w-[215px]"
              >
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="max-w-[134px] grayscale transition-all duration-500 hover:grayscale-0"
                />
              </Link>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-20">
          {data.images.map((image, index) => (
            <Link target="_blank" rel="noopener noreferrer" href={image.href} key={index} className="max-w-[216px]">
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="grayscale transition-all duration-500 hover:grayscale-0"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LogoCarousel;
