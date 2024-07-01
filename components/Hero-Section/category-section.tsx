"use client";
import { useGetAllCategoriesQuery, useGetBrandsQuery } from "@/lib/productsApi";
import { useState, useEffect, useCallback, useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Product, Category } from "@/lib/definitions";
import Image from "next/image";

export default function CategorySection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [productsByCategory, setProductsByCategory] = useState<{
    [key: string]: Product[];
  }>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const fetchedCategories = useRef(new Set<string>());

  const {
    data: categories,
    isLoading,
    error: Branderror,
  } = useGetAllCategoriesQuery();

  const {
    data: brands,
    isLoading: brandsLoading,
    error: categoryError,
  } = useGetBrandsQuery("" || 1);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (!categories || categories.length === 0) {
    return <p>No categories available</p>;
  }
  return (
    <div className="container my-10">
      <Tabs defaultValue={categories[0]?.name}>
        <TabsList className="grid grid-flow-row gap-4">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.name}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="my-2">
          {categories.map((category) => (
            <TabsContent
              key={category.id}
              value={category.name}
              className="grid grid-flow-row gap-5">
              {productsByCategory[category.name]?.length > 0 ? (
                productsByCategory[category.name].map((product) => (
                  <Card key={product.id} className="mb-2">
                    <CardHeader>
                      <CardTitle>{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-between">
                      <div className="flex gap-2 w-full">
                        <Image
                          loading="lazy"
                          className="h-14 w-14"
                          src={`data:image/jpeg;base64,${product.images.main}`}
                          alt={product.name}
                          height={100}
                          width={100}
                        />
                      </div>
                      <p className="">{product.description}</p>
                      <p className="flex">Price: {product.price}</p>
                      <p className="">Discount: {product.discount}</p>
                      <p className="">Quantity: {product.quantity}</p>
                      <p className="">Brand: {product.brand}</p>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p>No products found in this category.</p>
              )}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
