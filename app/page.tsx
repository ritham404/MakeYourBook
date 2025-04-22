import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Instagram, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
              <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center">
                <span className="text-white text-xs">MB</span>
              </div>
              <span>MakeABook</span>
            </Link>
          </div>

            <nav className="hidden md:flex items-center space-x-6 ml-auto">
            <Link href="/create-book" className="relative">
              Custom Book
            </Link>
            <Link href="/testimony" className="text-gray-600 hover:text-blue-600 transition-colors">
              Testimony
            </Link>
            <Link href="/previous-works" className="text-gray-600 hover:text-blue-600 transition-colors">
              Previous Works
            </Link>
            </nav>

          <div className="flex items-center">
            <Link href="/cart" className="relative ml-5">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-4 flex h-5 w-5 justify-center rounded-full bg-blue-600 text-xs text-white">
              </span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto py-12 px-4 text-center">
          <h1 className="text-4xl font-bold mb-12 md:text-5xl">Create Your Child&apos;s Book</h1>

          <div className="relative mx-auto max-w-2xl mb-12">
            <Image
              src="/Image1.png?height=400&width=600"
              alt="Magical book illustration"
              width={600}
              height={400}
              className="mx-auto"
              priority
            />
          </div>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded text-lg font-medium h-auto">
          <Link href="/create-book" className="relative">
            
            START CREATING
          </Link>
          </Button>
        </section>

        {/* <section className="container mx-auto py-12 px-4 max-w-md">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold mb-2">Newsletter</h2>
            <p className="text-gray-600">Subscribe to our newsletter for exclusive news and deals.</p>
          </div>

          <div className="flex gap-2">
            <Input type="email" placeholder="Your email address" className="border-gray-300" />
            <Button className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">SUBSCRIBE</Button>
          </div>
        </section> */}
        <section className="container mx-auto py-12 px-4">
          <h2 className="text-2xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            <div className="border p-6 rounded shadow">
              <p className="text-gray-600 mb-4">
          "This was such a magical experience for my child! The book was beautifully crafted and personalized."
              </p>
              <span className="block text-sm font-semibold text-gray-800">- Sarah L.</span>
            </div>
            <div className="border p-6 rounded shadow">
              <p className="text-gray-600 mb-4">
          "I loved how easy it was to create a custom story. My son can't stop reading it!"
              </p>
              <span className="block text-sm font-semibold text-gray-800">- Michael T.</span>
            </div>
            <div className="border p-6 rounded shadow">
              <p className="text-gray-600 mb-4">
          "The illustrations and story were perfect. This is a keepsake we'll treasure forever."
              </p>
              <span className="block text-sm font-semibold text-gray-800">- Emily R.</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center mb-8">Our Previous Works</h2>
          <div className="overflow-x-auto">
            <div className="flex gap-4">
              <div className="min-w-[300px]">
          <Image
            src="/book1.png"
            alt="Previous Work 1"
            width={300}
            height={400}
            className="rounded shadow"
          />
              </div>
              <div className="min-w-[300px]">
          <Image
            src="/book2.png"
            alt="Previous Work 2"
            width={300}
            height={400}
            className="rounded shadow"
          />
              </div>
              <div className="min-w-[300px]">
          <Image
            src="/book3.png"
            alt="Previous Work 3"
            width={300}
            height={400}
            className="rounded shadow"
          />
              </div>
              <div className="min-w-[300px]">
          <Image
            src="/book4.png"
            alt="Previous Work 4"
            width={300}
            height={400}
            className="rounded shadow"
          />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-4 text-sm text-gray-600 mb-4">
            <Link href="/privacy" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-blue-600 transition-colors">
              Terms of Service
            </Link>
          </div>

          <p className="text-sm text-gray-600 mb-4">Copyright © Make A Book 2025.</p>

          <div className="flex justify-center gap-4">
            <Link href="https://instagram.com" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-gray-600 hover:text-blue-600 transition-colors" />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-gray-600 hover:text-blue-600 transition-colors" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
