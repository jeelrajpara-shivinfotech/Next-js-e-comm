import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/utils/productApi";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import homePageImage from "../public/homePageImage.jpeg"
import Image from "next/image";
import { GoShield, GoZap } from "react-icons/go";
import { FaRegStar } from "react-icons/fa6";
import { featuredProductsConsts, featuredSectionConsts, homePageConsts } from "@/constants/homePageConstants";

export default async function Home() {
  const products = await getProducts();
  const limitedItems = products.slice(0, 4)
  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              {homePageConsts.header}
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              {homePageConsts.headerDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                {homePageConsts.shopNow} <BsArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center border border-gray-200 px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
              >
                {homePageConsts.learnMore}
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src={homePageImage}
              alt="Premium tech products"
              height={500}
              width={500}
              className="w-full h-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-bold text-center mb-12">{featuredSectionConsts.header}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-xl border border-gray-200">
            <GoZap className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">{featuredSectionConsts.card1Header}</h3>
            <p className="text-gray-600">
              {featuredSectionConsts.card1Desc}
            </p>
          </div>
          <div className="bg-card p-8 rounded-xl border border-gray-200">
            <GoShield className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">{featuredSectionConsts.card2Header}</h3>
            <p className="text-muted-foreground">
              {featuredSectionConsts.card2Desc}
            </p>
          </div>
          <div className="bg-card p-8 rounded-xl border border-gray-200">
            <FaRegStar className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">{featuredSectionConsts.card3Header}</h3>
            <p className="text-muted-foreground">
              {featuredSectionConsts.card3Desc}
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex justify-between items-center my-6">
          <h2 className="text-3xl font-bold">{featuredProductsConsts.header}</h2>
          <Link
            href="/shop"
            className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2"
          >
            {featuredProductsConsts.viewAll} <BsArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {limitedItems.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
