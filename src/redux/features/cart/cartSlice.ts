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
        updateCart: (state, action: PayloadAction<string>) => {
            state.products = state.products.map((product) => {
                if (product._id === action.payload) {
                    return { ...product, qty: product.qty + 1 };
                }
                return product;
            });
        },
    },
});

const cartReducer = cartSlice.reducer;
export default cartReducer;

export const { addToCart, deleteCart, updateCart } = cartSlice.actions;
export const getCartProducts = (state: RootState) => state.cart.products;
