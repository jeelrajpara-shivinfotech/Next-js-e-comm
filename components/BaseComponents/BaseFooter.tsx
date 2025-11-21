"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import BaseInput from "./BaseInput";
import { contactInfo, quickLinks, infoLinks, newsletter, copyWrite } from "@/constants/footerConstants";
import { FaMinus, FaPlus } from "react-icons/fa6";
import logo1 from "@/assets/logo1.webp"
import Image from "next/image";
import { AmericanExpress, DinnersClub, Discover, Mastercard, PayPal, VisaCard } from "@/assets/cardSvg";
import BaseButton from "./BaseButton";

const Footer: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const logos = [logo1, logo1, logo1, logo1, logo1]
  const sections = [
    {
      title: contactInfo.title,
      content: (
        <div className="">
          <p className="mb-4 text-xl text-slate-600">{contactInfo.subtitle}</p>
          <div className="mb-4">
            <p className="font-medium">{contactInfo.hotlineLabel}</p>
            <p className="text-xl text-slate-600">{contactInfo.hotlineValue}</p>
          </div>
          <div>
            <p className="font-medium">{contactInfo.addressLabel}</p>
            <p className="text-xl text-slate-600">{contactInfo.addressValue}</p>
          </div>
        </div>
      ),
    },
    {
      title: quickLinks.title,
      content: (
        <ul className="space-y-3 font-jost">
          {quickLinks.links.map((item, i) => (
            <li key={i}>
              <Link
                href="#"
                className="text-slate-600 hover:text-foreground transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: infoLinks.title,
      content: (
        <ul className="space-y-3 font-jost">
          {infoLinks.links.map((item, i) => (
            <li key={i}>
              <Link
                href="#"
                className="text-slate-600 hover:text-foreground transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: newsletter.title,
      content: (
        <div className="font-jost">
          <p className="mb-6 text-xl text-slate-600">{newsletter.subtitle}</p>
          <div className="flex w-full">
            <BaseInput
              type="email"
              placeholder={newsletter.placeholder}
              rightElement={<FaArrowRight className="h-5 w-5 text-gray-600" />}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <footer className="bg-gray-100 mt-16">
      <div className="w-full bg-gray-100 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-10 items-center">
            {logos?.map((logo, i) => (
              <div key={i} className="flex justify-center opacity-60 hover:opacity-100 transition">
                <Image
                  src={logo}
                  alt={`brand-${i}`}
                  className="h-14 md:h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300">
        <div className="container mx-auto px-5 lg:px-16 py-16">
          <div className="hidden md:grid grid-cols-1 gap-10 sm:gap-16 md:grid-cols-4">
            {sections.map((section, i) => (
              <div key={i}>
                <h3 className="mb-5 text-2xl text-foreground font-jost">{section.title}</h3>
                {section.content}
              </div>
            ))}
          </div>

          <div className="md:hidden flex flex-col space-y-4">
            {sections.map((section, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                <BaseButton
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left font-jost text-2xl text-foreground"
                >
                  {section.title}
                  {openIndex === i ? <FaMinus /> : <FaPlus />}
                </BaseButton>
                <div
                  className={`transition-all duration-300 px-4 overflow-hidden ${openIndex === i ? "max-h-[1000px] py-4" : "max-h-0"
                    }`}
                >
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
       <div className="border-t border-slate-200 bg-gray-100">
          <div className="container mx-auto px-16 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="font-jost text-center md:text-left">
                {copyWrite}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <VisaCard />
                <Mastercard />
                <PayPal />
                <AmericanExpress />
                <Discover />
                <DinnersClub />
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
