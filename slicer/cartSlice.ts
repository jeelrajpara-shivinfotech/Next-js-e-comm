import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "@/types/products";
import { RootState } from "./store";

interface CartItem extends Products {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Products>) => {
      const product = action.payload;
      const existing = state.cart.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    increaseQty: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },

    decreaseQty: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const selectCartCount = (state: RootState) =>
  state.cart.cart.reduce((total, item) => total + item.quantity, 0);

export const selectCartSubtotal = (state: RootState) =>
  state.cart.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

export const { addToCart, removeFromCart, increaseQty, decreaseQty, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
