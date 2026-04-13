"use client";

import React from "react";
import PageHeader from "../components/common/page-header";
import Spacer from "../components/common/spacer";
import Contact from "../components/contact/contact";
import ContactForm from "../components/contact/contact-form";
import NewsletterPanel from "../components/contact/newsletter-panel";

const ContactPage = () => {
  return (
    <>
      <PageHeader title="İletişim" />
      <Spacer />
      <Contact />
      <Spacer />
      <ContactForm />
      <Spacer />
      <NewsletterPanel />
      <Spacer />
    </>
  );
};

export default ContactPage;
