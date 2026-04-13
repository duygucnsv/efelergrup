"use client";

import React from "react";
import PageHeader from "../components/common/page-header";
import Spacer from "../components/common/spacer";
import CustomerServices from "../components/services/customer-services";
import Vehicles from "../components/services/vehicles";

const ServicePage = () => {
  return (
    <>
      <PageHeader title="Services" />
      <Spacer />
      <Vehicles />
      <Spacer />
      <CustomerServices />
      <Spacer />
    </>
  );
};

export default ServicePage;
