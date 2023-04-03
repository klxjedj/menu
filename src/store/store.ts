import {configureStore} from "@reduxjs/toolkit"

import cartReducer from './slices/cartSlice';
import categoryReducer from "./slices/categorySlice";
import infoReducer from "./slices/infoSlice";


export const store=configureStore({
    reducer:{
        category:categoryReducer,
        cart:cartReducer,
        info:infoReducer
    }
});

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;