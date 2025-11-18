'use client'

import Link from 'next/link'
import logo from "../public/logo.png"
import Image from 'next/image'
import { footerConsts, footerLinks } from '@/constants/footerConstants'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaMapPin } from 'react-icons/fa'
import { FaPhone , FaTwitter } from 'react-icons/fa6'
import { IoMail } from 'react-icons/io5'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-1">
            <Link 
              href="/" 
              className="flex items-center gap-2 font-bold text-xl text-primary mb-4"
            >
             <Image src={logo} alt='logo' height={200} width={150}/> 
            </Link>
            <p className="text-foreground text-sm leading-relaxed mb-4">
                {footerConsts.label1}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-foreground text-sm flex-wrap">
                <IoMail className="w-4 h-4 text-primary" />
                <span>{footerConsts.email}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground text-sm flex-wrap">
                <FaPhone className="w-4 h-4 text-primary" />
                <span>{footerConsts.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground text-sm flex-wrap">
                <FaMapPin className="w-4 h-4 text-primary" />
                <span>{footerConsts.address}</span>
              </div>
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-foreground hover:text-primary text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 my-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground text-sm mb-4 md:mb-0">
            {footerConsts.reserved} {currentYear} {footerConsts.allRightsReserved}
          </p>
          <div className="flex gap-6 flex-wrap cursor-pointer">
            <FaTwitter/>
            <FaFacebook/>
            <FaInstagram/>
            <FaLinkedinIn/>
          </div>
        </div>
      </div>
    </footer>
  )
}
