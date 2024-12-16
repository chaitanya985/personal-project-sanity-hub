"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface ProductCart {
  title: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  id: string;
}

export default function AddToBag({
  currency,
  description,
  image,
  title,
  price,
  id
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    title: title,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    id: id,
  };
  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
}