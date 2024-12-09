import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  images: [
    "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_656/MTc0MjUwOTUwNjYyMzAxNTY0/top-10-best-football-teams-of-all-time.webp",
    "https://cdn.mos.cms.futurecdn.net/BqgjWAKJdXH6fTR7GbpHcm-970-80.jpg.webp",
    "https://cdn.mos.cms.futurecdn.net/Jawhug4WvAhGxXzz4rWtFn-970-80.jpg.webp",
    "https://cdn.mos.cms.futurecdn.net/RjanDbBwKyyUoDvyViAeqJ-970-80.jpg.webp",
    "https://cdn.mos.cms.futurecdn.net/xMgsiA3gX7H5bBCkvkz4hJ-970-80.jpg.webp",
    "https://cdn.mos.cms.futurecdn.net/EMfMETNaWdmP7y7ryvFXaJ-970-80.jpg.webp",
    "https://cdn.mos.cms.futurecdn.net/Q3MaLFqtQ3yF8GbGnd5qNJ-970-80.jpg.webp",
    "https://cdn.mos.cms.futurecdn.net/KkRRtiRdLqFdY7AmQUeBMT-970-80.jpg.webp",
    "https://cdn.mos.cms.futurecdn.net/2NpQdDwK9YeBKhgg7RY9zm-970-80.jpg.webp",
    "https://cdn.mos.cms.futurecdn.net/c4R9rhPQqooP6z2rteEFwS-970-80.jpg.webp",
    "https://cdn.mos.cms.futurecdn.net/vdDYxp3ZAtZqaH9GX24BAU-970-80.jpg.webp",
    "https://cdn.mos.cms.futurecdn.net/5skpGfFHjuAJZaWK23tHRQ-970-80.jpg.webp",
    "https://cdn.mos.cms.futurecdn.net/FYjfc9TNaGRYhr2HgZpRCQ-970-80.jpg.webp",
  ],
};

const sliderSlice = createSlice({
  name: "Slider",
  initialState,
  reducers: {
    nextSlide(state, action) {
      state.value === state.images.length - 1
        ? (state.value = 0)
        : (state.value += 1);
    },
    prevSlide(state, action) {
      state.value === 0
        ? (state.value = state.images.length - 1)
        : (state.value -= 1);
    },
    dotSlide(state, action) {
      state.value = action.payload;
    },
  },
});

export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
