"use client"
import BaseCard from "@/components/BaseComponents/BaseCard";
import HomeCarousel from "@/components/BaseComponents/BaseCarousel";
import BaseSkeleton from "@/components/BaseComponents/BaseSkeleton";
import CategoryCarousel from "@/components/categoryCarousel";
import Marquee from "@/components/Marque/marquee";
import { benefits, categories, featuredProductsConst } from "@/constants/homePageConstants";
import { Products } from "@/types/products";
import { getProducts } from "@/utils/productApi";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
      <HomeCarousel />
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
          <motion.h2 initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }} className="text-4xl text-center font-medium font-jost">{featuredProductsConst?.header}</motion.h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {limitedItems?.map((product) => (
            <BaseCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section>
        <Marquee />
      </section>
    </div>
  );
}
