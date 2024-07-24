export type TProduct = {
    _id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
};

export type TCartProduct = TProduct & {
    qty: number;
};
