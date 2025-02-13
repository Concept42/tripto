"use client";
import Close from "@/components/Icons/Close";
import Hamburger from "@/components/Icons/Hamburger";
import { TNavButtonGroupItem, TNavigationItem } from "@/utils/types";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import MobileNavigation from "./MobileNavigation";
import useResize from "@/hooks/useResize";

type Props = {
  data: TNavigationItem[];
  buttonGroupData: TNavButtonGroupItem[];
};

const MobileMenu = ({ data, buttonGroupData }: Props) => {
  const [isOpenMainMenu, setisOpenMainMenu] = useState(false);

  const handleToggle = () => {
    setisOpenMainMenu((prev) => !prev);
    if (!isOpenMainMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.removeAttribute("style");
    }
  };

  useResize(() => handleToggle, 767);

  return (
    <div className="flex h-full md:hidden">
      <button className="z-20 h-full bg-neutrals-white pr-4">
        <Hamburger
          onClick={handleToggle}
          className={twMerge(
            "absolute transition-opacity duration-300 ease-in-out",
            !isOpenMainMenu ? "opacity-100" : "opacity-0"
          )}
        />
        <Close
          onClick={handleToggle}
          className={twMerge(
            "transition-opacity duration-300 ease-in-out",
            isOpenMainMenu ? "opacity-100" : "opacity-0"
          )}
        />
      </button>
      {
        <MobileNavigation
          buttonGroupData={buttonGroupData}
          setIsOpenMainMenu={handleToggle}
          isOpenMainMenu={isOpenMainMenu}
          data={data}
        />
      }
    </div>
  );
};

export default MobileMenu;
