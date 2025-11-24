"use client";

import { Carousel } from "primereact/carousel";
import Image from "next/image";
import BaseButton from "./BaseComponents/BaseButton";
import { homePageConsts } from "@/constants/homePageConstants";
import { Category, CategoryCarouselProps } from "@/types/category";
import Link from "next/link";

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
      <div className="category-card group py-5 px-3">
        <div className="card-inner relative w-full h-96 rounded-3xl overflow-hidden shadow-md cursor-pointer">

          <Image
            src={item?.image}
            alt={item?.title}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-fill"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-2xl font-semibold mb-4 text-white">{item?.title}</h2>
            <BaseButton className="bg-white hover:bg-black hover:text-white">
              <Link href="/shop">
                {homePageConsts?.shopNow}
              </Link>
            </BaseButton>
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
