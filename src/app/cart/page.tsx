"use client"

import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/store/store"
import { removeFromCart } from "@/store/cartSlice"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Trash2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function CartPage() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  
  // State to show loading on button
  const [isLoading, setIsLoading] = useState(false)

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id))
  }

  // Handle Checkout (New Method)
  const handleCheckout = async () => {
    setIsLoading(true)
    try {
        // Call Backend
        const response = await fetch("/api/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: cartItems }),
        })

        const data = await response.json()

        // Redirect user to Stripe Checkout Page
        if (data.url) {
            window.location.href = data.url
        } else {
            console.error("No URL returned from Stripe")
            alert("Payment failed to start.")
        }
    } catch (error) {
        console.error("Checkout Error:", error)
        alert("Something went wrong!")
    } finally {
        setIsLoading(false)
    }
  }

  return (
    <main className="container mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8 text-slate-800">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20 bg-slate-50 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">Your cart is empty 😔</h2>
            <Link href="/">
                <Button>Continue Shopping</Button>
            </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                    <Card key={item.id} className="flex items-center p-4">
                        <div className="h-24 w-24 relative flex-shrink-0">
                            <img 
                                src={item.imageUrl} 
                                alt={item.name} 
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                        <div className="ml-6 flex-1">
                            <h3 className="text-lg font-bold">{item.name}</h3>
                            <p className="text-gray-500">LKR {item.price.toLocaleString()}</p>
                            <div className="mt-2 text-sm text-gray-600">
                                Quantity: <span className="font-bold">{item.quantity}</span>
                            </div>
                        </div>
                        <Button 
                            variant="destructive" 
                            size="icon" 
                            onClick={() => handleRemove(item.id)}
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </Card>
                ))}
            </div>

            {/* Order Summary */}
            <div>
                <Card className="p-6 sticky top-24">
                    <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                    <div className="flex justify-between mb-2 text-gray-600">
                        <span>Subtotal</span>
                        <span>LKR {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between font-bold text-lg mb-6">
                        <span>Total</span>
                        <span>LKR {subtotal.toLocaleString()}</span>
                    </div>

                    {/* Checkout Button */}
                    <Button 
                        className="w-full size-lg bg-green-600 hover:bg-green-700"
                        onClick={handleCheckout}
                        disabled={isLoading}
                    >
                        {isLoading ? "Processing..." : "Checkout (Pay with Stripe)"}
                    </Button>
                </Card>
            </div>
        </div>
      )}
    </main>
  )
}