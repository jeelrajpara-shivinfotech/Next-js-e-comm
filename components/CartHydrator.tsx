"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart, loadCart } from "@/slicer/cartSlice";

export default function CartHydrator() {
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get("status");
    if (status === "success") {
      dispatch(clearCart());
      localStorage.removeItem("cart");
      return;
    }
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      dispatch(loadCart(JSON.parse(storedCart)));
    }
  }, [dispatch]);

  return null;
}
