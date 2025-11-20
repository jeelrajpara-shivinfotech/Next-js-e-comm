"use client";

import { Carousel } from "primereact/carousel";
import Image from "next/image";
import Link from "next/link";
import { slides } from "@/constants/homePageConstants";
import BaseButton from "./BaseButton";

export default function HomeCarousel() {
  const responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  const slideTemplate = (slide: any) => {
    return (
      <section className="relative w-full h-[90vh] md:h-[90vh]">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          className="object-cover object-center hidden md:block"
          priority
        />
        <div
          className={`absolute inset-0 block md:hidden bg-gradient-to-r ${slide.bgGradient}`}
        />
        <div className="relative container mx-auto h-full flex items-center px-4 sm:px-6 lg:px-16 z-10">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-12 w-full items-center">
            <div className="space-y-4 md:space-y-6 max-w-lg drop-shadow-md text-center md:text-left px-4 md:px-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg leading-relaxed font-medium">
                {slide.description}
              </p>
              <div className="flex justify-center md:justify-start">
                <BaseButton>
                  <Link href="/shop">{slide.buttonText}</Link>
                </BaseButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="home-carousel fullwidth-carousel">
      <Carousel
        value={slides}
        itemTemplate={slideTemplate}
        numVisible={1}
        numScroll={1}
        circular
        responsiveOptions={responsiveOptions}
        showIndicators={false}
        showNavigators={true}
      />
    </div>
  );
}