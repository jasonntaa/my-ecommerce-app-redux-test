export interface Product {

    id: string;

    name: string;

    price: number;

}

export const products: Product[] = [

    { id: 'prod_1', name: 'Classic T-Shirt', price: 25.00 },

    { id: 'prod_2', name: 'Leather Wallet', price: 45.00 },

    { id: 'prod_3', name: 'Bluetooth Headphones', price: 150.00 },

    { id: 'prod_4', name: 'Coffee Mug', price: 15.00 },

];