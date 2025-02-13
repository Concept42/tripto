import React from "react";
import { Link as DefaultLink } from "./routing";
import { useLocale, useTranslations } from "next-intl";

type LinkProps = React.ComponentProps<typeof DefaultLink>;

type Props = LinkProps & {
  children: React.ReactNode;
};

const TLink = ({ children, ...props }: Props) => {
  const t = useTranslations("slugs");
  const locale = useLocale();

  const translatedHref = props.href !== "" ? t(props.href) : props.href;

  return (
    <DefaultLink {...props} hrefLang={locale} lang={locale} href={"/" + translatedHref}>
      {children}
    </DefaultLink>
  );
};

export default TLink;
