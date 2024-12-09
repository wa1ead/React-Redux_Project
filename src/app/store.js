import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slider/sliderSlice";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
  },
});
