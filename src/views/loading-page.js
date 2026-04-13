"use client";

import React from "react";
import { Image, Spinner } from "react-bootstrap";

const LoadingPage = () => {
  return (
    <div className="spinner-loading">
      <Spinner animation="border" variant="primary" />
      <Image
        src="/assets/img/efeler-grup.png"
        className="logo "
        alt="Efeler Grup"
      />
    </div>
  );
};

export default LoadingPage;
