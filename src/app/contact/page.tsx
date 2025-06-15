import Breadcrumb from "@/components/BreadCrumbs/BreadCrumb";
import ContactUs from "@/components/ui/Contact-Us/ContactUs";
import Details from "@/components/ui/Contact-Us/Details";
import React from "react";

export default function ContactUsPage() {
  return (
    <>
      <Breadcrumb />
      <div className="flex flex-row  mx-20 h-screen">
        <Details />
        <ContactUs />
      </div>
    </>
  );
}
