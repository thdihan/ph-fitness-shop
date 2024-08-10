export type TProduct = {
    _id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    image: string;
    isFeatured?: boolean;
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

export type TCategory = {
    _id: string;
    name: string;
    image: string;
};
