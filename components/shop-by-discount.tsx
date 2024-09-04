import React from "react";
import { useGetProductsByDiscountQuery } from "@/lib/productsApi";
import ProductCard from "@/components/card";
import { SkeletonCard } from "./skeleton";

export default function DiscountedProducts() {
  const {
    data: products,
    isError,
    isLoading,
  } = useGetProductsByDiscountQuery({
    minDiscount: 1,
    maxDiscount: 100,
    limit: 5, // Limit the number of products fetched
  });

  return (
    <section className="md:container p-2">
      <h2 className="text-2xl font-semibold uppercase my-4">
        Shop by Discount
      </h2>
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="p-2 md:p-5 lg:p-11 lg:basis-64 flex-grow text-center shadow-lg bg-gray-400 animate-pulse h-72"></div>
          ))}
        </div>
      ) : isError ? (
        <div className="text-center text-red-600">
          Error loading products. Please try again later.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 py-4">
          {products &&
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                showDescription
                showPrice
                showActions
                showCategory
                showBrand
                showDiscount
                imageLeft={false}
              />
            ))}
        </div>
      )}
    </section>
  );
}
