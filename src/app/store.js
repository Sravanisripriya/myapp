import { configureStore } from "@reduxjs/toolkit";
import loginpageReducer from "../features/login/loginpageSlice";
export const store=configureStore({
    reducer:{
        l:loginpageReducer
    },
})
export default store