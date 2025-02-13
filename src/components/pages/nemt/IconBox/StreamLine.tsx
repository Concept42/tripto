import { TStreamlineData } from "@/utils/types";
import { useTranslations } from "next-intl";
import React from "react";
import IconBox from "./IconBox";
import Background from "./Background";

type Props = {
  data: TStreamlineData;
};

const StreamLine = ({ data }: Props) => {
  const t = useTranslations("nemtPage");
  return (
    <section className="relative w-full bg-neutrals-grey05">
      <div className="pageContainer flex flex-col items-center gap-6 py-14 xl:py-32">
        <h2 className="text-center font-bold">{t(data.title)}</h2>
        <div className="grid gap-x-6 gap-y-9 rounded-2xl bg-neutrals-white px-6 py-6 md:grid-cols-3 xl:px-8 xl:py-10">
          {data.iconBoxes.map((iconBox) => (
            <IconBox data={iconBox} key={iconBox.id} />
          ))}
        </div>
      </div>
      <Background className="absolute left-0 top-0 hidden xl:block" />
      <Background className="absolute right-0 top-0 hidden xl:block" />
    </section>
  );
};

export default StreamLine;
