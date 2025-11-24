"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "@/slicer/cartSlice";

export default function PaymentSuccess() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
    localStorage.removeItem("cart");

    window.location.href = "/";
  }, [dispatch]);

  return null;
}
