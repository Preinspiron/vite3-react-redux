import { configureStore } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery,  } from '@reduxjs/toolkit/query/react';
import { setupListeners } from '@reduxjs/toolkit/query'

export const api = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://64635d734dca1a66135ba7bc.mockapi.io/' }),
    endpoints: (builder) => ({
      getUsers: builder.query({
        query: () => "users"}),
        providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Post', id })),
              { type: 'Post', id: 'LIST' },
            ]
          : [{ type: 'Post', id: 'LIST' }],
    }),
    })


export const store = configureStore({
    reducer: {[api.reducerPath] : api.reducer},

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
    devTools: true,
});
export const persistor = {}

setupListeners(store.dispatch)
export const {useGetUsersQuery} = api






