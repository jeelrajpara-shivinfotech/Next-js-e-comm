"use client";
import { cartConst } from "@/constants/cartConstants";
import { decreaseQty, increaseQty, removeFromCart, selectCartSubtotal } from "@/slicer/cartSlice";
import { RootState } from "@/slicer/store";
import Link from "next/link";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

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
    return (
        <>
            <div
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={onClose}
            />
            <div
                className={`fixed top-0 right-0 w-[380px] h-full bg-white shadow-xl z-50 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold">{cartConst.shoppingCart}</h2>
                    <button onClick={onClose} className="cursor-pointer">
                        <IoCloseSharp className="w-6 h-6" />
                    </button>
                </div>
                <div className="flex flex-col h-[calc(100%-64px)]">
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

                        <button className="mt-4 w-full bg-black text-white py-3 rounded-lg">
                            {cartConst.checkout}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
