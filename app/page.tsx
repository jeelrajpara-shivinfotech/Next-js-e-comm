"use client"
import Carousel from "@/components/BaseComponents/BaseCarousel";
import BaseSkeleton from "@/components/BaseComponents/BaseSkeleton";
import CategoryCarousel from "@/components/categoryCarousel";
import Marquee from "@/components/Marque/marquee";
import { benefits, categories, featuredProductsConst } from "@/constants/homePageConstants";
import { Products } from "@/types/products";
import { getProducts } from "@/utils/productApi";
import { useEffect, useState } from "react";
import { RiShoppingBag3Line } from "react-icons/ri";

export default function Home() {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError('Failed to load products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
  return (
    <div className="container mx-auto px-16 sm:px-6 lg:px-16 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <BaseSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}


  const limitedItems = products?.slice(0, 4);

  return (
    <div className="min-h-screen">
      <Carousel />
      <section className="w-full border-t border-b border-gray-200 bg-white">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            {benefits?.map((benefit) => (
              <div
                key={benefit?.id}
                className="bg-gray-50 border border-gray-300 p-6 transition-colors duration-300 flex items-start space-x-4 py-12"
              >
                <div className="">{benefit?.icon}</div>
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
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CategoryCarousel categories={categories}/>
      </section>
      
      <section className="container mx-auto px-16 sm:px-6 lg:px-16 py-16">
        <div className="flex justify-center items-center mb-12">
          <h2 className="text-4xl text-center font-medium font-jost">{featuredProductsConst?.header}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {limitedItems?.map((product) => (
            <div
              key={product.id}
              className="group relative "
            >
              <div className="relative">
                <img
                  src={product?.image}
                  alt={product?.title}
                  className="w-full h-80 bg-gray-100 p-4 rounded-2xl border border-gray-200 object-contain"
                />
                <div className="flex items-center justify-center gap-2 absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white px-4 py-2 rounded-lg transition-all duration-300 shadow hover:bg-white hover:text-black cursor-pointer">
                  <RiShoppingBag3Line />
                  <button className="cursor-pointer">
                    <div>{featuredProductsConst?.addToCart}</div>
                  </button>
                </div>
              </div>
              <div className="py-4">
                <h3 className="font-jost text-lg">
                  {product?.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {featuredProductsConst?.dollar}{product?.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <Marquee/>
      </section>
    </div>
  );
}
