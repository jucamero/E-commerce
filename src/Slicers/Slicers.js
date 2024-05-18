import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productos: [],
};


const carritoSlice = createSlice({
  initialState,
  name: "carrito",
  reducers: {
    agregarAlCarrito: (estadoActual, action) => {
      const producto = action.payload;
      const productoExistente = estadoActual.productos.find(p => p.id === producto.id);
      if (productoExistente) {
        productoExistente.cantidad += 1;
      } else {
        estadoActual.productos.push({ ...producto, cantidad: 1 });
      }
    },
    eliminarDelCarrito: (estadoActual, action) => {
      const productoId = action.payload;
      const productoExistente = estadoActual.productos.find(p => p.id === productoId);
      if (productoExistente) {
        if (productoExistente.cantidad > 1) {
          productoExistente.cantidad -= 1;
        } else {
          estadoActual.productos = estadoActual.productos.filter(producto => producto.id !== productoId);
        }
      }
    }
  },
});

export const carritoReducer = carritoSlice.reducer;
export default carritoSlice.actions;