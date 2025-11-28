import BaseCard from "@/components/BaseComponents/BaseCard";
import HomeCarousel from "@/components/BaseComponents/BaseCarousel";
import BaseAnimatedHeading from "@/components/BaseComponents/BaseHeader";
import CategoryCarousel from "@/components/categoryCarousel";
import Marquee from "@/components/Marque/marquee";
import { benefits, categories, featuredProductsConst } from "@/constants/homePageConstants";
import { getProducts } from "@/utils/productApi";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home",
    description: "Welcome to the best online store",
  };
}

export default async function Home() {
  const products = await getProducts();
  const limitedItems = products?.slice(0, 4);

  return (
    <div className="min-h-screen">
      <HomeCarousel />
      <section className="w-full border-t border-b border-gray-200 bg-white">
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
      </section>
      <section className="container mx-auto px-5  lg:px-8 py-16">
        <CategoryCarousel categories={categories}/>
      </section>
      <section className="container mx-auto px-5 lg:px-16 py-16">
        <div className="flex justify-center mb-12">
          <BaseAnimatedHeading title={featuredProductsConst?.header}/>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {limitedItems?.map((product) => (
            <BaseCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <Marquee />
    </div>
  );
}
