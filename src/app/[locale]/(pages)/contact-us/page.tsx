import React from "react";
import { useTranslations } from "next-intl";
import { contactPageData } from "@/lib/data";
import { generateLocalisedMetadata } from "@/utils/utils";
import { PageParams } from "@/utils/types";
import { Metadata } from "next";
import ContactForm from "@/components/pages/contact-us/ContactForm";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(props: PageParams): Promise<Metadata> {
  const pageParams = await props.params;
  const t = await getTranslations({ locale: pageParams.locale });

  return generateLocalisedMetadata(t, "contactPage", "contact-us", pageParams.locale);
}

const ContactPage = () => {
  const t = useTranslations("contactPage");
  return (
    <section className="z-10 flex flex-col items-center px-4">
      <div className="mb-10 mt-20 flex max-w-[840px] flex-col items-center gap-6 px-4 text-center md:px-0 xl:mb-[84px] xl:mt-32">
        <h1>{t(contactPageData.title)}</h1>
        <h5 className="text-neutrals-grey60">{t(contactPageData.content)}</h5>
      </div>
      <div className="mb-10 w-full px-8 xl:mb-[180px] xl:max-w-[840px]">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
