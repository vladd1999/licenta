import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteProducts: (state,action) => {
      let index = state.products.indexOf(action.payload);
            state.quantity -= action.payload
            state.products.splice(index, 1)
state.products = [...state.products] // clone array 
    },
    clearCart: (state,action)=>{
      state.products=[];
      state.quantity=0;
      state.total=0;


    }
  },
});

export const { addProduct,deleteProducts, clearCart } = cartSlice.actions;
export default cartSlice.reducer;