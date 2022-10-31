import React from "react";
import ReferanslarTablo from "../components/referanslar/ReferanslarTablo";
import PageHeader from "../components/common/PageHeader";
import Spacer from "../components/common/Spacer";
import Partners from "../components/referanslar/Partners";

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
