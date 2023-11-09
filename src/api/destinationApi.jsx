import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const destinationApi = createApi({
    reducerPath: "apidestination",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5001/",
    }),
    tagTypes: ["Destinations"],
    endpoints:(builder)=>({
        //Query -> GET
        //Mutation -> POST/PUT/Delete
        getAllDestination: builder.query({
            query: () => "destinations",
            providesTags: ["Destinations"],
            transformErrorResponse: (res) => res.sort((a,b) => b.id - a.id),
        }),
        addDestination: builder.mutation({
            query: (destination) => ({
                url:"destinations",
                method: "POST",
                body: destination
            }),
            invalidatesTags:["Destinations"]
        }),
        updateDestination: builder.mutation({
            query: (destination) => ({
                url:`destinations/${destination.id}`,
                method: "PUT",
                body: destination
            }),
            invalidatesTags:["Destinations"]
        }),
        deleteDestination: builder.mutation({
            query: (id) => ({
                url:`destinations/${id}`,
                method: "DELETE",
                body:id
            }),
            invalidatesTags:["Destinations"]
        })
    })
});

export const { useGetAllDestinationQuery, useAddDestinationMutation
,useUpdateDestinationMutation, useDeleteDestinationMutation } = destinationApi