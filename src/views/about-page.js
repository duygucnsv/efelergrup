"use client";

import React from "react";
import About from "../components/about/about";
import CustomerServices from "../components/services/customer-services";

import PageHeader from "../components/common/page-header";
import Spacer from "../components/common/spacer";

const AboutPage = () => {
  return (
    <>
      <PageHeader title="Hakkımızda" />
      <Spacer />
      <About />
      <Spacer />
      <CustomerServices />
      <Spacer />
    </>
  );
};

export default AboutPage;
