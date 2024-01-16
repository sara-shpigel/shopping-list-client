import { createSlice } from "@reduxjs/toolkit";

const sumShoppingSlice = createSlice({
    name:"sumShopping",
    initialState:{value: 0},
    reducers:{
        updateTotalItems:(state, actions)=>{
        state.value++;
        }
    }
})
export const {updateTotalItems} = sumShoppingSlice.actions 
export default sumShoppingSlice.reducer