import { createApi, fetchBaseQuery,  } from '@reduxjs/toolkit/query/react';
export default createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://64635d734dca1a66135ba7bc.mockapi.io/' }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
      getUsers: builder.query({
        query: () => ({url:"users"}),
        providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'User' , id })),
              { type: 'User', id: 'LIST' },
            ]
          : [{ type: 'User', id: 'LIST' }],
    }),

        putUser: builder.mutation({
            query:id=>({url:`users/${id}`, method:'PUT'} ),
            invalidatesTags: ['User']
        }),
    }),
});





