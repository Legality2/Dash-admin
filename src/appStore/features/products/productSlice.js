import { createSlice } from '@reduxjs/toolkit';
import axios from'axios';
import { useGetProductsQuery } from '../../../api/nsApi';
const initialState = {
  products: [],
  selectedProduct: {},
}
const tp = [];

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    getProducts: (state, action) => {
      
    },
    getProdById: (state, action) => {
      console.log(action.payload);
        state.selectedProduct =  state.products.filter(p => p.id == action.payload.id);
    }
}
})

// Action creators are generated for each case reducer function
export const { getProducts, getProdById } = catalogSlice.actions

export default catalogSlice.reducer