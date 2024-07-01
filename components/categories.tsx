"use client";
import { useState } from "react";
import {
  useGetAllCategoriesQuery,
  useGetBrandsByCategoryQuery,
  useGetAllProductsQuery,
} from "@/lib/productsApi";
import { Category } from "@/lib/definitions";
import { Separator } from "./ui/separator";

export default function CategoryList() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const {
    data: allCategories,
    error: categoriesError,
    isLoading: categoriesLoading,
  } = useGetAllCategoriesQuery("");

  const {
    data: brands,
    error: brandsError,
    isLoading: brandsLoading,
  } = useGetBrandsByCategoryQuery(selectedCategory || "", {
    skip: !selectedCategory,
  });

  const {
    data: products,
    error: productsError,
    isLoading: productsLoading,
  } = useGetAllProductsQuery(
    { category: selectedCategory || "", brand: selectedBrand || "" },
    {
      skip: !selectedCategory,
    }
  );

  if (categoriesLoading) {
    return <div>Loading categories...</div>;
  }

  if (categoriesError) {
    return <div>Error loading categories</div>;
  }

  if (!allCategories || allCategories.length === 0) {
    return <p>No categories available</p>;
  }

  return (
    <div className="flex w-full gap-2 items-center px-6">
      <ul className="w-1/4">
        {allCategories.map((category: Category) => (
          <li
            key={category.id}
            onClick={() => {
              setSelectedCategory(category.name);
              setSelectedBrand(null);
            }}>
            <a
              className={`cursor-pointer ${
                selectedCategory === category.name ? "font-bold" : ""
              }`}>
              {category.name}
            </a>
          </li>
        ))}
      </ul>
      <Separator orientation="vertical" />
      <div className="w-3/4">
        {brandsLoading ? (
          <div>Loading brands...</div>
        ) : brandsError ? (
          <div>Error loading brands</div>
        ) : (
          <>
            {brands && brands.length > 0 ? (
              <ul className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <li key={brand} onClick={() => setSelectedBrand(brand)}>
                    <a
                      className={`cursor-pointer ${
                        selectedBrand === brand ? "font-bold" : ""
                      }`}>
                      {brand}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No brands available for this category</p>
            )}
          </>
        )}
        <Separator orientation="horizontal" />
        {productsLoading ? (
          <div>Loading products...</div>
        ) : productsError ? (
          <div>Error loading products</div>
        ) : (
          <>
            {products && products.length > 0 ? (
              <ul className="flex flex-wrap gap-2">
                {products.map((product) => (
                  <li key={product.id}>
                    <div className="border p-2">
                      <h3>{product.name}</h3>
                      <p>{product.brand}</p>
                      <p>{product.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No products available for this selection</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
