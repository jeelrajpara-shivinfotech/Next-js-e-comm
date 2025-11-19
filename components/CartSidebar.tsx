"use client";
import { cartConst } from "@/constants/cartConstants";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";

interface CartSidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
    return (
        <>
            <div
                className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={onClose}
            />
            <div
                className={`fixed top-0 right-0 h-full w-[380px] bg-white shadow-xl z-50 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <h2 className="text-lg font-medium">{cartConst?.shoppingCart}</h2>
                    <button onClick={onClose} className="cursor-pointer">
                        <IoCloseSharp className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-4">
                    <h3 className="text-xl font-medium mb-2">{cartConst?.cartEmpty}</h3>

                    <Link
                        href="/shop"
                        onClick={onClose}
                        className="underline"
                    >
                        {cartConst?.continueShopping}
                    </Link>
                </div>
            </div>
        </>
    );
}
