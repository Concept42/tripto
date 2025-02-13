import React from "react";
import { Button } from "../elements/Button";
import { useTranslations } from "next-intl";
import { TNavButtonGroupItem } from "@/utils/types";
import { twMerge } from "tailwind-merge";

type Props = {
  data: TNavButtonGroupItem[];
  responsive?: boolean;
};

const ButtonGroup = ({ data, responsive }: Props) => {
  const t = useTranslations("navigation");
  return (
    <div
      className={twMerge(
        responsive
          ? "flex w-full items-center gap-4 border-t border-t-neutrals-grey60 px-4 py-6"
          : "flex items-center gap-4"
      )}
    >
      {data.map((item) => (
        <Button responsive={!responsive} className={responsive ? "w-full" : ""} key={item.id} variant={item.variant}>
          {t(item.title)}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGroup;
