import { TNavigationItem, TNavigationItemDropdown } from "@/utils/types";
import { twMerge } from "tailwind-merge";
import SubLinkItem from "./SublinkItem";
import { Link } from "../elements/Link";
import { useTranslations } from "next-intl";
import Chevron from "@/components/Icons/Chevron";

type MegaMenuItemProps =
  | {
      dropdown: TNavigationItemDropdown[];
      isOpen: boolean;
      mobile: true;
      handleToggle: () => void;
      link: TNavigationItem;
      isOpenMainMenu: boolean;
      handleClose: () => void;
      setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    }
  | {
      dropdown: TNavigationItemDropdown[];
      isOpen: boolean;
      setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
      mobile?: false;
    };

const MegaMenuItem = (props: MegaMenuItemProps) => {
  const { dropdown, isOpen, mobile = false, setIsOpen } = props;
  const t = useTranslations("navigation");

  if (mobile) {
    const { handleToggle, link, isOpenMainMenu, handleClose } = props as Extract<MegaMenuItemProps, { mobile: true }>;

    return (
      <div
        className={twMerge(
          "fixed bottom-[93px] left-0 z-30 h-full w-full transform overflow-y-scroll bg-primary-tertiary transition-all duration-300 ease-in-out",
          isOpen
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-[100dvw] opacity-0",
          isOpenMainMenu ? "" : "delay-1000"
        )}
      >
        <Link
          variant="secondary"
          className="mt-[93px] border-t border-neutrals-grey60 bg-neutrals-white p-4"
          href={link.href ? link.href : ""}
          onClick={!link.href ? handleToggle : undefined}
        >
          {dropdown && <Chevron stroke="black" className="rotate-90" />}
          <>{t(link.name)}</>
        </Link>
        {dropdown &&
          dropdown.map((item) => <SubLinkItem handleToggle={handleClose} mobile key={item.id} item={item} />)}
      </div>
    );
  }
  return (
    <div
      className={twMerge(
        "fixed left-0 w-full transform bg-primary-tertiary transition-all duration-300 ease-in-out",
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <div className="pageContainer grid w-full grid-cols-4 gap-x-6">
        {setIsOpen &&
          dropdown.map((item) => (
            <SubLinkItem
              handleToggle={() => {
                setIsOpen(false);
              }}
              key={item.id}
              item={item}
            />
          ))}
      </div>
    </div>
  );
};
export default MegaMenuItem;
