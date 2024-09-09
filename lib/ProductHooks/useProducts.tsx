import { useGetAllProductsQuery } from "@/lib/productsApi";

// Custom hook for fetching products
export const useProducts = (page: number) => {
  const productsPerPage = 9; // Adjust this based on your API limit
  const { data: products, error, isLoading } = useGetAllProductsQuery({ page });

  // If fewer than expected products are returned, disable "Next" button
  const isNextDisabled = products && products.length < productsPerPage;

  return {
    products,
    isLoading,
    error,
    isNextDisabled,
    productsPerPage,
  };
};
