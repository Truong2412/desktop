import { createSlice } from "@reduxjs/toolkit";

const initCartState = []
const buyerInfo = {}
export default createSlice({
    name: 'cart',
    initialState: {
        cart: initCartState,
        total: '',
        buyerInfo : buyerInfo
    },
    reducers: {
        getCart: (state, action) => {
            if(action.payload === []){
                state.cart = initCartState;
            }else{
                state.cart = initCartState.concat(action.payload)
            }
            
        },
        addToCart: (state, action)=> {
            state.cart.push(action.payload)
        },
        productQuantityChange: (state, action) => {
            state.cart[action.payload.key] = action.payload.changeItem
        },
        deleteProduct: (state, action) => {
            state.cart.splice(action.payload, 1);
        },
        updateTotal: (state,action)=> {
            state.total = action.payload
        },
        buyerInfoChange: (state,action) => {
            state.buyerInfo = action.payload;
        }
    }
})