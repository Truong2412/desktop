import { configureStore } from '@reduxjs/toolkit'
import productDetailSlice from '../features/productDetail/productDetailSlice';
import cartSlice from '../features/cartAndOrder/cart/cartSlice';
import userSlice from '../features/user/userSlice';
export const store = configureStore({
  reducer: {
    productOptions: productDetailSlice.reducer,
    cart: cartSlice.reducer,
    user: userSlice.reducer,
  },
})