import { TFooterDataTopPartLinks } from "@/utils/types";
import { useTranslations } from "next-intl";
import React from "react";
import { Link } from "../elements/Link";
import { twMerge } from "tailwind-merge";

type Props = {
  data: TFooterDataTopPartLinks;
};

const FooterLinkColumn: React.FC<Props> = ({ data }) => {
  const t = useTranslations("navigation");
  const c = useTranslations("common");

  const hideOnMobile = data.title === "company" || data.title === "solutions";

  return (
    <div
      className={twMerge(
        "h-full flex-col md:gap-2",
        hideOnMobile ? "hidden md:flex" : "md:flex",
        data.id === 3 ? "md:justify-self-end md:pr-10" : ""
      )}
    >
      <span className="hidden text-start text-caption text-neutrals-grey40 md:flex">{c(data.title)}</span>
      <div className="flex flex-col gap-4">
        {data.links.map((link) => {
          if ("subLinks" in link) {
            return (
              <div key={link.id}>
                <span className="text-size-buttonS text-neutrals-white xl:text-size-buttonM">{t(link.name)}</span>
                <ul className="ml-3 mt-4 flex flex-col gap-4">
                  {link.subLinks.map((subLink) => (
                    <li key={subLink.id}>
                      <Link variant="white" size="s" className="xl:text-size-buttonM" href={subLink.href}>
                        {t(subLink.name)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }
          if ("icon" in link) {
            return (
              <Link href={link.href} key={link.id} className="flex items-center">
                {link.icon}
              </Link>
            );
          }
          return (
            <Link
              variant="white"
              size="s"
              className="hidden md:flex xl:text-size-buttonM"
              href={link.href}
              key={link.id}
            >
              {t(link.name)}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FooterLinkColumn;
