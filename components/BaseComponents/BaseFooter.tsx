'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'
import { VisaCard } from '@/assets/cardSvg'
import logo1 from "@/assets/logo1.webp"
import { contactInfo, copyWrite, infoLinks, newsletter, quickLinks } from '@/constants/footerConstants'
import BaseInput from './BaseInput'

export default function Footer() {
  const logos = [logo1, logo1, logo1, logo1, logo1]

  return (
    <footer className="bg-gray-100 mt-16">
      <div className="w-full bg-gray-100 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-10 items-center">
            {logos?.map((logo, i) => (
              <div key={i} className="flex justify-center opacity-60 hover:opacity-100 transition">
                <Image
                  src={logo}
                  alt={`brand-${i}`}
                  className="h-14 md:h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300">
        <div className="container px-16 sm:px-6 lg:px-16 py-16">
          <div className="grid grid-cols-1 gap-10 sm:gap-16 md:grid-cols-4">
            <div className="font-jost">
              <h3 className="mb-5 text-2xl text-foreground">{contactInfo?.title}</h3>
              <p className="mb-4 text-xl text-slate-600">{contactInfo?.subtitle}</p>
              <div className="mb-4">
                <p className="font-medium">{contactInfo?.hotlineLabel}</p>
                <p className="text-xl text-slate-600">{contactInfo?.hotlineValue}</p>
              </div>
              <div>
                <p className="font-medium">{contactInfo?.addressLabel}</p>
                <p className="text-xl text-slate-600">{contactInfo?.addressValue}</p>
              </div>
            </div>
            <div className="font-jost">
              <h3 className="mb-5 text-2xl text-foreground">{quickLinks?.title}</h3>
              <ul className="space-y-3">
                {quickLinks?.links?.map((item, i) => (
                  <li key={i}>
                    <Link href="#" className="text-slate-600 hover:text-foreground transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="font-jost">
              <h3 className="mb-5 text-2xl text-foreground">{infoLinks?.title}</h3>
              <ul className="space-y-3">
                {infoLinks?.links?.map((item, i) => (
                  <li key={i}>
                    <Link href="#" className="text-slate-600 hover:text-foreground transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="font-jost">
              <h3 className="mb-6 text-2xl text-foreground">{newsletter?.title}</h3>
              <p className="mb-6 text-xl text-slate-600">{newsletter?.subtitle}</p>
              <div className="flex w-full">
                <BaseInput
                  type="email"
                  placeholder={newsletter?.placeholder}
                  rightElement={
                    <FaArrowRight className="h-5 w-5 text-gray-600" />
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 bg-gray-100">
          <div className="container mx-auto px-16 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="font-jost text-center md:text-left">
                {copyWrite}
              </p>

              <div className="flex flex-wrap gap-2 justify-center">
                <VisaCard />
                <VisaCard />
                <VisaCard />
                <VisaCard />
                <VisaCard />
                <VisaCard />
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
