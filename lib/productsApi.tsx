import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category, Product } from "@/lib/definitions";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dashboard-theta-gilt.vercel.app/api",
  }),
  keepUnusedDataFor: 30, // Adjust default caching time for the API
  endpoints: (builder) => ({
    getAllProductss: builder.query<{ data: Product[]; total: number }, number>({
      query: (page) => `products?page=${page}`,
      transformResponse: (response: { data: Product[]; total: number }) =>
        response,
    }),

    getAllProducts: builder.query<Product[], { page: number }>({
      query: ({ page }) => `products?page=${page}`,
      transformResponse: (response: Product[]) => response,
    }),

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
        id?: string;
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
          id,
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
        if (status) queryParams.append("status", status);
        if (name) queryParams.append("name", name);
        queryParams.append("page", currentPage.toString());

        return `products?${queryParams.toString()}`;
      },
      keepUnusedDataFor: 5,
      transformResponse: (response: Product[]) => {
        // Example: Add extra transformation logic if needed
        return response;
      },
    }),

    getProductById: builder.query<Product, number>({
      query: (id) => `products/${id}`, // Get a product by ID
      keepUnusedDataFor: 5,
      transformResponse: (response: Product) => response, // Add transformation if needed
    }),

    getAllCategories: builder.query<Category[], void>({
      query: () => `categories`, // Get all categories without products
      keepUnusedDataFor: 60, // Cache for 60 seconds
    }),

    getBrands: builder.query<string[], void>({
      query: () => `products/brands`, // Get unique brands
      keepUnusedDataFor: 60, // Cache for 60 seconds
    }),

    getTags: builder.query<string[], void>({
      query: () => `products/tags`, // Get unique tags
      keepUnusedDataFor: 60, // Cache for 60 seconds
    }),

    getByTags: builder.query<Product[], { tag: string }>({
      query: ({ tag }) => `products?tag=${encodeURIComponent(tag)}`,
      keepUnusedDataFor: 5,
      transformResponse: (response: Product[], meta, arg) => {
        // Optionally, transform the data received from the server
        return response;
      },
    }),

    getProductsByDiscount: builder.query<
      Product[],
      { minDiscount: number; maxDiscount: number; limit: number }
    >({
      query: ({ minDiscount, maxDiscount, limit }) =>
        `products?minDiscount=${minDiscount}&maxDiscount=${maxDiscount}&limit=${limit}`,
      keepUnusedDataFor: 5,
    }),

    // Fetch all products grouped by brand
    getProductsByBrands: builder.query<
      { brand: string; products: Product[] }[],
      void
    >({
      query: () => `products?brands=all`, // Query for all brands
      keepUnusedDataFor: 60, // Cache for 60 seconds
    }),
  }),
});

// Export hooks for components to use
export const {
  useGetAllProductsQuery,
  useGetAllProductsByFilterQuery,
  useGetProductByIdQuery,
  useGetAllCategoriesQuery,
  useGetBrandsQuery,
  useGetTagsQuery,
  useGetByTagsQuery,
  useGetProductsByDiscountQuery,
  useGetProductsByBrandsQuery,
} = productsApi;
