"use client"
import { CartProvider } from "use-shopping-cart"

export default function Cart({ children }: { children: React.ReactNode }) {
    return (
        <CartProvider 
        mode="payment" 
        cartMode="client-only" 
        stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string}
        successUrl="http://localhost:3000/success"
        cancelUrl="http://localhost:3000/cancel"
        currency="INR"
        billingAddressCollection={true}
        shouldPersist={true}
        language="en-US"
        >
            {children}
        </CartProvider>
    )
}