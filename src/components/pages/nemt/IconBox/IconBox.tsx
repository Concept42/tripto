import { TStreamlineData } from "@/utils/types";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {
  data: TStreamlineData["iconBoxes"][number];
};

const IconBox = ({ data }: Props) => {
  const t = useTranslations("nemtPage");
  return (
    <div className="flex max-w-[300px] flex-col items-center gap-4">
      <span className="w-14 lg:w-16">{data.icon}</span>
      <div className="text-center">
        <p className="font-bold">{t(data.title)}</p>
        <p className="text-center text-b2">{t(data.text)}</p>
      </div>
    </div>
  );
};

export default IconBox;
