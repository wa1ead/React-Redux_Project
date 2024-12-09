import { createSlice } from "@reduxjs/toolkit";

const sliderSlice = createSlice({
  name: "Slider",
  initialState: [],
  reducers: {
    nextSlide() {},
    prevSlide() {},
    dotSlide() {},
  },
});

export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
