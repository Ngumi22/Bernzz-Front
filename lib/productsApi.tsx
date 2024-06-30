import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      // get all products, optionally filtered by various query parameters
      query: ({ category, name, brand, discount, minPrice, maxPrice }) => {
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
      query: (id) => `products/${id}`, // get product by id
      keepUnusedDataFor: 5,
    }),

    getAllCategories: builder.query({
      query: () => `categories`, // get all categories
      keepUnusedDataFor: 5,
    }),

    getProductByName: builder.query({
      query: (name) => `products?name=${name}`, // get product by name
      keepUnusedDataFor: 5,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetAllCategoriesQuery,
  useGetProductByNameQuery,
} = productsApi;

export type Category = string;
