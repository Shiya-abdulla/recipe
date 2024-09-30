import { configureStore } from '@reduxjs/toolkit';
import recipeSlice from './slice/recipeSlice';




const store = configureStore({
  reducer: {
    recipeSlice: recipeSlice // Match the name with your slice
  },
});

export default store;