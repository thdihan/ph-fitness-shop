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
        deleteCart: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter(
                (product) => action.payload !== product._id
            );
        },
    },
});

const cartReducer = cartSlice.reducer;
export default cartReducer;

export const { addToCart, deleteCart } = cartSlice.actions;
export const getCartProducts = (state: RootState) => state.cart.products;
