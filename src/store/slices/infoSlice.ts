import { createSlice } from "@reduxjs/toolkit";

let initialState = {'gender':1,'height':172,'weight':78,'exerciseFrequency':1,'age':35}

const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        setInfo(state, action) {
            state[action.payload.key] =action.payload.value;
            return state;
        }
    }
})

export const { setInfo } = infoSlice.actions
export default infoSlice.reducer