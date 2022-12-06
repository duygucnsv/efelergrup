import React from "react";
import NewsletterPanel from "../components/contact/NewsletterPanel";
import CustomerServices from "../components/services/CustomerServices";
import Vehicles from "../components/services/Vehicles";
import Spacer from "../components/common/Spacer";

import SliderCarousel from "../components/home/SliderCarousel";
import BannerContact from "../components/home/BannerContact";
import Project from "../components/projeler/Project";
import Partners from "../components/referanslar/Partners";
import { Container } from "react-bootstrap";

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
      <Partners />
      <Spacer />
    </>
  );
};

export default HomePage;
