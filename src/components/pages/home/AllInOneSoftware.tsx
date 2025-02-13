import { TAllINOneSoftware } from "@/utils/types";
import { useTranslations } from "next-intl";
import React from "react";
import ImageCard from "./ImageCard";

type Props = {
  data: TAllINOneSoftware;
};

const AllInOneSoftware = ({ data }: Props) => {
  const t = useTranslations("homePage");
  return (
    <section className="pageContainer flex flex-col items-center gap-10 py-14 xl:py-32">
      <h2 className="hidden xl:block">{t(data.title)}</h2>
      <div className="flex w-full flex-col flex-wrap items-center justify-center gap-6 sm:flex-row lg:flex-nowrap xl:justify-between">
        {data.cards.map((card) => (
          <ImageCard key={card.id} data={card} />
        ))}
      </div>
    </section>
  );
};

export default AllInOneSoftware;
