import Logo from "@/components/Icons/Logo";
import React from "react";
import Navigation from "./Navigation";
import ButtonGroup from "./ButtonGroup";
import MobileMenu from "./MobileMenu";

//DATA IMPORTED HERE - To change the data in the footer, change the headerData object in the data.tsx file
import { headerData, headerButtonGroupData } from "@/lib/data";

const NavBar = () => {
  return (
    <header className="fixed top-0 z-50 flex w-full border-b border-neutrals-grey10 bg-neutrals-white">
      <div className="pageContainer relative flex w-full items-center justify-between !p-0 md:!px-4 xl:!px-0">
        <div className="z-50 flex h-[56px] w-full items-center gap-4 bg-neutrals-white md:w-fit md:py-0 xl:h-full xl:gap-16">
          <div className="flex h-full items-center justify-center bg-neutrals-white pl-4 md:bg-transparent md:pl-0">
            <Logo variant="header" />
          </div>
          <Navigation data={headerData} />
        </div>
        <div className="hidden md:block">
          <ButtonGroup data={headerButtonGroupData} />
        </div>
        <MobileMenu data={headerData} buttonGroupData={headerButtonGroupData} />
      </div>
    </header>
  );
};

export default NavBar;
