import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const randomDestinationApi = createApi({
    reducerPath: "apiRandomDestination",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://random-data-api.com/api/v2/",
    }),
    tagTypes: ["Destinations"],
    endpoints:(builder)=>({
        //Query -> GET
        //Mutation -> POST/PUT/Delete
        getAllRandomDestination:  builder.query({
            query: () => ({
              url: "addresses",
              method: "GET",
            })
        })
    })
});

export const { useGetAllRandomDestinationQuery} = randomDestinationApi