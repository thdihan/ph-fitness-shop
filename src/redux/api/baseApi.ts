import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5001/api/v1",
    }),
    tagTypes: ["Category", "Products", "Product"],
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => ({
                url: "/product",
                method: "GET",
            }),
            providesTags: ["Products"],
        }),

        getSingleProduct: builder.query({
            query: (productId) => ({
                url: `/product/${productId}`,
                method: "GET",
            }),
            providesTags: ["Product"],
        }),

        getAllCategories: builder.query({
            query: () => ({
                url: "/category",
                method: "GET",
            }),

            providesTags: ["Category"],
        }),

        addNewCategory: builder.mutation({
            query: (category) => ({
                url: "/category",
                method: "POST",
                body: category,
            }),
            invalidatesTags: ["Category"],
        }),

        addNewProduct: builder.mutation({
            query: (product) => ({
                url: "/product",
                method: "POST",
                body: product,
            }),
            invalidatesTags: ["Products", "Product"],
        }),

        updateProduct: builder.mutation({
            query: (product) => ({
                url: `/product/${product.id}`,
                method: "PUT",
                body: product.data,
            }),
            invalidatesTags: ["Products", "Product"],
        }),

        deleteProduct: builder.mutation({
            query: (productId) => ({
                url: `/product/${productId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Products", "Product"],
        }),

        createOrder: builder.mutation({
            query: (order) => ({
                url: `/order`,
                method: "POST",
                body: order,
            }),
        }),
    }),
});

export const {
    useGetAllProductsQuery,
    useGetSingleProductQuery,
    useGetAllCategoriesQuery,
    useAddNewCategoryMutation,
    useAddNewProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
    useCreateOrderMutation,
} = baseApi;
