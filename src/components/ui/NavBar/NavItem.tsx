"use client";
import Chevron from "@/components/Icons/Chevron";
import { TNavigationItem } from "@/utils/types";
import React, { useState } from "react";
import { Link } from "../elements/Link";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";
import MegaMenuItem from "./MegaMenuItem";

type Props = {
  item: TNavigationItem;
};

const NavItem = ({ item }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHover = (open: boolean) => {
    setIsOpen(open);
  };

  const t = useTranslations("navigation");
  return (
    <div
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      className={twMerge("transition duration-300 ease-in-out", isOpen && item.dropdown ? "bg-primary-icyBlue" : "")}
    >
      <Link
        variant="secondary"
        className={twMerge(
          "px-3 py-4 xl:px-4 xl:py-6 xl:text-size-buttonM",
          item.dropdown && "hover:text-neutrals-black"
        )}
        href={item.href ? item.href : ""}
        disabledhref={item.disabledhref}
        size="s"
      >
        <span>{t(item.name)}</span>
        {item.dropdown ? <Chevron stroke="black" className="w-4 xl:w-6" /> : null}
      </Link>
      {item.dropdown && <MegaMenuItem dropdown={item.dropdown} isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default NavItem;
