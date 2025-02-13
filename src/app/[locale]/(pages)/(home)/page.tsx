import Hero from "@/components/pages/home/Hero";
import React from "react";
import { homePageData } from "@/lib/data";
import AllInOneSoftware from "@/components/pages/home/AllInOneSoftware";
import ImageAndText from "@/components/pages/common/ImageAndText";
import Testimonials from "@/components/pages/common/testimonials/Testimonials";
import FooterBanner from "@/components/pages/common/FooterBanner";
import { PageParams } from "@/utils/types";
import { Metadata } from "next";
import { generateLocalisedMetadata } from "@/utils/utils";
import AlternateHero from "@/components/pages/home/AlternateHero";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(props: PageParams): Promise<Metadata> {
  const pageParams = await props.params;
  const t = await getTranslations({ locale: pageParams.locale });

  return generateLocalisedMetadata(t, "homePage", "home", pageParams.locale);
}

const HomePage = () => {
  return (
    <>
      {/* <Hero data={homePageData.hero} /> */}
      <AlternateHero data={homePageData.hero} />
      <AllInOneSoftware data={homePageData.allInOneSoftware} />
      <ImageAndText data={homePageData.imageAndText} />
      <Testimonials data={homePageData.testimonials} />
      <FooterBanner />
    </>
  );
};

export default HomePage;
