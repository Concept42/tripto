"use client";
import { TNemtHeroData } from "@/utils/types";
import React from "react";
import HeroIconCard from "./HeroIconCard";

type Props = {
  data: TNemtHeroData["bottomIconCards"];
};

const BottomPartIcons = ({ data }: Props) => {
  const topRow = data.slice(0, 6);
  const bottomRow = data.slice(6, data.length);

  const topRowPositions = (id: number) => {
    switch (id) {
      case 1:
        return 3;
      case 2:
        return 2;
      case 3:
        return 1;
      case 4:
        return 1;
      case 5:
        return 2;
      case 6:
        return 3;
      default:
        return undefined;
    }
  };
  const bottomRowPositions = (id: number) => {
    switch (id) {
      case 7:
        return 3;
      case 8:
        return 2;
      case 9:
        return 1;
      case 10:
        return 2;
      case 11:
        return 3;
      default:
        return undefined;
    }
  };

  return (
    <div className="pageContainer my-10 hidden grid-rows-2 md:grid xl:mb-[84px] xl:mt-14">
      <div className="flex w-full items-start justify-between gap-2 lg:justify-center lg:gap-8 xl:justify-start xl:gap-6">
        {topRow.map((card) => {
          return <HeroIconCard key={card.id} rowPosition={topRowPositions(card.id)} data={card} />;
        })}
      </div>
      <div className="-mt-4 flex w-full items-start justify-between gap-6 lg:mx-0 lg:-mt-6 lg:justify-center">
        {bottomRow.map((card) => {
          return <HeroIconCard key={card.id} rowPosition={bottomRowPositions(card.id)} data={card} />;
        })}
      </div>
    </div>
  );
};

export default BottomPartIcons;
