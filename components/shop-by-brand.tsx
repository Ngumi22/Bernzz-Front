"use client";
import React, { useState } from "react";
import { useGetProductsByBrandsQuery } from "@/lib/productsApi";
import ProductCard from "@/components/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; // Adjust the import based on your UI library or custom tabs component
import { SkeletonCard } from "./skeleton";

const ProductsByBrands = () => {
  const {
    data: brandsWithProducts,
    isError,
    isLoading,
  } = useGetProductsByBrandsQuery();
  const [activeBrand, setActiveBrand] = useState<string | null>(null);

  // Set the default active brand to the first one if not already set
  if (brandsWithProducts && !activeBrand) {
    setActiveBrand(brandsWithProducts[0].brand);
  }

  return (
    <section className="md:container p-2">
      <h2 className="text-2xl font-semibold uppercase my-4">Shop by Brand</h2>
      {isLoading ? (
        <>
          <div className="grid grid-cols-1 gap-y-5 gap-x-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8 mb-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="p-2 md:p-3 lg:p-5 lg:basis-64 flex-grow text-center shadow-lg bg-gray-400 animate-pulse h-10 "></div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-y-5 gap-x-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="gap-y-8">
                <div className="p-2 md:p-5 lg:p-11 lg:basis-64 flex-grow text-center shadow-lg bg-gray-400 animate-pulse h-72"></div>
              </div>
            ))}
          </div>
        </>
      ) : isError ? (
        <div className="text-center text-red-600">
          Error loading products. Please try again later.
        </div>
      ) : (
        <Tabs defaultValue={activeBrand || ""} className="w-full">
          <TabsList className="flex space-x-4">
            {brandsWithProducts?.map((brandGroup) => (
              <TabsTrigger
                className=""
                key={brandGroup.brand}
                value={brandGroup.brand}
                onClick={() => setActiveBrand(brandGroup.brand)}>
                {brandGroup.brand}
              </TabsTrigger>
            ))}
          </TabsList>

          {brandsWithProducts?.map((brandGroup) => (
            <TabsContent
              key={brandGroup.brand}
              value={brandGroup.brand}
              className={activeBrand === brandGroup.brand ? "block" : "hidden"}>
              <div className="mx-auto max-w-2xl py-4 lg:max-w-7xl">
                <div className="grid grid-cols-1 gap-y-5 gap-x-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-4">
                  {brandGroup.products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      showDescription={true}
                      showPrice={true}
                      showActions={true}
                      showCategory={true}
                      showBrand={true}
                      showDiscount={false}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      )}
    </section>
  );
};

export default ProductsByBrands;
