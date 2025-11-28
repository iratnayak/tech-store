import { addProduct } from "@/actions/product"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AddProductForm() {
    return (
      <Card className="w-[400px] mx-auto mt-10">
          <CardHeader>
              <CardTitle>Add New Product</CardTitle>
          </CardHeader>
          <CardContent>
          <form action={addProduct} className="flex flex-col gap-4">
                <Input name="name" placeholder="Product Name" required />
                <Input name="description" placeholder="Description" required />
                <Input name="price" type="number" placeholder="Price (LKR)" required />
                <Input name="imageUrl" placeholder="Image URL (Optional)" />

                <Button type="submit" className="w-full">Add Product</Button>
            </form>
            </CardContent>
    </Card>
  )
}