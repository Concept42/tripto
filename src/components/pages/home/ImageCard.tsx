"use client";
import { Button, TButtonIcon } from "@/components/ui/elements/Button";
import { Link, useRouter } from "@/i18n/routing";
import { TAllINOneSoftware } from "@/utils/types";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {
  data: TAllINOneSoftware["cards"][0];
};

const ImageCard = ({ data }: Props) => {
  const t = useTranslations("homePage");
  const router = useRouter();

  const handleMainClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(data.href);
  };

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.stopPropagation();
    const target = (e.currentTarget as HTMLAnchorElement).getAttribute("target");
    if (target === "_blank") {
      return;
    }
    e.preventDefault();
    router.push({ pathname: href });
  };

  return (
    <div
      onClick={handleMainClick}
      className="group relative w-full min-w-full cursor-pointer overflow-hidden sm:min-w-[300px] sm:max-w-[320px] md:min-w-[300px] lg:max-w-[410px] xl:min-h-[400px]"
    >
      <div
        style={{
          background: `url(${data.image.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
        className="group h-full min-h-[340px] w-full transition duration-500 group-hover:scale-110 lg:max-w-[410px] xl:min-h-[400px]"
      ></div>
      <div className="absolute inset-0 flex flex-col justify-between p-4 xl:p-6">
        <Link href={data.href} onClick={(e) => handleLinkClick(e, data.href)}>
          <div className="w-fit bg-neutrals-black p-4">
            <h6 className="max-w-[220px] text-neutrals-white xl:max-w-[270px]">{t(data.label)}</h6>
          </div>
        </Link>
        <div className="flex flex-wrap items-center gap-4">
          {data.buttons.map((button) => (
            <Link
              key={button.id}
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleLinkClick(e, button.href)}
            >
              <Button
                key={button.id}
                variant={button.variant}
                responsive
                icon={button.icon as TButtonIcon}
                className="whitespace-nowrap"
              >
                {t(button.title)}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
