import { createAsyncThunk } from '@reduxjs/toolkit';

import {registerRequest} from "../../api/auth-api"

export const signup = createAsyncThunk(
    'auth/signup',
    async (body, thunkAPI) => {
      try {
        const data = await registerRequest(body);
      
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );