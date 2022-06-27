import { productReducer } from "./productReducer";
import { counterReducer } from "./counterReducer";
import { cartReducer } from "./cartReducer";
import { combineReducers } from "redux";



export const allReducers = combineReducers({
    productId: productReducer,
    counter: counterReducer,
    cartItem: cartReducer 
})