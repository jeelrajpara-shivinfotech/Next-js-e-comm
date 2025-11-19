'use client'
import { useState } from 'react'
import Link from 'next/link'
import carouselImage from "@/assets/carousel-bg-1.png"
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
    <section className={`relative w-full h-[70vh] bg-linear-to-br ${slide?.bgGradient ?? ''} transition-colors duration-1000 overflow-hidden`}>
      <div className="max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 w-full items-center">
          <div className="space-y-6 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-jost lg:text-6xl font-bold text-gray-900 leading-tight text-balance mt-4">
              {slide?.title}
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed pt-5">
              {slide?.description}
            </p>
            <BaseButton>
            <Link
              href="/shop"
            >
              {slide?.buttonText}
            </Link>
            </BaseButton>
          </div>
          <div className="relative h-64 md:h-80 lg:h-96 hidden lg:block md:block">
            <Image
              src={carouselImage}
              alt={slide?.title}
              height={0}
              width={0}
              className="w-full h-full object-cover"
            />
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
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-gray-900 w-8'
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
