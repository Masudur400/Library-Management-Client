import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
  reducerPath: 'borrowApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
  }),
  tagTypes: ['Books', 'Borrows'],  
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
