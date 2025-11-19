"use client";
import { featuredProductsConst } from "@/constants/homePageConstants";
import { Products } from "@/types/products";

interface Props {
    product?: Products;
}
const ProductCard = ({ product }: Props) => {

    return (
        <div className="bg-card rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <img
                src={product?.image}
                alt={product?.title}
                className="w-full h-48 object-contain"
            />
            <div className="p-4">
                <h2 className="font-semibold text-lg mb-2">{product?.title}</h2>
            <div className="flex justify-between items-center flex-wrap">
                <span className="text-2xl font-bold text-primary">
                    {featuredProductsConst?.dollar}{product?.price}
                </span>
                <button className="bg-black text-white text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
                    {featuredProductsConst?.dollar}
                </button>
            </div>
            </div>
        </div>
    );
};

export default ProductCard;
