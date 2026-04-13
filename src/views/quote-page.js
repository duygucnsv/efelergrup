"use client";

import React from "react";

import PageHeader from "../components/common/page-header";
import Spacer from "../components/common/spacer";
import Teklif from "../components/quote/quote";

const TeklifPage = () => {
  return (
    <>
      <PageHeader title="Teklif" />
      <Spacer />
      <Teklif />
      <Spacer />
    </>
  );
};

export default TeklifPage;
