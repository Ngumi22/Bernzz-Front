"use client";

// components/ShopByBrandTabs.tsx
import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Card from "@/components/card";
import {
  useGetBrandsQuery,
  useGetAllProductsByFilterQuery,
} from "@/lib/productsApi";
import { Product } from "@/lib/definitions";

const ShopByBrand = () => {
  const {
    data: brands,
    isLoading: isLoadingBrands,
    isError: isErrorBrands,
  } = useGetBrandsQuery(0);
  const [activeBrand, setActiveBrand] = useState<string | null>("HP");

  const {
    data: products,
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
  } = useGetAllProductsByFilterQuery({
    brand: activeBrand || "",
  });

  useEffect(() => {
    if (brands && brands.length > 0) {
      setActiveBrand(brands[0]?.brand);
    }
  }, [brands]);

  if (isLoadingBrands || isLoadingProducts) return <div>Loading...</div>;
  if (isErrorBrands || isErrorProducts) return <div>Error fetching data.</div>;

  return (
    <section className="container">
      <h2 className="text-2xl font-bold uppercase mb-5">shop by brand</h2>
      <Tabs defaultValue={activeBrand || ""} className="w-full">
        <TabsList className="flex space-x-4">
          {brands.map((brandInfo: any, index: number) => (
            <TabsTrigger
              key={index}
              value={brandInfo.brand}
              onClick={() => setActiveBrand(brandInfo.brand)}>
              {brandInfo.brand}
            </TabsTrigger>
          ))}
        </TabsList>

        {brands.map((brandInfo: any, index: number) => (
          <TabsContent key={index} value={brandInfo.brand}>
            <div className="grid grid-cols-1 md:grid-flow-col content-start space-x-2 overflow-x-scroll">
              {products &&
                products
                  .filter(
                    (product: Product) => product.brand === brandInfo.brand
                  )
                  .map((product: Product) => (
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

export default ShopByBrand;
