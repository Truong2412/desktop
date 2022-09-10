import { createSlice } from "@reduxjs/toolkit";
export default  createSlice({
    name: 'productOptions',
    initialState: {
        name:'',
        img: '',
        color: '',
        colorPrice: '',
        rom: '',
        romPrice: '',
        warranty:'',
        warrantyPrice:0,
        totalBill: 0,
        quantity: 1,
        priceWithQuantity: 0
    },
    reducers: {
        nameChange: (state,action) => {
            state.name = action.payload;
        },
        imgChange: (state,action) => {
            state.img = action.payload;
        },
        colorChange: (state, action) =>{
            state.color = action.payload;
        },
        colorPriceChange: (state, action) =>{
            state.colorPrice = action.payload;
        },
        romChange: (state, action) =>{
            state.rom = action.payload;
        },
        romPriceChange: (state, action) =>{
            state.romPrice = action.payload;
        },
        warrantyChange: (state, action) => {
            state.warranty = action.payload;
        },
        warrantyPriceChange: (state, action) => {
            state.warrantyPrice = action.payload;
        },
        totalBillChange: (state, action)=> {
            state.totalBill = action.payload;
        },
        priceWithQuantityChange: (state, action)=> {
            state.priceWithQuantity = action.payload;
        }
    }
})
