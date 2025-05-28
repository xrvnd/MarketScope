import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMarketData = createAsyncThunk(
  'market/fetchMarketData',
  async () => {
    const response = await axios.get('http://localhost:5000/api/markets');
    return response.data;
  }
);

const marketSlice = createSlice({
  name: 'market',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMarketData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMarketData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchMarketData.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default marketSlice.reducer;
