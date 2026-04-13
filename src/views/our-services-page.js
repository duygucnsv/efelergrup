"use client";

import React from "react";
import PageHeader from "../components/common/page-header";
import Spacer from "../components/common/spacer";
import Hizmetler from "../components/our-services/our-services";

const HizmetlerimizPage = () => {
  return (
    <>
      <PageHeader title="Hizmetlerimiz" />
      <Spacer />
      <Hizmetler />
      <Spacer />
    </>
  );
};

export default HizmetlerimizPage;
