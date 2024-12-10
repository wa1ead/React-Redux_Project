import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slider/sliderSlice";
import productsSlice from "../features/products/productsSlice";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productsSlice,
  },
});
