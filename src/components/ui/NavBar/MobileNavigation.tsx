import { TNavButtonGroupItem, TNavigationItem } from "@/utils/types";
import React from "react";
import { twMerge } from "tailwind-merge";
import MobileNavItem from "./MobileNavItem";
import ButtonGroup from "./ButtonGroup";

type Props = {
  isOpenMainMenu: boolean;
  setIsOpenMainMenu: React.Dispatch<React.SetStateAction<boolean>>;
  data: TNavigationItem[];
  buttonGroupData: TNavButtonGroupItem[];
};

const MobileNavigation = ({ isOpenMainMenu, data, buttonGroupData, setIsOpenMainMenu }: Props) => {
  return (
    <nav
      className={twMerge(
        "absolute left-0 top-[56px] z-0 flex h-[calc(100dvh-56px)] w-screen bg-neutrals-white transition-transform duration-500",
        isOpenMainMenu ? "translate-y-0" : "-translate-y-[120dvh]"
      )}
    >
      <div className="w-full">
        <div className="flex h-full w-full flex-col justify-between">
          <div
            className={twMerge(
              "transition-opacity delay-[400ms] duration-700 ease-in-out",
              isOpenMainMenu ? "opacity-100" : "opacity-0 delay-200"
            )}
          >
            {data.map((link) => (
              <MobileNavItem
                setIsOpenMainMenu={setIsOpenMainMenu}
                isOpenMainMenu={isOpenMainMenu}
                key={link.id}
                link={link}
              />
            ))}
          </div>
          <div>
            <ButtonGroup responsive data={buttonGroupData} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavigation;
