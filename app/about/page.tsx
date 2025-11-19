"use client";
import aboutImage from "@/assets/modern-retail-store-interior.jpeg";
import Image from "next/image";
import { aboutConsts, faqData } from "../../constants/aboutPageConstants";
import BaseHeader from "@/components/BaseComponents/BaseHeader";
import about from "@/assets/about.webp";
import { benefits } from "@/constants/homePageConstants";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function About() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen">
      <BaseHeader
        title={aboutConsts?.header}
        homeLabel={aboutConsts?.home}
        currentLabel={aboutConsts?.header}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="relative w-full h-[800px] mb-20">
          <Image
            src={about}
            alt={aboutConsts?.imgAlt}
            fill
            className="rounded-2xl object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10 pb-24">
          <div>
            <p className="text-xl mb-2 font-medium">{aboutConsts?.title}</p>
            <h2 className="font-semibold leading-normal text-4xl">
              {aboutConsts?.titleDesc}
            </h2>
          </div>
          <div className="leading-relaxed text-xl font-medium">
            {aboutConsts?.para}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {benefits?.map((benefit) => (
          <div
            key={benefit?.id}
            className="bg-gray-50 border border-gray-300 p-6 transition-colors duration-300 flex items-start space-x-4 py-12"
          >
            <div>{benefit?.icon}</div>
            <div className="text-left">
              <h3 className="text-lg font-medium text-gray-900 mb-1">
                {benefit?.title}
              </h3>
              <p className="text-sm text-gray-600">
                {benefit?.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Image
              src={aboutImage}
              height={0}
              width={0}
              className="w-full rounded-2xl shadow-lg"
              alt={aboutConsts?.imgAlt}
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-xl font-medium">{aboutConsts?.faq}</h2>
            <p className="text-4xl font-semibold">{aboutConsts?.faqDesc}</p>
            <div className="space-y-4">
              {faqData?.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-5 cursor-pointer transition-all"
                >
                  <div
                    className="flex justify-between items-center"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className="font-medium text-lg">{item?.question}</h3>
                    <span className="text-xl">
                      {activeIndex === index ? <FiMinus /> : <FiPlus />}
                    </span>
                  </div>

                  {activeIndex === index && (
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {item?.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
