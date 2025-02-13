import { Link as DefaultLink } from "@/i18n/routing";
import { TFooterBootomPartData } from "@/utils/types";
import { useTranslations } from "next-intl";
import React from "react";
import { Link } from "../elements/Link";

type Props = {
  data: TFooterBootomPartData;
};

const BottomSideFooter = ({ data }: Props) => {
  const t = useTranslations("navigation");
  return (
    <div className="grid w-full grid-cols-1 justify-center gap-8 md:order-1 lg:grid-cols-4">
      <div className="order-2 flex w-full items-center justify-center gap-2 lg:justify-start lg:gap-4">
        {data.icons.map((icon) => (
          <DefaultLink target="_blank" rel="noopener noreferrer" key={icon.id} href={icon.href}>
            {icon.icon}
          </DefaultLink>
        ))}
      </div>
      <div className="order-3 flex h-full w-full items-center justify-center md:order-2 lg:ml-14 lg:items-end">
        <span className="whitespace-nowrap text-caption text-neutrals-white">{t(data.copyright)}</span>
      </div>
      <div className="order-1 flex w-full flex-col items-center justify-center gap-4 md:order-3 md:flex-row md:gap-2 lg:col-span-2 lg:items-end lg:justify-end lg:gap-6">
        {data.legalLinks.map((link) => (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            key={link.id}
            href={link.href}
            variant="white"
            size="s"
            className="text-neutrals-white"
          >
            {t(link.name)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomSideFooter;
