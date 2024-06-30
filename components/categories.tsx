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
    <div className="flex w-full gap-2 items-center px-6">
      <ul className="w-1/4">
        {allcategories.map((category: Category) => (
          <li key={category.id}>
            <a>{category.name}</a>
          </li>
        ))}
      </ul>
      <Separator orientation="vertical" />
      <div className="w-3/4">
        <p>Peter</p>
        <p>Peter</p>
        <p>Peter</p>
        <p>Peter</p>
        <p>Peter</p>
      </div>
    </div>
  );
}
