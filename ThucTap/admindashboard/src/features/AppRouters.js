import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddProduct from './addProduct/AddProduct';
import App from './App';
import ProductManager from './productsManager/ProductManager';
function AppRouters() {
    return (
        <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<App />} />
          <Route path="productmanager" element={<ProductManager />} />
          <Route path="addproduct" element={<AddProduct />} />

        </Route>
      </Routes>
    );
}

export default AppRouters;