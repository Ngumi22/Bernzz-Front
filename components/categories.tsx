// components/ProductList.tsx
"use client";
import { useGetAllCategoriesQuery } from "@/lib/productsApi";
import Image from "next/image";

import { Category, Product } from "@/lib/definitions";
import { Separator } from "./ui/separator";

export default function CategoryList() {
  const {
    data: allcategories,
    error,
    isLoading,
  } = useGetAllCategoriesQuery("");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (!allcategories || allcategories.length === 0) {
    return <p>No categories available</p>;
  }

  return (
    <div className="flex gap-2 items-center">
      <div>
        {allcategories.map((category: Category) => (
          <div>
            <p key={category.id}>{category.name}</p>
          </div>
        ))}
      </div>
      <Separator orientation="vertical" />
      <div>
        <p>Peter</p>
        <p>Peter</p>
        <p>Peter</p>
        <p>Peter</p>
        <p>Peter</p>
      </div>
    </div>
  );
}
