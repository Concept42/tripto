"use client";
import React, { useState } from "react";
import Select from "./elements/Select";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

const languages = [
  {
    id: 1,
    name: "english",
    code: "en"
  },
  {
    id: 2,
    name: "german",
    code: "de"
  },
  {
    id: 3,
    name: "french",
    code: "fr"
  }
];

const LanguagePicker = ({ className = "" }: Props) => {
  const [selected, setSelected] = useState(languages[0]);
  return (
    <div className={twMerge("max-w-[153px]", className)}>
      <Select items={languages} selected={selected} setSelected={setSelected} label="select_language" />
    </div>
  );
};

export default LanguagePicker;
