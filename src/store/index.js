// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../services/auth/authSlice';
import categoriesReducer from '../services/categories'
const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
  },
});

export default store;
