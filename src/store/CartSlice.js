import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    count: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { name, price } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.name === name
      );
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += 1;
      } else {
        const id = uuidv4();
        state.items = [...state.items, { id, name, price, quantity: 1 }];
      }
      state.count += 1;
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        const quantity = state.items[index].quantity;
        state.items.splice(index, 1);
        state.count -= quantity;
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        const diff = quantity - item.quantity;
        item.quantity = quantity;
        state.count += diff;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
