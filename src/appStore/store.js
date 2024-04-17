import { configureStore, createSlice } from '@reduxjs/toolkit';
import catalogReducer from './features/products/productSlice';
import { productsApi } from '../api/nsApi';
import cartReducer from './features/cart/cartSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Add the generated reducer as a specific top-level slice
    [productsApi.reducerPath]: productsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})



setupListeners(store.dispatch);

export default store;