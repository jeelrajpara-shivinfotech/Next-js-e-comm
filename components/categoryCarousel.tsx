"use client";

import { Carousel } from "primereact/carousel";
import Image from "next/image";
import BaseButton from "./BaseComponents/BaseButton";
import { homePageConsts } from "@/constants/homePageConstants";
import { Category, CategoryCarouselProps } from "@/types/category";

export default function CategoryCarousel({ categories }: CategoryCarouselProps) {
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];
  const itemTemplate = (item: Category) => {
    return (
      <div className="category-card">
        <div className="card-inner relative w-full h-96 rounded-3xl overflow-hidden shadow-md cursor-pointer">
          <Image src={item?.image} alt={item?.title} fill className="object-fill hover:bg-black" />

          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-2xl font-semibold mb-4 text-white">{item?.title}</h2>
            <BaseButton>{homePageConsts?.shopNow}</BaseButton>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      <Carousel
        value={categories}
        numVisible={3}
        numScroll={1}
        circular
        itemTemplate={itemTemplate}
        showIndicators={false}
        showNavigators={true}
        responsiveOptions={responsiveOptions}
        className="my-cat-carousel"
      />
    </div>
  );
}
