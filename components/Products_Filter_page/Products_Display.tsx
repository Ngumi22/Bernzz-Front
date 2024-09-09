"use client";

import ProductCard from "@/components/card";
import { usePagination } from "@/lib/ProductHooks/usePagination";
import { useProducts } from "@/lib/ProductHooks/useProducts";

export default function ProductsDisplay() {
  const { page, availablePages, setPage } = usePagination();
  const { products, isLoading, error, isNextDisabled } = useProducts(page);

  return (
    <div className="col-span-3">
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols- lg:grid-cols-3 gap-2">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="p-2 md:p-5 lg:p-11 lg:basis-64 flex-grow text-center shadow-lg bg-gray-400 animate-pulse h-72"></div>
          ))}
        </div>
      ) : error ? (
        <div className="text-center text-red-600">
          Error loading products. Please try again later.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols- lg:grid-cols-3 gap-2">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} showActions />
            ))}
        </div>
      )}

      <ul className="inline-flex mx-auto bg-gray-50 px-2 py-4 space-x-2 rounded-md shadow-md dark:bg-gray-500 my-2">
        {/* Previous Button */}
        <li>
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-3 py-2 hover:bg-black hover:text-white border border-black rounded dark:text-gray-300 dark:border-gray-300 dark:hover:bg-gray-700">
            Prev
          </button>
        </li>

        {/* Page Number Buttons */}
        {availablePages.map((pageNumber) => (
          <li key={pageNumber}>
            <button
              onClick={() => setPage(pageNumber)}
              className={`px-4 py-2 border rounded ${
                pageNumber === page
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white dark:text-gray-100 border-black dark:border-gray-300 dark:hover:bg-gray-700"
              }`}>
              {pageNumber}
            </button>
          </li>
        ))}

        {/* Next Button */}
        <li>
          <button
            onClick={() => setPage(page + 1)}
            disabled={isNextDisabled}
            className="px-3 py-2 hover:bg-black hover:text-white border border-black rounded dark:text-gray-300 dark:border-gray-300 dark:hover:bg-gray-700">
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}
