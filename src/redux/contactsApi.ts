import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['Contact'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (builder) => ({
    addContacts: builder.mutation({
      query: (body) => ({
        url: '/contacts',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useAddContactsMutation } = contactsApi;
