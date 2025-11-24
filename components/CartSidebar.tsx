"use client";
import { cartConst } from "@/constants/cartConstants";
import { decreaseQty, increaseQty, removeFromCart, selectCartSubtotal } from "@/slicer/cartSlice";
import { RootState } from "@/slicer/store";
import Link from "next/link";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import BaseButton from "./BaseComponents/BaseButton";

interface CartSidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
    const { cart } = useSelector((state: RootState) => state.cart);
    const subtotal = useSelector((state: RootState) =>
        selectCartSubtotal(state)
    );
    const dispatch = useDispatch();
    const handleCheckout = async () => {
        const res = await fetch("/api/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: cart }),
        });

        const data = await res.json();
        if (data.url) {
            window.location.href = data.url;
        }
    };

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/40 scale-z-100 transition-opacity ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={onClose}
            />
            <div
                className={`fixed top-0 right-0 lg:w-[380px] md:w-[400px] w-full z-100 h-full bg-white shadow-x  transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold">{cartConst.shoppingCart}</h2>
                    <BaseButton onClick={onClose} className="cursor-pointer">
                        <IoCloseSharp className="w-6 h-6" />
                    </BaseButton>
                </div>
                <div className="flex flex-col h-[calc(100%-64px)] py-4">
                    <div className="flex-1 overflow-y-auto p-4">
                        {cart.length === 0 ? (
                            <div>
                                <p className="text-gray-500 ">{cartConst.cartEmpty}</p>
                                <Link href="/shop"
                                    onClick={onClose}
                                    className="underline">{cartConst?.continueShopping}</Link>
                            </div>
                        ) : (
                            cart.map(item => (
                                <div key={item.id} className="flex gap-4">
                                    <img
                                        src={item.image}
                                        className="w-20 h-20 bg-gray-100 p-2 rounded object-contain"
                                    />

                                    <div className="flex-1">
                                        <h3 className="font-medium">{item.title}</h3>
                                        <p className="text-sm">${item.price}</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <button
                                                onClick={() => dispatch(decreaseQty(item.id))}
                                                className="border border-gray-200 px-2 py-1 rounded cursor-pointer"
                                            >
                                                <FaMinus className="h-4 w-4" />
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                onClick={() => dispatch(increaseQty(item.id))}
                                                className="border border-gray-200 px-2 py-1 rounded cursor-pointer"
                                            >
                                                <FaPlus className="h-4 w-4" />
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => dispatch(removeFromCart(item.id))}
                                            className="text-red-500 text-sm mt-2"
                                        >
                                            {cartConst.remove}
                                        </button>
                                    </div>
                                </div>

                            ))
                        )}
                    </div>
                    <div className="border-t border-gray-200 p-4 bg-white shadow-inner">
                        <div className="flex justify-between text-lg font-semibold">
                            <span>{cartConst.subtotal}</span>
                            <span>{cartConst.dollar}{subtotal.toFixed(2)}</span>
                        </div>

                        <BaseButton
                            onClick={cart.length === 0 ? undefined : handleCheckout}
                            disabled={cart.length === 0}
                            className={`mt-4 w-full bg-black text-white py-3 rounded-lg ${cart.length === 0 ? "cursor-not-allowed" : "cursor-pointer"}`}
                        >
                            {cartConst.checkout}
                        </BaseButton>
                    </div>
                </div>
            </div>
        </>
    );
}
