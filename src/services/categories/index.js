// src/features/categories/categoriesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API Base URL and Headers
const apiURL = `${import.meta.env.VITE_REACT_API_URL}/api/v1/categories`;
const apiHeaders = {
  headers: {
    'apiKey': `${import.meta.env.VITE_REACT_API_KEY}`,
  },
};

// Thunks untuk operasi CRUD
export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const response = await axios.get(apiURL, apiHeaders);
  return response.data.data;
});

export const createCategory = createAsyncThunk('categories/createCategory', async (newCategory) => {
  const response = await axios.post(apiURL, newCategory, apiHeaders);
  return response.data.data;
});

export const updateCategory = createAsyncThunk('categories/updateCategory', async ({ id, updatedCategory }) => {
  const response = await axios.put(`${apiURL}/${id}`, updatedCategory, apiHeaders);
  return { id, ...response.data.data };
});

export const deleteCategory = createAsyncThunk('categories/deleteCategory', async (id) => {
  await axios.delete(`${apiURL}/${id}`, apiHeaders);
  return id;  // Return the ID to remove it from the state
});

// Slice dengan reducers tambahan untuk CRUD
const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const index = state.data.findIndex((category) => category.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.data = state.data.filter((category) => category.id !== action.payload);
      });
  },
});

export default categoriesSlice.reducer;
