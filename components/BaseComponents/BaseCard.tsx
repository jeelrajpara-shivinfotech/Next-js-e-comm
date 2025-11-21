"use client";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/slicer/cartSlice";
import { RootState } from "@/slicer/store";
import { Products } from "@/types/products";
import { RiShoppingBag3Line } from "react-icons/ri";
import { featuredProductsConst } from "@/constants/homePageConstants";
import hoverImage from "@/assets/dummy_image.webp";
import Image from "next/image";
import BaseButton from "./BaseButton";

interface Props {
  product?: Products;
}

const BaseCard = ({ product }: Props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const isInCart = cart.some(item => item.id === product?.id);
  const handleButtonClick = () => {
    if (!product) return;
    if (isInCart) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="relative cursor-pointer">
      <div className="relative group/image">
        <div className="relative w-full h-96 bg-gray-100 p-4 rounded-2xl border border-gray-200">
          <Image
            src={product?.image || hoverImage}
            alt={product?.title || ""}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-contain"
          />
        </div>

        <Image
          src={hoverImage}
          alt={product?.title ?? ""}
          fill
          className="bg-gray-100 p-4 rounded-2xl border border-gray-200 object-contain absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/image:opacity-100"
        />
        {isInCart ? (
          <BaseButton
            onClick={handleButtonClick}
            className="flex items-center justify-center gap-2 absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover/image:opacity-100 cursor-pointer bg-red-600 text-white"
          >
            {featuredProductsConst.remove}
          </BaseButton>
        ) : (
          <BaseButton
            onClick={handleButtonClick}
            className="flex items-center justify-center gap-2 absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover/image:opacity-100 cursor-pointer bg-white hover:bg-black hover:text-white"
          >
            {featuredProductsConst?.addToCart}
          </BaseButton>
        )}

      </div>

      <div className="py-4">
        <div className="relative group/title w-fit">
          <h3 className="font-jost text-lg block truncate">
            {product?.title
              ? product.title.length > 15
                ? product.title.slice(0, 15) + "..."
                : product.title
              : ""}
          </h3>

          {product?.title && product.title.length > 10 && (
            <div className="absolute top-full left-0 mt-2 hidden group-hover/title:block z-50">
              <div className="bg-gray-200 text-gray-900 text-xs rounded-md py-2 px-3 shadow-md max-w-xs w-max whitespace-normal wrap-break-words">
                {product.title}
                <div className="absolute bottom-full left-4 w-0 h-0 border-4 border-transparent border-b-gray-200"></div>
              </div>
            </div>
          )}
        </div>

        <p className="text-sm text-gray-500 mt-1">${product?.price}</p>
      </div>
    </div>
  );
};

export default BaseCard;
