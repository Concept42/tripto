"use client";
import { useTranslations } from "next-intl";
import FormInput from "./FormInput";
import { Button } from "@/components/ui/elements/Button";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const ContactForm = () => {
  const t = useTranslations("contactPage.form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ error: "", success: "" });

  const schema = zod.object({
    name: zod.string().nonempty({ message: t("required") }),
    email: zod
      .string()
      .nonempty({ message: t("required") })
      .email({ message: t("invalid_email") }),
    phone: zod.string().optional(),
    message: zod.string().nonempty({ message: t("required") })
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formData.append("access_key", "dddeba99-fd4c-4fe0-bab1-e3ee2a58fa04");
    if (data.phone) formData.append("phone", data.phone);
    try {
      setIsSubmitting(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setIsSubmitting(false);
        reset();
        setMessage({ success: t("success"), error: "" });
      }
      if (data.error) {
        setIsSubmitting(false);
        setMessage({ success: "", error: t("error") });
      }
    } catch (err) {
      console.log(err);
      setIsSubmitting(false);
      setMessage({ success: "", error: t("error") });
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-8">
      <div className="flex flex-col gap-1">
        <FormInput placeholder={t("name") + " *"} type="text" {...register("name")} />
        {errors?.name?.message && (
          <span className="pl-2 text-caption text-red-500">{errors.name.message as string}</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <FormInput placeholder={t("email_address") + " *"} {...register("email")} type="email" />
        {errors?.email?.message && (
          <span className="pl-2 text-caption text-red-500">{errors.email.message as string}</span>
        )}
      </div>
      <FormInput placeholder={t("phone")} {...register("phone")} type="tel" />
      <div className="flex flex-col gap-1">
        <FormInput placeholder={t("message") + " *"} {...register("message")} type="area" />
        {errors?.message?.message && (
          <span className="pl-2 text-caption text-red-500">{errors.message.message as string}</span>
        )}
      </div>
      <Button disabled={isSubmitting}>{t("send_request")}</Button>
      {message.success !== "" ? <h6 className="text-primary-oceanBlue">{message.success}</h6> : null}
      {message.error !== "" ? <h6 className="text-red-500">{message.error}</h6> : null}
    </form>
  );
};

export default ContactForm;
