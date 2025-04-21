import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

export default function Cart() {
  return (
    <div className="container mx-auto py-12 px-4 text-center">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>

      <div className="flex flex-col items-center justify-center gap-4 py-12">
        <ShoppingCart className="h-16 w-16 text-gray-300" />
        <h2 className="text-2xl font-semibold">Your cart is empty</h2>
        <p className="text-gray-600 mb-4">Looks like you haven't added any books to your cart yet.</p>

        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link href="/">Start Creating</Link>
        </Button>
      </div>
    </div>
  )
}
