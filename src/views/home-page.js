"use client";

import React from "react";
import NewsletterPanel from "../components/contact/newsletter-panel";
import CustomerServices from "../components/services/customer-services";
import Vehicles from "../components/services/vehicles";
import Spacer from "../components/common/spacer";

import Slider from "../components/home/slider";
import BannerContact from "../components/home/banner-contact";
import Project from "../components/projects/project";
import Partners from "../components/references/partners";

const HomePage = () => {
  return (
    <>
      <Slider />
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
