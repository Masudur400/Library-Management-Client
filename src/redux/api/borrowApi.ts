import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
  reducerPath: 'borrowApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://library-management-system-server-theta.vercel.app/api',
  }),
  tagTypes: ['Borrows'],  
  endpoints: (builder) => ({  
    //Get all borrows
    getBorrows: builder.query({
      query: () => '/borrow',
      providesTags: ['Borrows'],
    }),

    //Create a new borrow
    createBorrow: builder.mutation({
      query: (borrowData) => ({
        url: '/borrow',
        method: 'POST',
        body: borrowData,
      }),
      invalidatesTags: ['Borrows'],
    }),
  }),
})


export const { useGetBorrowsQuery, useCreateBorrowMutation } = borrowApi
