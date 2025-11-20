import { Products } from "@/types/products";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function getProducts(): Promise<Products[]> {
  const res = await fetch(API_URL || "");
  return res.json();
}
