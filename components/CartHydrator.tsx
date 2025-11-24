"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCart } from "@/slicer/cartSlice";

export default function CartHydrator() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      dispatch(loadCart(JSON.parse(storedCart)));
    }
  }, [dispatch]);

  return null;
}
