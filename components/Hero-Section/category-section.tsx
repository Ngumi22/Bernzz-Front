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
  } = useGetBrandsQuery();

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
    <Tabs defaultValue={categories[0]?.name}>
      <TabsList className="grid grid-flow-row w-60">
        {categories.map((category) => (
          <TabsTrigger key={category.id} value={category.name}>
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
