import { configureStore } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery,  } from '@reduxjs/toolkit/query/react';
// import { setCredentials, logOut } from '../../features/user/userSlice';

// const baseQuery = fetchBaseQuery({
//   baseUrl: '/',
//   prepareHeaders: (headers, { getState }) => {
//     const { token } = getState().auth;
//     if (token) {
//       headers.set('Authorization', `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);
//   if (result?.error?.originalStatus === 403) {
//     const refreshResult = await baseQuery('/refresh', api, extraOptions);
//     if (refreshResult?.data) {
//       const user = api.getState().auth.user;
//     //   api.dispatch(setCredentials({ user, ...refreshResult.data }));
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//     //   api.dispatch(logOut());
//     }
//   }
//   return result;
// };

export const api = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
      getPokemonByName: builder.query({
        query: (name) => `pokemon/${name}`,
      }),
    }),
  })

export const store = configureStore({
    reducer: {[api.reducerPath] : api.reducer},

    middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat(api.middleware),
    devTools: true,
});
export const persistor = {}



