"use client";

import React from "react";
import ReferanslarTablo from "../components/references/references-table";
import PageHeader from "../components/common/page-header";
import Spacer from "../components/common/spacer";
import Partners from "../components/references/partners";

const ReferanslarPage = () => {
  return (
    <>
      <PageHeader title="Referanslarımız" />
      <Spacer />
      <Partners />
      <Spacer />
      <ReferanslarTablo />
      <Spacer />
    </>
  );
};

export default ReferanslarPage;
