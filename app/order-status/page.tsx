import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function OrderStatus() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Order Status</h1>

      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Check Order Status</CardTitle>
          <CardDescription>Enter your order number to check the status of your order</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="order-number">Order Number</Label>
              <Input id="order-number" placeholder="Enter your order number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email address" />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Check Status</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
