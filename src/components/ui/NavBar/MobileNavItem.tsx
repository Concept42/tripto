import React, { useEffect, useState } from "react";
import { Link } from "../elements/Link";
import { TNavigationItem } from "@/utils/types";
import Chevron from "@/components/Icons/Chevron";
import { useTranslations } from "next-intl";
import MegaMenuItem from "./MegaMenuItem";

type Props = {
  link: TNavigationItem;
  isOpenMainMenu: boolean;
  setIsOpenMainMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNavItem = ({ link, isOpenMainMenu, setIsOpenMainMenu }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  const handleClose = () => {
    setIsOpenMainMenu(false);
  };

  useEffect(() => {
    if (!isOpenMainMenu) {
      setIsOpen(false);
    }
  }, [isOpenMainMenu]);

  const t = useTranslations("navigation");
  return (
    <div>
      <Link
        key={link.id}
        variant="secondary"
        className="justify-between border-t border-neutrals-grey60 p-4"
        href={link.href ? link.href : ""}
        disabledhref={link.disabledhref}
        onClick={link.disabledhref ? handleToggle : () => setIsOpenMainMenu(false)}
      >
        <>{t(link.name)}</>
        {link.dropdown && <Chevron stroke="black" className="-rotate-90" />}
      </Link>
      {link.dropdown && (
        <MegaMenuItem
          isOpenMainMenu={isOpenMainMenu}
          mobile
          dropdown={link.dropdown}
          isOpen={isOpen}
          handleToggle={handleToggle}
          link={link}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default MobileNavItem;
