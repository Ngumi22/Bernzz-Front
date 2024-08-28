// components/ProductList.tsx
"use client";
import { useGetAllCategoriesQuery } from "@/lib/productsApi";
import Image from "next/image";
import { Category, Product } from "@/lib/definitions";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";
import { SkeletonCard } from "@/components/skeleton";

export default function CategorySection() {
  const { data: allCategories, error, isLoading } = useGetAllCategoriesQuery();

  return (
    <section className="my-8">
      <h2 className="font-semibold text-2xl uppercase">Shop By Category</h2>
      {isLoading ? (
        <SkeletonCard />
      ) : error ? (
        <span className="sr-only">No Categories Found</span>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {allCategories?.map((category: Category) => (
            <li
              key={category.id}
              className="p-1 md:p-5 lg:p-8 lg:basis-64 flex-grow text-center shadow-lg bg-gray-400">
              <Link href={`/shop-by-category/${category.name}`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
