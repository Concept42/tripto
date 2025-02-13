"use client";

import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Logo from "@/components/Icons/Logo";
import { useTranslations } from "next-intl";
import { languagePickerData } from "@/lib/data";
import { usePathname, useRouter } from "@/i18n/routing";
import { getFromLocalStorage, saveToLocalStorage } from "@/utils/utils";
import { Locales } from "@/utils/types";

export default function LanguageModal() {
  const isFirst = getFromLocalStorage("isFirstFlag");
  const t = useTranslations("common");
  const [open, setOpen] = useState(isFirst && isFirst === "false" ? false : true);
  const router = useRouter();
  const pathName = usePathname();

  const changeLanguage = (locale: Locales) => {
    router.push(pathName, { locale });
    router.refresh();
    saveToLocalStorage("isFirstFlag", "false");
    saveToLocalStorage("locale", locale);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => {}} className="relative z-[99]">
      <DialogBackdrop
        transition
        className="data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in fixed inset-0 bg-black/80 transition-opacity"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative flex w-full max-w-[387px] transform flex-col items-center gap-6 overflow-hidden rounded-2xl bg-white px-8 py-10 transition-all"
          >
            <Logo variant="modal" />
            <p className="font-bold">{t(languagePickerData.text)}</p>
            {languagePickerData.languages.map((language) => (
              <div
                className="flex w-full flex-col items-center gap-2 rounded-lg bg-neutrals-grey05 p-4"
                key={language.id}
              >
                <p className="font-bold">{t(language.name)}</p>
                <div className="flex w-full justify-center gap-6">
                  {language.locales.map((locale) => (
                    <span
                      onClick={() => changeLanguage(locale.code as Locales)}
                      className="cursor-pointer text-b1 font-normal text-primary-oceanBlue"
                      key={locale.id}
                    >
                      {t(locale.label)}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
