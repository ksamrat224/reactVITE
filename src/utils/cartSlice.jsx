import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{ //object
        items:[],
    },
    reducers:{ //this is also object
        addItem : (state,action) => {
            //mutating the states here
            state.items.push(action.payload);
        },
        removeItem : (state) => {
            state.items.pop();
        },
        clearCart : (state) => {
            state.items.length=0;
        },
         
    },
});
export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;