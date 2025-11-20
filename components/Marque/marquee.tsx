"use client";
import { marqueeItems } from "@/constants/homePageConstants";
import "./marquee.css"
export default function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-100 py-12">
      <div className="animate-marquee inline-flex gap-24">
        {[...Array(2)].map((_, i) => (
          <div className="flex gap-24" key={i}>
            {marqueeItems.map((item, index) => (
              <span
                key={index}
                className={`text-4xl font-bold ${
                  item.outline ? "text-outline" : ""
                }`}
              >
                {item.text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
