import { Products } from "@/types/products";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProducts(): Promise<Products[]> {
  if (!API_URL) {
    throw new Error("NEXT_PUBLIC_API_URL is missing!");
  }

  const res = await fetch(API_URL, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch products: " + res.statusText);
  }

  return res.json();
}

