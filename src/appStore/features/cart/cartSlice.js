import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cart: [],
  }

  export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log(action);
            state.cart.push(action.payload);
        },
        removeFromCart: (state, action) => {
            console.log(action.payload)
        }
    }

  });

  // Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer