import { TCartProduct } from "./Product";

export type TOrder = {
    name: string;
    email: string;
    contact: string;
    address: string;
    total: number;
    payment: {
        method: string;
        status: "done" | "pending";
    };
    products: TCartProduct[];
};
