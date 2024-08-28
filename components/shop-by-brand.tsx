"use client";
import React, { useState } from "react";
import { useGetProductsByBrandsQuery } from "@/lib/productsApi";
import Card from "@/components/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; // Adjust the import based on your UI library or custom tabs component

const ProductsByBrands = () => {
  const {
    data: brandsWithProducts,
    isError,
    isLoading,
  } = useGetProductsByBrandsQuery();
  const [activeBrand, setActiveBrand] = useState<string | null>(null);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products.</div>;

  // Set the default active brand to the first one if not already set
  if (brandsWithProducts && !activeBrand) {
    setActiveBrand(brandsWithProducts[0].brand);
  }

  return (
    <section className="container">
      <h2 className="text-2xl font-bold uppercase mb-5">Products by Brand</h2>
      <Tabs defaultValue={activeBrand || ""} className="w-full">
        <TabsList className="flex space-x-4">
          {brandsWithProducts?.map((brandGroup) => (
            <TabsTrigger
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {brandGroup.products.map((product) => (
                <Card
                  key={product.id}
                  product={product}
                  showDescription={true}
                  showPrice={true}
                  showActions={true}
                  showCategory={true}
                  showBrand={true}
                  showDiscount={true}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default ProductsByBrands;
