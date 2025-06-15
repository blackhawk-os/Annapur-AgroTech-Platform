import React from "react";
import CompanyDetails from "./CompanyDetails";
import PText from "./PText";
import HeaderText from "@/components/HeaderText";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Details() {
  return (
    <div className="flex flex-col gap-10 items-start justify-start w-[50%] ">
      <div className="flex flex-col gap-10 w-[50%]">
        <div className="w-full">
          <HeaderText
            text2="CONTACT US"
            className="text-[38px] tracking-[0.02em] text-left"
          />
          <PText text="Please leave us a message so we can clear all your doubts!  Our team will get back to you within 1-3 business days. " />
        </div>
        <div className="flex flex-col gap-4">
          <CompanyDetails
            text="support@annapur.com"
            icon={<Mail size={18} className="text-[#88B04B] font-normal" />}
          />
          <CompanyDetails
            text="+977 984-1234567"
            icon={<Phone size={18} className="text-[#88B04B] font-normal" />}
          />
          <CompanyDetails
            text="Lalitpur, Nepal"
            icon={<MapPin size={18} className="text-[#88B04B] font-normal" />}
          />
        </div>
      </div>
    </div>
  );
}
