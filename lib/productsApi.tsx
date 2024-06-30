import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      // get all products, optionally filtered by various query parameters
      query: ({
        category,
        name,
        brand,
        discount,
        minPrice,
        maxPrice,
      }: {
        category?: string;
        name?: string;
        brand?: string;
        discount?: string;
        minPrice?: string;
        maxPrice?: string;
      }) => {
        const params = new URLSearchParams();
        if (category) params.append("category", category);
        if (name) params.append("name", name);
        if (brand) params.append("brand", brand);
        if (discount) params.append("discount", discount);
        if (minPrice) params.append("minPrice", minPrice);
        if (maxPrice) params.append("maxPrice", maxPrice);
        return `products?${params.toString()}`;
      },
      keepUnusedDataFor: 5,
    }),

    getProductById: builder.query({
      query: (id: string) => `products/${id}`, // get product by id
      keepUnusedDataFor: 5,
    }),

    getAllCategories: builder.query({
      query: () => `categories`, // get all categories
      keepUnusedDataFor: 5,
    }),

    getBrandsByCategory: builder.query({
      query: (category: string) => `brands?category=${category}`, // get brands by category
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetAllCategoriesQuery,
  useGetBrandsByCategoryQuery,
} = productsApi;
