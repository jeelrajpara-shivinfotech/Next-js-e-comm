"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "@/slicer/cartSlice";
import { Products } from "@/types/products";
import { RiShoppingBag3Line } from "react-icons/ri";
import { featuredProductsConst } from "@/constants/homePageConstants";
import hoverImage from "@/assets/dummy_image.webp"
import Image from "next/image";

interface Props {
  product?: Products;
}

const BaseCard = ({ product }: Props) => {
  const dispatch = useDispatch();

  return (
    <div className="group relative cursor-pointer">
      <div className="relative">
        <img
          src={product?.image}
          alt={product?.title}
          className="w-full h-96 bg-gray-100 p-4 rounded-2xl border border-gray-200 object-contain"
        />
        <Image
          src={hoverImage}
          alt={product?.title ?? ""}
          fill
          className="bg-gray-100 p-4 rounded-2xl border border-gray-200 object-contain absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <div
          onClick={() => dispatch(addToCart(product!))}
          className="flex items-center justify-center gap-2 absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 
          group-hover:opacity-100 bg-black text-white px-4 py-2 rounded-lg transition-all shadow 
          hover:bg-white hover:text-black cursor-pointer"
        >
          <RiShoppingBag3Line />
          <span>{featuredProductsConst?.addToCart}</span>
        </div>
      </div>

      <div className="py-4">
        <h3 className="font-jost text-lg">{product?.title}</h3>
        <p className="text-sm text-gray-500 mt-1">${product?.price}</p>
      </div>
    </div>
  );
};

export default BaseCard;
