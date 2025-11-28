/* eslint-disable @next/next/no-img-element */
"use client" 

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useDispatch } from "react-redux" 
import { addToCart } from "@/store/cartSlice" 

interface ProductCardProps {
    product: {
        id: string;
        name: string;
        description: string;
        price: number;
        imageUrl: string;
    }
}

export default function ProductCard({ product }: ProductCardProps) {
    
    const dispatch = useDispatch();

    
    const handleAddToCart = () => {
        dispatch(addToCart({
            id: product.id,
            name: product.name,
            price: Number(product.price), 
            imageUrl: product.imageUrl,
            quantity: 1
        }));
        
        
        alert(`${product.name} added to cart! 🛒`);
    }

    return (
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="p-0">
              <div className="relative w-full h-48">
                  <img
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="w-full h-full object-cover rounded-t-lg"
                  />
              </div>
          </CardHeader>
          <CardContent className="p-4">
              <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
              <p className="text-gray-500 text-sm mb-2 line-clamp-2">
                  {product.description}
              </p>
              <p className="text-2xl font-bold text-green-600">
                  LKR {Number(product.price).toLocaleString()} 
              </p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
              <Button className="w-full" onClick={handleAddToCart}>
                  Add to Cart
              </Button>
          </CardFooter>
      </Card>
    )
}