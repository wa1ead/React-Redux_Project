import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slider/sliderSlice";
import productsSlice from "../features/products/productsSlice";
import leaguesSlice from "../features/leagues/leaguesSlice";
import ShoppingSlice from "../features/shopping/ShoppingSlice";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productsSlice,
    leagues: leaguesSlice,
    shopping: ShoppingSlice,
  },
});
