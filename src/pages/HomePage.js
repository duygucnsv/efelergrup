import React from "react";
import NewsletterPanel from "../components/contact/NewsletterPanel";
import CustomerServices from "../components/services/CustomerServices";
import Vehicles from "../components/services/Vehicles";
import Spacer from "../components/common/Spacer";

import SliderCarousel from "../components/home/SliderCarousel";
import BannerContact from "../components/home/BannerContact";
import Project from "../components/projeler/Project";

const HomePage = () => {
  return (
    <>
      <SliderCarousel />
      <Spacer />
      <BannerContact />
      <Spacer />
      <CustomerServices />
      <Spacer />
      <Project />
      <Spacer />
      <NewsletterPanel />
      <Spacer />
      <Vehicles />
      <Spacer />
    </>
  );
};

export default HomePage;
