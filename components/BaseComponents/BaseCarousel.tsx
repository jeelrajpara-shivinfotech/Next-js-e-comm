'use client'
import { useState } from 'react'
import Link from 'next/link'
import carouselImage from "@/assets/slider-1.webp"
import Image from 'next/image'
import { PiGreaterThan, PiLessThan } from 'react-icons/pi'
import { slides } from '@/constants/homePageConstants'
import BaseButton from './BaseButton'

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (slides?.length ?? 1))
  }
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (slides?.length ?? 1)) % (slides?.length ?? 1))
  }
  const slide = slides?.[currentSlide]
  return (
    <section
      className="relative w-full h-[90vh] bg-center bg-cover bg-no-repeat transition-colors duration-1000 overflow-hidden"
      style={{
        backgroundImage: `url(${carouselImage.src})`,
      }}
    >
      <div className="container mx-auto h-full flex items-center px-16 sm:px-6 lg:px-16 relative z-10 space-y-4 ">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 w-full items-center px-10">
          <div className="space-y-6 max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mt-4">
              {slide?.title}
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              {slide?.description}
            </p>
            <BaseButton>
              <Link href="/shop">
                {slide?.buttonText}
              </Link>
            </BaseButton>
          </div>
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full transition-colors cursor-pointer"
      >
        <PiLessThan className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full transition-colors cursor-pointer"
      >
        <PiGreaterThan className="w-6 h-6" />
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides?.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                ? 'bg-gray-900 w-8'
                : 'bg-gray-400 hover:bg-gray-600'
              }`}
          />
        ))}
      </div>
    </section>
  )
}
