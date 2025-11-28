import AddProductForm from "@/components/AddProductForm";
import ProductCard from "@/components/ProductCard";
import { Product } from "@prisma/client"
import { db } from "@/lib/db";


interface ProductType {
  id: string;
  name: string;
  description: string;
  price: number; 
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

export default async function Home() {
  
  const rawProducts = await db.product.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });

  const products: ProductType[] = rawProducts.map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: Number(product.price),
    imageUrl: product.imageUrl,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt
  }));
  return (
    <main className="container mx-auto p-10 space-y-10">
      <h1 className="text-4xl font-bold text-center text-black">TechStore Admin</h1>
      
      <AddProductForm />

      <hr className="my-10" />

      <section>
        <h2 className="text-2xl font-bold mb-6">Available Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>

        {products.length === 0 && (
            <p className="text-center text-gray-500">No products found. Add some above!</p>
        )}
      </section>
      
    </main>
  );
}