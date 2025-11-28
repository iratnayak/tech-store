"use client" // Needs to be client side to access Redux store

import Link from "next/link"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { ShoppingCart } from "lucide-react" // Default icon library in Next.js/shadcn
import { Button } from "@/components/ui/button"

export default function Navbar() {
  // Logic: Selecting the total number of items in the cart
  // useSelector automatically updates this number when the store changes
  const cartItems = useSelector((state: RootState) => state.cart.items)

  // Calculate total quantity (if user adds 2 of same item, it counts as 2)
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <nav className="border-b bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">

            {/* Logo Section */}
            <Link href="/" className="text-2xl font-bold text-orange-500">
                TechStore 🛒
            </Link>

            {/* Cart Section */}
            <div className="flex items-center gap-4">
                <Link href="/cart">
                    <Button variant="outline" className="relative flex items-center gap-2">
                        <ShoppingCart className="h-5 w-5" />
                        <span className="font-semibold">Cart</span>

                        {/* Only show badge if cart has items */}
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </Button>
                </Link>
            </div>
        </div>
    </nav>
  )
}