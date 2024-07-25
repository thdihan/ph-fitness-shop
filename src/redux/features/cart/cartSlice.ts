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
            const isProductAvailable =
                state.products.length !== 0 &&
                state.products?.find(
                    (product) => product?._id === action.payload._id
                );
            console.log("Available Product", isProductAvailable);
            if (!isProductAvailable) state.products.push(action.payload);
            else {
                state.products = state.products.map((product) => {
                    if (product._id === action.payload._id) {
                        return { ...product, qty: product.qty + 1 };
                    }
                    return product;
                });
            }
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
