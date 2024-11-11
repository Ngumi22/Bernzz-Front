"use client"; // This ensures that this is a Client Component

import React from "react";
import { useGetByTagsQuery } from "@/lib/productsApi";
import ProductCard from "@/components/card";

const ProductPage = ({ params }: { params: { tags: string } }) => {
  // Fetch products based on the tag using Redux hook
  const {
    data: products = [],
    isLoading,
    error,
  } = useGetByTagsQuery({
    tag: params.tags,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <section className="space-y-4">
      <div className="bg-gray-200 p-4">
        <h1 className="text-4xl mb-4">{params.tags}</h1>
        <h1 className="text-sm">Home Products Tagged {params.tags}</h1>
      </div>
      <div className="container">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-y-5 gap-x-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} showActions />
            ))}
          </div>
        ) : (
          <p>No products found with the tag {params.tags}.</p>
        )}
      </div>
    </section>
  );
};

export default ProductPage;
