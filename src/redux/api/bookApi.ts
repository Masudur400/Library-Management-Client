import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://library-management-system-server-theta.vercel.app/api'
    }),
    tagTypes: ['Books'],
    endpoints: (builder) => ({
        // get all  book 
        getBooks: builder.query({
            query: () => "/books",
            providesTags: ['Books']
        }),
        // create book 
        createBook: builder.mutation({
            query: (addData) => ({
                url: "/books",
                method: "POST",
                body: addData,
            }),
            invalidatesTags: ['Books'],
        }),
        // get book by id 
        getBookById: builder.query({
            query: (id: string) => `/books/${id}`,
        }),
        // update book 
        updateBook: builder.mutation({
            query: ({ id, updatedData }) => ({
                url: `/books/${id}`,
                method: "PUT",
                body: updatedData,
            }),
            invalidatesTags: ['Books'],
        }),
        // delete book 
        deleteBook: builder.mutation({
            query: (id: string) => ({
                url: `/books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Books'],
        }),


    }),
})


export const { useGetBooksQuery, useCreateBookMutation, useGetBookByIdQuery, useUpdateBookMutation, useDeleteBookMutation } = baseApi