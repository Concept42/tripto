"use client";

import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { useTranslations } from "next-intl";
import Chevron from "@/components/Icons/Chevron";

export type TSelectItem = {
  id: number;
  name: string;
  code: string;
};

type Props = {
  label: string;
  items: TSelectItem[];
  selected: TSelectItem;
  setSelected: React.Dispatch<React.SetStateAction<TSelectItem>>;
};

const Select = ({ label, items, selected, setSelected }: Props) => {
  const t = useTranslations("common");

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="">
        <Label as="p" className="w-full text-b2 text-neutrals-grey20">
          {t(label)}
        </Label>
        <div className="relative">
          <ListboxButton className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-size-buttonS text-neutrals-white ring-1 ring-neutrals-white">
            {t(selected.name)}
            <Chevron stroke="white" />
          </ListboxButton>
          <ListboxOptions
            transition
            className="focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 sm:text-sm"
          >
            {items.map((item) => (
              <ListboxOption key={item.id} value={item}>
                <div className="flex items-center">{t(item.name)}</div>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </div>
    </Listbox>
  );
};

export default Select;
