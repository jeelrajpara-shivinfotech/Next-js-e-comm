'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image';
import logo from "../public/logo.png"
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoCloseSharp } from 'react-icons/io5';
import { navbarConst, navLinks } from '@/constants/navbarConstants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-gray-100 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="flex items-center gap-2 font-bold text-2xl text-primary"
          >
            <Image src={logo} alt="logo" height={200} width={150} />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href ?? "#"}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {link?.label}
              </Link>
            ))}
            <button className="bg-black text-white text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              {navbarConst?.cart}
            </button>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <IoCloseSharp className="w-6 h-6" /> : <FaBarsStaggered className="w-6 h-6" />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-border">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href ?? "#"}
                className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link?.label}
              </Link>
            ))}
            <button className="w-full text-left px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
              {navbarConst?.cart}
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}