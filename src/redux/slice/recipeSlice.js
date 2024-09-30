import { createSlice } from '@reduxjs/toolkit';

const recipelistSlice = createSlice({
  name: 'recipeSlice',
  initialState: {
    items: []
  },
  reducers: {
    addRecipe: (state, action) => {
      state.items.push(action.payload);
    },
    deleteRecipe: (state, action) => {
      state.items = state.items.filter((item, index) => index !== action.payload);
    },
    updateRecipe: (state, action) => {
      const { index, updatedRecipe } = action.payload;
      state.items[index] = updatedRecipe;
    }
  }
});

// Export the reducer as default
export const { addRecipe, deleteRecipe, updateRecipe } = recipelistSlice.actions;
export default recipelistSlice.reducer;
