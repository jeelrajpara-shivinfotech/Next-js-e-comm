"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/slicer/store";
import { selectCartCount } from "@/slicer/cartSlice";
import { RiShoppingBag3Line } from "react-icons/ri";

interface Props {
  onClick?: () => void;
}

export default function BaseCartIcon({ onClick }: Props) {
  const count = useSelector((state: RootState) => selectCartCount(state));

  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <RiShoppingBag3Line className="w-7 h-7" />

      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 py-0.5 rounded-full">
          {count}
        </span>
      )}
    </div>
  );
}
