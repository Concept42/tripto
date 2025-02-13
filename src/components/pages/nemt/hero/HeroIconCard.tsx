"use client";
import { TNemtHeroData } from "@/utils/types";
import { useTranslations } from "next-intl";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { colorVars } from "@/utils/utils";

type Props = {
  data: TNemtHeroData["bottomIconCards"][number];
  rowPosition?: 1 | 2 | 3;
};

const HeroIconCard = ({ data, rowPosition = 1 }: Props) => {
  const t = useTranslations("common");
  return (
    <div
      className={twMerge(
        "flex flex-col items-center gap-4",
        rowPosition === 1 ? "" : rowPosition === 2 ? "mt-8 xl:mt-14" : "mt-14 xl:mt-[110px]"
      )}
    >
      {data.animated ? (
        <motion.div
          initial={{ opacity: 1, scale: 1, backgroundColor: colorVars["neutrals-grey05"] }}
          animate={{
            backgroundColor: [colorVars["neutrals-grey05"], colorVars["primary-skyBlue"], colorVars["neutrals-grey05"]]
          }}
          transition={{ duration: 5, repeat: Infinity, repeatDelay: 3 }}
          className="relative z-0 flex size-[64px] items-center justify-center overflow-visible rounded-lg ring ring-neutrals-grey10 xl:size-[96px]"
        >
          <svg
            className="absolute inset-[-3.5px] z-10 h-[calc(100%+6px)] w-[calc(100%+6px)] rounded-lg"
            viewBox="0 0 102 102"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="blur-filter">
                <feGaussianBlur stdDeviation="3" />
              </filter>
            </defs>
            <motion.rect
              x="2.5"
              y="2"
              width="96%"
              height="96%"
              rx="8"
              ry="8"
              fill="transparent"
              stroke={colorVars["primary-oceanBlue"]}
              initial={{ opacity: 0 }}
              strokeWidth="3"
              strokeDasharray="400"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 5, repeat: Infinity, repeatDelay: 3 }}
              // filter={"url(#blur-filter)"}
            />
          </svg>

          <span className="h-6 w-6 xl:h-12 xl:w-12">{data.icon}</span>
        </motion.div>
      ) : (
        <div className="flex size-[64px] items-center justify-center overflow-visible rounded-lg bg-neutrals-grey05 ring ring-neutrals-grey10 xl:size-[96px]">
          <span className="h-6 w-6 xl:h-12 xl:w-12">{data.icon}</span>
        </div>
      )}

      <p className="w-[110px] text-center text-b2 leading-6 text-neutrals-grey60 xl:w-[192px] xl:text-b1 xl:leading-8">
        {t(data.text)}
      </p>
    </div>
  );
};

export default HeroIconCard;
