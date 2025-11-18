import { Products } from "@/types/products";

export async function getProducts(): Promise<Products[]> {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}
