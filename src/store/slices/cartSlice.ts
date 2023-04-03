import { createSlice } from "@reduxjs/toolkit";
import {dishData} from "../../data/data";

let initialState = dishData.map((item) => (0));
console.log("initial cart:",initialState)

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state[action.payload] += 1;
            return state;
        },
        removeItem(state, action) {
            state[action.payload] = 0;
            return state;
        },
        decreaseItem(state, action) {
            if (state[action.payload] > 0) { state[action.payload] -= 1; }
            else {
                state[action.payload]=0
            }
            return state;


        }
    }
})

export const { addItem,removeItem,decreaseItem } = cartSlice.actions
export default cartSlice.reducer