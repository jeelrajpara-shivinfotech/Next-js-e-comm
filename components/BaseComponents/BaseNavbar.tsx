"use client";

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image';
import logo from "@/assets/logo.webp"
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoCloseSharp } from 'react-icons/io5';
import { navLinks } from '@/constants/navbarConstants';
import CartSidebar from "@/components/CartSidebar";
import BaseCartIcon from './BaseCartIcon';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-50 bg-gray-50 border-b border-gray-100 shadow-sm">
        <div className="container px-16 sm:px-6 lg:px-16 py-2">
          <div className="flex justify-between items-center h-16">
            <Link 
              href="/" 
              className="flex items-center gap-2 font-bold text-2xl text-primary"
            >
              <Image src={logo} alt="logo" height={0} width={0} />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {navLinks?.map((link) => (
                <Link
                  key={link?.href}
                  href={link?.href ?? "#"}
                  className="text-lg hover:text-primary transition-colors duration-200 font-medium"
                >
                  {link?.label}
                </Link>
              ))}
              <BaseCartIcon onClick={() => setCartOpen(true)} />
            </div>
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="text-foreground hover:text-primary transition-colors"
              >
                <FaBarsStaggered className="w-6 h-6" />
              </button>
              <BaseCartIcon onClick={() => setCartOpen(true)} />
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-50 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg border-r transition-transform duration-300
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-lg font-semibold">Menu</span>
            <button onClick={() => setIsOpen(false)}>
              <IoCloseSharp className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col py-4">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href ?? "#"}
                className="px-6 py-3 text-foreground hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link?.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
