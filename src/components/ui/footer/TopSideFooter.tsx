import Logo from "@/components/Icons/Logo";
import { TFooterDataTopPart } from "@/utils/types";
import React from "react";
import LanguagePicker from "../LanguagePicker";
import FooterLinkColumn from "./FooterLinkColumn";

type Props = {
  data: TFooterDataTopPart;
};

const TopSideFooter = ({ data }: Props) => {
  return (
    <nav className="mt-32 grid w-full place-items-center md:grid-cols-4">
      <div className="flex h-full flex-col md:justify-self-start">
        <div className="flex w-full flex-col items-center gap-6 xl:items-start">
          <Logo variant="footer" className="text-center xl:text-start" />
          <LanguagePicker className="mb-8 w-full md:mb-0 lg:items-center" />
        </div>
      </div>
      {data.links.map((column) => {
        return <FooterLinkColumn key={column.id} data={column} />;
      })}
    </nav>
  );
};

export default TopSideFooter;
