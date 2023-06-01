// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// // import { setCredentials, logOut } from '../../features/user/userSlice';

// const baseQuery = fetchBaseQuery({
//   baseUrl: import.meta.env.VITE_API_URL,
//   prepareHeaders: (headers, { getState }) => {
//     const { token } = getState().auth;
//     if (token) {
//       headers.set('Authorization', `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   const result = await baseQuery(args, api, extraOptions);
//   // ====================== TODO: Implement 401 unauthorized re-authentication ======================
//   // if (result?.error?.status === 401) {
//   //   const refreshResult = await baseQuery('/refresh', api, extraOptions);
//   //   if (refreshResult?.data) {
//   //     const { user } = api.getState().auth;
//   //     api.dispatch(setCredentials({ user, ...refreshResult.data }));
//   //     result = await baseQuery(args, api, extraOptions);
//   //   } else {
//   //     api.dispatch(logOut());
//   //   }
//   // }
//   return result;
// };

// const apiSlice = createApi({
//   baseQuery: baseQueryWithReauth,
//   endpoints: () => ({}),
// });

// export default apiSlice;

import { createSlice } from '@reduxjs/toolkit';
import { getUsers, putUserByID } from './apiOperations';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
      })
      .addCase(putUserByID.fulfilled, (state, { payload }) => payload)
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state, { payload }) => {
          state.isLoading = true;
          state.error = null;
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = null;
        },
      );
  },
});

export default usersSlice.reducer;
