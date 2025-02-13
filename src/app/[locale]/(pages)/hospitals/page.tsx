import ImageAndText from "@/components/pages/common/ImageAndText";
import Hero from "@/components/pages/hospitals/Hero";
import LastSection from "@/components/pages/hospitals/LastSection";
import { hospitalsPageData } from "@/lib/data";
import { PageParams } from "@/utils/types";
import { generateLocalisedMetadata } from "@/utils/utils";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(props: PageParams): Promise<Metadata> {
  const pageParams = await props.params;
  const t = await getTranslations({ locale: pageParams.locale });

  return generateLocalisedMetadata(t, "hospitalsPage", "hospitals", pageParams.locale);
}

const HospitalsPage = () => {
  return (
    <>
      <Hero data={hospitalsPageData.hero} />
      <ImageAndText data={hospitalsPageData.simplifiedBooking} />
      <ImageAndText data={hospitalsPageData.manageTransports} />
      <ImageAndText data={hospitalsPageData.pricingBilling} />
      <ImageAndText data={hospitalsPageData.robustSecurity} />
      <LastSection data={hospitalsPageData.lastSection} />
    </>
  );
};

export default HospitalsPage;
