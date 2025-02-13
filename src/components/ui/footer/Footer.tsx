import React from "react";
import TopSideFooter from "./TopSideFooter";
import BottomSideFooter from "./BottomSideFooter";

//DATA IMPORTED HERE - To change the data in the footer, change the footerData object in the data.tsx file
import { footerData } from "@/lib/data";

const Footer = () => {
  return (
    <footer className="bg-primary-tertiary py-10">
      <div className="pageContainer 0 flex flex-col gap-8 md:gap-20">
        <TopSideFooter data={footerData.topPart} />
        <BottomSideFooter data={footerData.bottomPart} />
      </div>
    </footer>
  );
};

export default Footer;
