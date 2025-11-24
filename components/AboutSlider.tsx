"use client";

import { Carousel } from "primereact/carousel";
import Image, { StaticImageData } from "next/image";
import image1 from "@/assets/about-slider.webp";
import image2 from "@/assets/about-slider2.webp";
import image3 from "@/assets/about-slider3.webp";
import image4 from "@/assets/about-slider4.webp";
import { aboutConsts } from "@/constants/aboutPageConstants";
import { IoLogoInstagram } from "react-icons/io";
import { motion } from "framer-motion"

export default function AboutSlider() {
    const images: StaticImageData[] = [
        image1,
        image2,
        image3,
        image4,
        image2,
    ];

    const responsiveOptions = [
        {
            breakpoint: "1024px",
            numVisible: 2,
            numScroll: 1,
        },
        {
            breakpoint: "768px",
            numVisible: 2,
            numScroll: 1,
        },
        {
            breakpoint: "480px",
            numVisible: 1,
            numScroll: 1,
        },
    ];

    const ImageCard = ({ src }: { src: StaticImageData }) => (
        <div className="relative group w-full h-[260px] rounded-2xl overflow-hidden cursor-pointer">
            <Image
                src={src}
                alt="instagram"
                width={400}
                height={300}
                className="object-cover w-full h-full"
            />
            <div
                className="
                absolute inset-0 bg-black/40 
                opacity-0 group-hover:opacity-100 
                flex items-center justify-center
                transition-all duration-300
            "
            >
                <IoLogoInstagram className="text-white/40 text-4xl font-extralight" />
            </div>
        </div>
    );

    const itemTemplate = (item: StaticImageData) => {
        return (
            <div className="p-3">
                <ImageCard src={item} />
            </div>
        );
    };

    return (
        <div className="space-y-5">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="text-center text-4xl font-semibold">
                {aboutConsts.shopByHeader}
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }} className="text-center text-gray-500 mt-2">
                {aboutConsts.shopByDesc}
            </motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }} className="hidden lg:grid grid-cols-5 gap-6 mt-12">
                {images.map((img, i) => (
                    <ImageCard key={i} src={img} />
                ))}
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="lg:hidden mt-12">
                <Carousel
                    value={images}
                    itemTemplate={itemTemplate}
                    numVisible={1.2}
                    numScroll={1}
                    responsiveOptions={responsiveOptions}
                    showIndicators={false}
                    showNavigators={false}
                    circular
                />
            </motion.div>
        </div>
    );
}
