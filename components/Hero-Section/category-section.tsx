"use client";
import { Category } from "@/lib/definitions";
import { useGetAllCategoriesQuery } from "@/lib/productsApi";

export default function CategorySection() {
  const {
    data: allcategories,
    isLoading,
    error,
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
    <section className="h-96">
      <ul className="flex flex-col items-start justify-center text-black text-lg gap-y-3 h-full pl-5 bg-gray-100 font-semibold">
        {allcategories.map((category: Category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </section>
  );
}
