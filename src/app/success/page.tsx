import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Payment Successful! 🎉</h1>
        <p className="text-lg text-gray-600 mb-8">Thank you for your purchase. Your order is being processed.</p>
        <Link href="/">
            <Button>Go Back Home</Button>
        </Link>
    </div>
  )
}