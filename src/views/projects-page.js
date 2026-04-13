"use client";

import React from "react";
import PageHeader from "../components/common/page-header";
import Spacer from "../components/common/spacer";
import Vehicles from "../components/services/vehicles";
import NewsletterPanel from "../components/contact/newsletter-panel";
import Project from "../components/projects/project";

const ProjelerPage = () => {
  return (
    <>
      <PageHeader title="Projelerimiz" />
      <Spacer />
      <Project />
      <Spacer />
      <Vehicles />
      <Spacer />
      <NewsletterPanel />
      <Spacer />
    </>
  );
};

export default ProjelerPage;
