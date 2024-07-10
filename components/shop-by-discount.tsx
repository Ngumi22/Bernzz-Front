import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetProductsByDiscountQuery } from "@/lib/productsApi";
import Card from "@/components/card";

export function DiscountedProductsTabs() {
  const {
    data: products,
    isError,
    isLoading,
  } = useGetProductsByDiscountQuery({ minDiscount: 1, maxDiscount: 38 });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products.</div>;

  const discountRanges = [
    { label: "1-10%", min: 1, max: 10 },
    { label: "11-20%", min: 11, max: 20 },
    { label: "21-30%", min: 21, max: 30 },
    { label: "31-40%", min: 31, max: 40 },
  ];

  return (
    <Tabs defaultValue={discountRanges[0].label} className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        {discountRanges.map((range) => (
          <TabsTrigger key={range.label} value={range.label}>
            {range.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {discountRanges.map((range) => (
        <TabsContent key={range.label} value={range.label}>
          <DiscountedProducts minDiscount={range.min} maxDiscount={range.max} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

const DiscountedProducts: React.FC<{
  minDiscount: number;
  maxDiscount: number;
}> = ({ minDiscount, maxDiscount }) => {
  const {
    data: products,
    isError,
    isLoading,
  } = useGetProductsByDiscountQuery({ minDiscount, maxDiscount });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products.</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products &&
        products.map((product) => (
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
  );
};
