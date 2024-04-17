import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.5.152:4000' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (name) => `/api/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetProductsQuery } = productsApi;
