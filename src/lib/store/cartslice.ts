import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../products';

// A single item in the cart
export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

// The entire cart state
interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Product>) {
            const product = action.payload
            const existingProduct = state.items.find((item) => item.id === product.id)

            existingProduct ? existingProduct.quantity += 1 : state.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1
            })
        },
        removeItem(state, action: PayloadAction<string>) {
            const id = action.payload;
            state.items = state.items.filter((item) => item.id !== id);
        }
    }
})

export const { addToCart, removeItem } = cartSlice.actions
export default cartSlice.reducer;