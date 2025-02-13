import { TImageAndTextSection } from "@/utils/types";
import { splitBoldText } from "@/utils/utils";
import { useTranslations } from "next-intl";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = { data: TImageAndTextSection };

const ImageAndText = ({ data }: Props) => {
  const t = useTranslations(data.renderedOnPage);

  return (
    <div className={twMerge(data.background ? "bg-primary-icyBlue" : "")}>
      <div className="pageContainer grid h-full w-full grid-cols-1 place-items-center gap-6 py-14 lg:grid-cols-2 xl:py-32">
        <h2 className="text-center lg:hidden">{t(data.title)}</h2>
        <div
          className={twMerge(
            "flex items-center justify-center rounded-2xl bg-primary-icyBlue xl:min-h-[500px] xl:min-w-[624px] xl:rounded-none",
            data.reverse ? "lg:order-2" : "order-1"
          )}
        >
          <img src={data.image.src} alt={data.image.alt} className="" />
        </div>
        <div className={twMerge("flex flex-col justify-center gap-6", data.reverse ? "order-1" : "order-2")}>
          <h2 className="hidden lg:block">{t(data.title)}</h2>
          <div className="flex max-w-[624px] flex-col gap-2 lg:max-w-full">
            {data.content &&
              data.content.map((content, index) => {
                const isB1 = index === 0;
                return (
                  <p key={index} className={twMerge("text-neutrals-grey80", isB1 ? "" : "text-b2")}>
                    {t(content)}
                  </p>
                );
              })}
            {data.list && (
              <ul className="list-disc pl-6 text-b2">
                {data.list.map((list, index) => {
                  const { isBold, boldPart, rest } = splitBoldText(t(list));
                  return (
                    <li className="text-neutrals-grey80" key={index}>
                      {isBold ? (
                        <>
                          <span className="font-bold">{boldPart + ":"}</span>
                          <span className="">{rest}</span>
                        </>
                      ) : (
                        t(list)
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAndText;
