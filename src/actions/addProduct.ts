'use server'
import { Product } from "@/app/page";
import { revalidateTag } from "next/cache";

export const addProduct = async (e: FormData)=> {
    'use server';

    const product = e.get('product')?.toString()
    const price = e.get('price')?.toString()

    if(!product || !price) { return }

    const newProduct: Product = { product, price }
    await fetch('https://6566e9fe64fcff8d730f4c02.mockapi.io/product', {
      method: 'POST',
      body: JSON.stringify(newProduct),
      headers: {
        'Content-Type': 'application/json '
      }
    })

    revalidateTag('products')
  }