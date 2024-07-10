import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category, Product } from "@/lib/definitions";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({
    useGetAllProducts: builder.query<Product, string>({
      query: () => `products`, // get all products
      keepUnusedDataFor: 5,
    }),

    getAllProductsByFilter: builder.query<Product[], { brand: string }>({
      query: ({ brand }) => `products?brand=${brand}`, // Fetch products by brand
      keepUnusedDataFor: 5,
    }),

    getProductById: builder.query<Product, string>({
      query: (id) => `products/${id}`, // get a product by id
      keepUnusedDataFor: 5,
    }),

    getAllCategories: builder.query<Category[], void>({
      query: () => `categories`, // get all categories without products
      keepUnusedDataFor: 5,
    }),

    getProductsByCategory: builder.query<Category[], void>({
      query: (name) => `products?category=${name}`, // get products by category
      keepUnusedDataFor: 5,
    }),

    getProductByDiscount: builder.query<Product[], void>({
      query: (discount) => `products?minDiscount=${discount}`, // get products by category
      keepUnusedDataFor: 5,
    }),

    getProductsByDiscount: builder.query<
      Product[],
      { minDiscount: number; maxDiscount: number }
    >({
      query: ({ minDiscount, maxDiscount }) =>
        `products?minDiscount=${minDiscount}&maxDiscount=${maxDiscount}`,
      keepUnusedDataFor: 5,
    }),

    getBrands: builder.query<any, number>({
      query: () => `products?brands=all`, // get unique brands with their associated products
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useGetAllProductsByFilterQuery,
  useGetProductByIdQuery,
  useGetAllCategoriesQuery,
  useGetBrandsQuery,
  useGetProductsByCategoryQuery,
  useGetProductsByDiscountQuery,
} = productsApi;
