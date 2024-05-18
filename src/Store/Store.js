import { configureStore } from "@reduxjs/toolkit";
import { carritoReducer } from "../Slicers/Slicers";

const store = configureStore({
    reducer:{
        carrito: carritoReducer
    }
});

export default store;