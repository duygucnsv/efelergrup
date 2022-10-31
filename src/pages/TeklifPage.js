import React from "react";

import PageHeader from "../components/common/PageHeader";
import Spacer from "../components/common/Spacer";
import Teklif from "../components/teklif/Teklif";

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
