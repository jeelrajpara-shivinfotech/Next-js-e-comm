"use client";
import aboutImage from "@/assets/modern-retail-store-interior.jpeg";
import Image from "next/image";
import { aboutConsts, faqData } from "../../constants/aboutPageConstants";
import about from "@/assets/about.webp";
import { benefits } from "@/constants/homePageConstants";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { motion } from "framer-motion"

export default function About() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-5 lg:px-16 py-14">
        <div className="relative w-full aspect-video mb-20">
          <Image
            src={about}
            alt={aboutConsts?.imgAlt}
            fill
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-10 pb-24">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xl mb-2 font-medium">{aboutConsts?.title}</p>
            <h2 className="font-semibold leading-normal text-4xl">
              {aboutConsts?.titleDesc}
            </h2>
          </motion.div>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="leading-relaxed text-xl font-medium">
            {aboutConsts?.para}
          </motion.div>
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

      <div className="container mx-auto px-5 lg:px-16 py-16">
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
