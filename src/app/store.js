import { configureStore } from "@reduxjs/toolkit";
import CarReducer from "../features/Car/CarSlice";

export const store=configureStore({
    reducer:{
        car:CarReducer,
    },
})