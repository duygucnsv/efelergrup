import React from "react";
import About from "../components/about/About";
import CustomerServices from "../components/services/CustomerServices";

import PageHeader from "../components/common/PageHeader";
import Spacer from "../components/common/Spacer";

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
