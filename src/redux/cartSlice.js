import { createSlice } from "@reduxjs/toolkit";
import { emit } from "dom/lib/event";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["test1", "test2", "test3", "test4"],
  },
  reducers: {
    addToCart: (state, action) => {
      items.push(action.payload);
    },
  },
});
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
