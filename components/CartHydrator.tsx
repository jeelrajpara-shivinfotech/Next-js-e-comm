"use client"
import { loadCart } from "@/slicer/cartSlice";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function CartHydrator() {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedCart = Cookies.get("cart");
    if (savedCart) {
      dispatch(loadCart(JSON.parse(savedCart)));
    }
  }, []);

  return null;
}
