"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Chevron from "@/components/Icons/Chevron";
import { colorVars } from "@/utils/utils";
import External from "@/components/Icons/External";

// use the icon property only when a hover state is needed

export type TButtonVariants = "default" | "primary" | "secondary" | "white" | "whiteSecondary";
export type TButtonIcon = "chevron-white" | "external-black" | "chevron-black";

const buttonVariants = cva(
  "flex items-center justify-center gap-2 rounded-lg transition duration-150 focus:outline-none",
  {
    variants: {
      variant: {
        default: "",
        primary:
          "bg-primary-oceanBlue text-neutrals-white hover:bg-primary-mistyBlue hover:text-primary-oceanBlue disabled:bg-neutrals-grey05 disabled:text-neutrals-grey10",
        secondary:
          "disabled:ring-neutrals-gray10 bg-transparent text-primary-oceanBlue ring-1 ring-primary-oceanBlue hover:text-primary-mistyBlue hover:ring-primary-mistyBlue disabled:bg-transparent disabled:text-neutrals-grey10 disabled:ring-neutrals-grey10",
        white:
          "bg-neutrals-white text-neutrals-black hover:bg-neutrals-grey20 disabled:bg-neutrals-grey05 disabled:text-neutrals-grey10",
        whiteSecondary:
          "bg-transparent text-neutrals-white ring-1 ring-neutrals-white hover:text-neutrals-grey20 hover:ring-neutrals-grey20 disabled:text-neutrals-grey10 disabled:ring-neutrals-grey10"
      },
      size: {
        default: "",
        m: "px-4 py-3 text-base font-bold leading-5 tracking-[0.004rem]",
        s: "px-3 py-2 text-sm font-bold leading-4 tracking-[0.0035rem]"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "m"
    }
  }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  responsive?: boolean;
  icon?: TButtonIcon;
}

const Button = ({ variant, size, responsive, icon, children, className, ...props }: ButtonProps) => {
  const [isHovering, setIsHovering] = React.useState(false);

  const renderIcon = (icon: TButtonIcon) => {
    switch (icon) {
      case "chevron-white":
        return (
          <Chevron style={{ stroke: isHovering ? colorVars["primary-oceanBlue"] : "white" }} className="-rotate-90" />
        );
      case "external-black":
        return <External style={{ stroke: "black" }} />;
      case "chevron-black":
        return <Chevron style={{ stroke: "black" }} className="-rotate-90" />;
      default:
        return null;
    }
  };

  const responsiveClasses = responsive
    ? "px-3 py-2 text-sm font-bold leading-4 tracking-[0.0035rem] xl:px-4 xl:py-3 xl:text-base xl:leading-4, xl:tracking-[0.0035rem]"
    : "";

  const handleOnMouseEnter = () => {
    setIsHovering(true);
  };
  const handleOnMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <button
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      className={twMerge(buttonVariants({ variant, size }), responsiveClasses, className)}
      {...props}
    >
      {children}
      {icon && renderIcon(icon)}
    </button>
  );
};

export { Button, buttonVariants };
