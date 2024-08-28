import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category, Product } from "@/lib/definitions";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({
    getAllProductsByFilter: builder.query<
      Product[],
      {
        brand?: string;
        category?: string;
        minPrice?: number;
        maxPrice?: number;
        minDiscount?: number;
        maxDiscount?: number;
        status?: string;
        name?: string;
        currentPage: number;
      }
    >({
      query: (filters) => {
        const {
          brand,
          category,
          minPrice,
          maxPrice,
          minDiscount,
          maxDiscount,
          status,
          name,
          currentPage,
        } = filters;

        // Construct query parameters
        const queryParams = new URLSearchParams();
        if (brand) queryParams.append("brand", brand);
        if (category) queryParams.append("category", category);
        if (minPrice !== undefined)
          queryParams.append("minPrice", minPrice.toString());
        if (maxPrice !== undefined)
          queryParams.append("maxPrice", maxPrice.toString());
        if (minDiscount !== undefined)
          queryParams.append("minDiscount", minDiscount.toString());
        if (maxDiscount !== undefined)
          queryParams.append("maxDiscount", maxDiscount.toString());

        if (name) queryParams.append("name", name);
        queryParams.append("page", currentPage.toString());

        return `products?${queryParams.toString()}`;
      },
      keepUnusedDataFor: 5,
    }),

    getProductById: builder.query<Product, string>({
      query: (id) => `products/${id}`, // Get a product by ID
      keepUnusedDataFor: 5,
    }),

    getAllCategories: builder.query<Category[], void>({
      query: () => `categories`, // Get all categories without products
      keepUnusedDataFor: 5,
    }),

    getBrands: builder.query<string[], void>({
      query: () => `products/brands`, // Get unique brands
      keepUnusedDataFor: 5,
    }),

    getTags: builder.query<string[], void>({
      query: () => `products/tags`, // Get unique tags
      keepUnusedDataFor: 5,
    }),

    getProductsByDiscount: builder.query<
      Product[],
      { minDiscount: number; maxDiscount: number; limit: number }
    >({
      query: ({ minDiscount, maxDiscount, limit }) =>
        `products?minDiscount=${minDiscount}&maxDiscount=${maxDiscount}&limit=${limit}`,
      keepUnusedDataFor: 5,
    }),

    // New endpoint for fetching all products grouped by brand
    getProductsByBrands: builder.query<
      { brand: string; products: Product[] }[],
      void
    >({
      query: () => `products?brands=all`, // Query for all brands
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useGetAllProductsByFilterQuery,
  useGetProductByIdQuery,
  useGetAllCategoriesQuery,
  useGetBrandsQuery,
  useGetTagsQuery,
  useGetProductsByDiscountQuery,
  useGetProductsByBrandsQuery, // Export the new hook
} = productsApi;
