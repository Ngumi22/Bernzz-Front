// components/ProductList.tsx
"use client";
import { useGetAllCategoriesQuery } from "@/lib/productsApi";
import Image from "next/image";

import { Category, Product } from "@/lib/definitions";
import Link from "next/link";
import { SkeletonCard } from "./loading-skeleton";
import { Skeleton } from "./ui/skeleton";

export default function CategorySection() {
  const {
    data: allcategories,
    error,
    isLoading,
  } = useGetAllCategoriesQuery("");

  return (
    <section className="my-8">
      <h2 className="font-semibold text-2xl uppercase">Shop By Category</h2>
      {!allcategories || allcategories.length === 0 ? (
        <span className="sr-only">No Categories Found</span>
      ) : (
        <div>
          {isLoading ? (
            <SkeletonCard />
          ) : (
            <ul className="mx-1 flex flex-row overflow-x-auto md:flex-wrap md:justify-center items-center gap-4 md:gap-6 my-4 md:my-8">
              {allcategories.map((category: Category) => (
                <li
                  key={category.id}
                  className="p-1 md:p-5 lg:p-8 lg:basis-64 flex-grow text-center rounded-lg shadow-lg bg-gray-400">
                  <Link href={`/shop-by-category/${category.name}`}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
}
