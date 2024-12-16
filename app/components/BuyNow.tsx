"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import { ProductCart } from "./AddToCart";

export default function BuyNow({
  currency,
  description,
  image,
  title,
  price,
  id,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(id: string) {
    checkoutSingleItem(id);
  
  }

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
      variant="outline"
      onClick={() => {
        buyNow(product.id);
      }}
    >
      Buy Now
    </Button>
  );
}