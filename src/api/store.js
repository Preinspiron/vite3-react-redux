import { configureStore } from '@reduxjs/toolkit';
import api from './api'
import { setupListeners } from '@reduxjs/toolkit/query'




export const store = configureStore({
    reducer: {[api.reducerPath] : api.reducer},

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
    devTools: true,
});
export const persistor = {}

setupListeners(store.dispatch)
export const {useGetUsersQuery, usePutUserMutation} = api






