import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCartProduct } from "../../../types";
import { RootState } from "../../store";

type TInitialState = {
    products: TCartProduct[];
};

const initialState: TInitialState = {
    products: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<TCartProduct>) => {
            state.products.push(action.payload);
        },
    },
});

const cartReducer = cartSlice.reducer;
export default cartReducer;

export const { addToCart } = cartSlice.actions;
export const getCartProducts = (state: RootState) => state.cart.products;
