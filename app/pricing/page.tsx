import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Pricing() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Pricing & Shipping</h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Pricing</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Softcover Book</span>
                <span className="font-semibold">$29.99</span>
              </li>
              <li className="flex justify-between">
                <span>Hardcover Book</span>
                <span className="font-semibold">$39.99</span>
              </li>
              <li className="flex justify-between">
                <span>Premium Edition</span>
                <span className="font-semibold">$49.99</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Shipping</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Standard Shipping (5-7 days)</span>
                <span className="font-semibold">$4.99</span>
              </li>
              <li className="flex justify-between">
                <span>Express Shipping (2-3 days)</span>
                <span className="font-semibold">$9.99</span>
              </li>
              <li className="flex justify-between">
                <span>International Shipping</span>
                <span className="font-semibold">$14.99</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
