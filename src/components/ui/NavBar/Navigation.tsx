"use client";
import React from "react";
import { TNavigationItem } from "@/utils/types";
import NavItem from "./NavItem";

type Props = {
  data: TNavigationItem[];
};

const Navigation = ({ data }: Props) => {
  return (
    <nav className="hidden items-center md:flex">
      {data.map((link) => (
        <NavItem key={link.id} item={link} />
      ))}
    </nav>
  );
};

export default Navigation;
