import { NextResponse } from "next/server"
import Stripe from "stripe"

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request) {
  try {
    const { items } = await req.json()

    // Transform cart items to Stripe line items format
    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: "lkr", // Currency set to Sri Lankan Rupees
        product_data: {
          name: item.name,
          images: [item.imageUrl],
        },
        unit_amount: Math.round(item.price * 100), // Stripe expects amount in cents
      },
      quantity: item.quantity,
    }))

    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000/success", // Redirect here on success
      cancel_url: "http://localhost:3000/cart",   // Redirect here on cancel
    })

    return NextResponse.json({ url: session.url })
    
} catch (error) {
  console.error("Stripe Error:", error)
  return NextResponse.json({ error: "Error creating checkout session" }, { status: 500 })
}
}