import { Products } from "@/types/products";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProducts(): Promise<Products[]> {
  try {
    const res = await fetch(API_URL || "https://fakestoreapi.com/products", {
      cache: 'force-cache', 
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const contentType = res.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Response is not JSON');
    }

    return await res.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; 
  }
}