import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllBreeds } from '../services/apiServices';
import { DogBreeds } from '../types';

interface DogsState {
  breeds: string[];
  loading: boolean;
}

const initialState: DogsState = {
  breeds: [],
  loading: false,
};

export const fetchDogs = createAsyncThunk('dogs/fetchDogs', async (): Promise<string[]> => {
  const data = await fetchAllBreeds();
  return Object.keys(data);
});

const dogsSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDogs.fulfilled, (state, action) => {
        state.loading = false;
        state.breeds = action.payload;
      });
  },
});

export default dogsSlice.reducer;
