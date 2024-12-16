"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";
const links = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Men",
        href: "/Men",
    },
    {
        name: "Women",
        href: "/Women",
    },
    {
        name: "Kids",
        href: "/Kids",
    },
    {
        name: "Seniors",
        href: "/Seniors",
    },
]

export default function Navbar() {
    const pathname = usePathname();
    const { handleCartClick } = useShoppingCart();
    return (
        <header className="mb-8">
            <div className="flex items-center justify-between mx-auto  px-4 sm:px-6 lg:px-8">
                <Link href="/">
                    <h1 className="text-2xl font-bold">Sanity Hub</h1>
                </Link>
                <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                    {links.map((link, index) => (
                        <div key={index}>
                            {pathname === link.href ? (
                                <Link href={link.href} className="text-lg font-semibold">
                                    {link.name}
                                </Link>
                            ): (
                                <Link href={link.href} className="text-lg font-semibold">
                                    {link.name}
                                </Link>

                            )}
                        </div>
                    ))}
                </nav>
                <div className="flex border border-black-200">
                    <p onClick={()=>handleCartClick()} className="px-8 text-lg font-semibold cursor-pointer">
                        Cart
                    </p>
                </div>
            </div>
        </header>
    )
}