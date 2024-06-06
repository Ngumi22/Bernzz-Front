// components/ProductList.tsx
"use client";
import { useGetAllProductsQuery } from "@/lib/productsApi";
import Image from "next/image";

import { Product } from "@/lib/definitions";

export default function ProductList() {
  const { data: allproducts, error, isLoading } = useGetAllProductsQuery("");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (!allproducts || allproducts.length === 0) {
    return <p>No products available</p>;
  }

  console.log(allproducts);
  return (
    <div>
      {allproducts.map((product: Product) => (
        <div key={product.id}>
          <p>{product.description}</p>
          <p>{product.discount}</p>

          <img
            className="h-24 w-24"
            src={`data:image/jpeg;base64,${product.images.main}`}
            alt="Main Image"
          />
          <div className="flex gap-2">
            {product.images.thumbnails.map((thumbnail, index) => (
              <img
                className="h-20 w-20"
                key={index}
                src={`data:image/jpeg;base64,${thumbnail}`}
                alt={`Thumbnail ${index + 1}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
