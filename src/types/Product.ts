export type TProduct = {
    _id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
};
export type TInitialProduct = {
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    image: string;
};

export type TCartProduct = {
    _id: string;
    qty: number;
    price: number;
};
