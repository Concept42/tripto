import { useTranslations } from "next-intl";
import { Link } from "../elements/Link";
import { TNavigationItemDropdown } from "@/utils/types";
import { twMerge } from "tailwind-merge";

type Props = {
  item: TNavigationItemDropdown;
  mobile?: boolean;
  handleToggle?: () => void;
};

const SubLinkItem = ({ item, handleToggle, mobile = false }: Props) => {
  const t = useTranslations("navigation");
  return (
    <div className={twMerge("flex flex-col gap-3", mobile ? "border-t border-t-neutrals-grey60 p-4" : "py-6")}>
      <div className="flex items-center gap-2">
        <span>{item.icon}</span>
        <Link size="s" variant="white" onClick={handleToggle} className="xl:text-size-buttonM" href={item.href}>
          {t(item.title)}
        </Link>
      </div>
      {item.text && <p className="text-caption text-neutrals-white">{t(item.text)}</p>}
    </div>
  );
};
export default SubLinkItem;
