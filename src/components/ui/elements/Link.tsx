import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import TLink from "@/i18n/Link";

const linkVariants = cva("flex items-center gap-2 transition duration-150 focus:outline-none", {
  variants: {
    variant: {
      default: "",
      primary: "text-primary-oceanBlue hover:text-primary-mistyBlue",
      secondary: "text-neutrals-black hover:text-neutrals-grey60",
      white: "text-neutrals-white hover:text-neutrals-grey10",
      disabled: "pointer-events-none text-neutrals-grey20"
    },
    size: {
      default: "",
      m: "text-base font-bold leading-5 tracking-[0.004rem]",
      s: "text-sm font-bold leading-4 tracking-[0.0035rem]"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "m"
  }
});

interface LinkProps extends React.ComponentProps<typeof TLink>, VariantProps<typeof linkVariants> {
  children: React.ReactNode;
  disabled?: boolean;
  disabledhref?: boolean;
}

const Link = ({ variant, size, children, disabled = false, disabledhref = false, className, ...props }: LinkProps) => {
  const isDisabled = disabled || disabledhref;

  return (
    <TLink
      className={twMerge(linkVariants({ variant: disabled ? "disabled" : variant, size }), className)}
      {...props}
      aria-disabled={isDisabled ? "true" : undefined}
      tabIndex={isDisabled ? -1 : undefined}
      href={props.href}
    >
      {children}
    </TLink>
  );
};

export { Link, linkVariants };
