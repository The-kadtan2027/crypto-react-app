import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const exchangesApiHeader = {
  "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
  "X-RapidAPI-Key": "5f5c1892a5mshbb64844db0e37a5p17ceeajsnf0b82076a8af",
};

const baseUrl = "https://coingecko.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: exchangesApiHeader });

export const exchangesApi = createApi({
  reducerPath: "exchangesApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getExchanges: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
});

export const { useGetExchangesQuery } = exchangesApi;

//api key f33e33a4-e63a-4158-b6bc-63de02258b9b
