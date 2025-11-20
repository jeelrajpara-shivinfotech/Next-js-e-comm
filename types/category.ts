import { StaticImageData } from "next/image";
export type Category = {
id?: string | number;
image: string | StaticImageData;
title: string;
};

export interface CategoryCarouselProps {
categories: Category[];
}
