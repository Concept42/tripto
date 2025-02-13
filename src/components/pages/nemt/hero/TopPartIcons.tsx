import { TNemtHeroData } from "@/utils/types";
import React, { Fragment } from "react";
import IconCard from "../../common/IconCard";
import ConnectArrow from "@/components/Icons/ConnectArrow";

type Props = {
  data: TNemtHeroData["topIconCards"];
};

const TopPartIcons = ({ data }: Props) => {
  return (
    <div className="mx-4 flex flex-col items-center gap-4 rounded-2xl bg-primary-icyBlue p-4 md:flex-row md:gap-0 xl:p-8">
      {data.map((card) => {
        const lastId = data[data.length - 1].id;
        return (
          <Fragment key={card.id}>
            <IconCard data={card} key={card.id} />
            {card.id !== lastId && <ConnectArrow className="w-3/4 rotate-90 md:rotate-0" />}
          </Fragment>
        );
      })}
    </div>
  );
};

export default TopPartIcons;
