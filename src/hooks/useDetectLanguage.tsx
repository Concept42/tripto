"use client";
import { usePathname, useRouter } from "@/i18n/routing";
import { Locales } from "@/utils/types";
import { getBrowserLanguage, getFromLocalStorage, saveToLocalStorage } from "@/utils/utils";
import { useLocale } from "next-intl";
import { useEffect } from "react";

const useDetectLanguage = () => {
  const router = useRouter();
  const pathName = usePathname();
  const currentLocale = useLocale();

  useEffect(() => {
    const changeLanguage = (locale: Locales) => {
      router.push(pathName, { locale });
    };
    const hasSavedLanguage = getFromLocalStorage("locale");
    const isFirstFlag = getFromLocalStorage("isFirstFlag");

    if (hasSavedLanguage) return;

    const browserLanguage = getBrowserLanguage();
    if (browserLanguage && !hasSavedLanguage && isFirstFlag !== "true") {
      changeLanguage(browserLanguage);
      saveToLocalStorage("locale", browserLanguage);
      saveToLocalStorage("isFirstFlag", "true");
    }
  }, [pathName, router]);

  useEffect(() => {
    saveToLocalStorage("locale", currentLocale);
  }, [currentLocale]);
};

export default useDetectLanguage;
