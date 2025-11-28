"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function addProduct(formData: FormData) {
    const name = formData.get("name") as string
    const description = formData.get("description") as string
    const price = parseFloat(formData.get("price") as string)
    const imageUrl = formData.get("imageUrl") as string || "https://placehold.co/600x400"

    await db.product.create({
        data: {
          name,
          description,
          price,
          imageUrl,
        },
      })
      revalidatePath("/")
}