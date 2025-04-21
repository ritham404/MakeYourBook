import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ChildrenBooks() {
  return (
    <div className="container mx-auto py-12 px-4 text-center">
      <h1 className="text-4xl font-bold mb-8">Children Books</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Explore our collection of personalized children's books or create your own custom story.
      </p>
      <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded text-lg font-medium h-auto">
        <Link href="/">CREATE YOUR BOOK</Link>
      </Button>
    </div>
  )
}
