import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5001/api/v1",
    }),
    tagTypes: ["Category"],
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => ({
                url: "/product",
                method: "GET",
            }),
        }),

        getSingleProduct: builder.query({
            query: (productId) => ({
                url: `/product/${productId}`,
                method: "GET",
            }),
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
    }),
});

export const {
    useGetAllProductsQuery,
    useGetSingleProductQuery,
    useGetAllCategoriesQuery,
    useAddNewCategoryMutation,
} = baseApi;
