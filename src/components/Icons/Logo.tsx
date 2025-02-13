import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {
  variant: "header" | "footer" | "modal";
  className?: string;
};

const Logo = ({ variant, className }: Props) => {
  const t = useTranslations("common");
  if (variant === "footer")
    return (
      <Link href={"/"} className={className}>
        <img alt="Tripto" src="/images/LogoBig.png" className="mb-2 max-w-[166px] xl:max-w-full" />
        <span className="text-caption text-neutrals-white">{t("logo_text")}</span>
      </Link>
    );
  if (variant === "modal") {
    return (
      <Link href={"/"}>
        <img alt="Tripto" src="/images/Logo170.png" className="" />
      </Link>
    );
  }
  return (
    <Link href={"/"}>
      <img alt="Tripto" src="/images/Logo.png" className="max-w-[100px] xl:max-w-full" />
    </Link>
  );
};

export default Logo;
