import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api'
    }),
    tagTypes: ['Books'],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => "/books",
            providesTags: ['Books']
        }),
        createBook: builder.mutation({
            query: (addData) => ({
                url: "/books",
                method: "POST",
                body: addData,
            }),
            invalidatesTags: ['Books'],
        }),
        getBookById: builder.query({
            query: (id: string) => `/books/${id}`,
        }),
        updateBook: builder.mutation({
            query: ({ id, updatedData }) => ({
                url: `/books/${id}`,
                method: "PUT",
                body: updatedData,
            }),
            invalidatesTags: ['Books'],
        }),
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