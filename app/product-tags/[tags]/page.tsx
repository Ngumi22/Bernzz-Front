"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { Product } from "@/lib/definitions"; // Ensure this matches your type
import { useGetByTagsQuery } from "@/lib/productsApi";

const TagPage = () => {
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");

  // Use the tag to fetch products
  const {
    data: products,
    isLoading,
    error,
  } = useGetByTagsQuery({ tag: tag as string });

  console.log(products);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products</div>;

  // Inline ProductList component
  const ProductList = ({ products }: { products: Product[] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4">
          <img
            src={product.images.main || "/placeholder.jpg"}
            alt={product.name}
            className="w-full h-32 object-cover"
          />
          <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
          <p className="text-gray-500">${product.price.toFixed(2)}</p>
          <p className="text-sm mt-1">{product.description}</p>
          <a
            href={`/products/${product.id}`}
            className="text-blue-500 underline mt-2 block">
            View Details
          </a>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <h1 className="text-2xl font-bold">Products with Tag: {tag}</h1>
      {products && products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <p>No products found with the tag "{tag}".</p>
      )}
    </div>
  );
};

export default TagPage;
