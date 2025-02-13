"use client";
import React from "react";
import NavBar from "../ui/NavBar/NavBar";
import Footer from "../ui/footer/Footer";
import useDetectLanguage from "@/hooks/useDetectLanguage";
import LanguageModal from "../pages/common/LanguageModal";

type Props = {
  children: React.ReactNode;
};

const RootLayoutWrapper = ({ children }: Props) => {
  useDetectLanguage();
  return (
    <div className="flex h-full min-h-screen flex-col justify-between pt-14 xl:pt-[68px]">
      <NavBar />
      <main className="h-full w-full">{children}</main>
      <Footer />
      <LanguageModal />
    </div>
  );
};

export default RootLayoutWrapper;
