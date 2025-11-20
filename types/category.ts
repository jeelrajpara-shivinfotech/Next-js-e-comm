export type Category = {
id: string | number;
image: string;
title: string;
};

export interface CategoryCarouselProps {
categories: Category[];
}
