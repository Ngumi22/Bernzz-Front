// components/ProductList.tsx
"use client";
import { useGetAllCategoriesQuery } from "@/lib/productsApi";
import Image from "next/image";

import { Category, Product } from "@/lib/definitions";

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

  console.log(allcategories);
  return (
    <div>
      {allcategories.map((category: Category) => (
        <p>{category.name}</p>
      ))}
    </div>
  );
}
