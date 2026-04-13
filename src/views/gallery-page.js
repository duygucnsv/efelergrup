"use client";

import React from "react";
import PageHeader from "../components/common/page-header";
import Spacer from "../components/common/spacer";
import Galeri from "../components/gallery/gallery";

const GaleriPage = () => {
  return (
    <>
      <PageHeader title="Galeri" />
      <Spacer />
      <Galeri />
      <Spacer />
    </>
  );
};

export default GaleriPage;
