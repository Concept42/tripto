import React from "react";

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "placeholder" | "type"> & {
  placeholder: string;
  type: "text" | "email" | "tel";
};

type TextareaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "placeholder" | "type"> & {
  placeholder: string;
  type: "area";
};

type Props = InputProps | TextareaProps;

const FormInput: React.FC<Props> = ({ placeholder, type, ...props }) => {
  if (type === "area") {
    return (
      <textarea
        placeholder={placeholder}
        className="h-full w-full resize-none rounded-lg border border-neutrals-grey20 px-4 py-3 text-size-buttonM font-normal focus:outline-neutrals-grey40"
        rows={5}
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }

  return (
    <input
      placeholder={placeholder}
      type={type}
      className="w-full rounded-lg border border-neutrals-grey20 px-4 py-3 text-size-buttonM font-normal focus:outline-neutrals-grey40"
      {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
    />
  );
};

export default FormInput;
