import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsersApi, putUserByIdApi } from '../api/api';

export const getUsers = createAsyncThunk(
  'users/get',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const data = await getUsersApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const putUserByID = createAsyncThunk(
  'users/putUser',
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const data = putUserByIdApi(payload.id, payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
