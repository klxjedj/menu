import {createSlice} from "@reduxjs/toolkit"

const initialCategory:String='0';

const CategorySlice=createSlice({
    name:"category",
    initialState:initialCategory,
    reducers:{
        categoryChange(state,action){
            state=action.payload
            return state
        }

    }
})

export const {categoryChange}=CategorySlice.actions
export default CategorySlice.reducer;