import Hero from "@/components/pages/nemt/hero/Hero";
import React from "react";
import { nemtPageData, homePageData } from "@/lib/data";
import ImageAndText from "@/components/pages/common/ImageAndText";
import StreamLine from "@/components/pages/nemt/IconBox/StreamLine";
import Testimonials from "@/components/pages/common/testimonials/Testimonials";
import FooterBanner from "@/components/pages/common/FooterBanner";
import Benefits from "@/components/pages/nemt/Benefits";
import { PageParams } from "@/utils/types";
import { Metadata } from "next";
import { generateLocalisedMetadata } from "@/utils/utils";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(props: PageParams): Promise<Metadata> {
  const pageParams = await props.params;
  const t = await getTranslations({ locale: pageParams.locale });

  return generateLocalisedMetadata(t, "nemtPage", "nemt", pageParams.locale);
}

const NemtPage = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <Hero data={nemtPageData.hero} />
        <ImageAndText data={nemtPageData.schedulingOnAutopilot} />
        <ImageAndText data={nemtPageData.invoicingMadeEasy} />
        <StreamLine data={nemtPageData.streamLine} />
      </div>
      <Benefits data={nemtPageData.benefits} />
      <Testimonials data={homePageData.testimonials} />
      <FooterBanner />
    </>
  );
};

export default NemtPage;
