import { useTranslations } from "next-intl";
import React from "react";

type Props = {
  data: {
    id: number;
    icon: React.ReactNode;
    text: string;
  };
};

const IconCard = ({ data }: Props) => {
  const t = useTranslations("common");
  return (
    <div className="flex items-center gap-2 rounded-lg bg-neutrals-white px-6 py-4 md:flex-col md:px-2 md:py-4 xl:gap-4 xl:px-3 xl:py-6">
      <div className="h-10 w-10 md:h-6 md:w-6 xl:h-12 xl:w-12">{data.icon}</div>
      <h6 className="min-w-[107px] text-center font-normal text-neutrals-grey80 md:min-w-[106px] xl:min-w-[140px]">
        {t(data.text)}
      </h6>
    </div>
  );
};

export default IconCard;
