import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/v1",
    }),
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
    }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = baseApi;
