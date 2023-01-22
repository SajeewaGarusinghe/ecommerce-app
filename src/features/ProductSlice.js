import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  selectedProdDetails: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProdDetails: (state, action) => {
      state.selectedProdDetails = action.payload;
    },
    clearProdDetails: (state) => {
      state.selectedProdDetails = [];
    },
  },
});

export const { setProducts, setProdDetails,clearProdDetails } = productSlice.actions;
export default productSlice.reducer;
