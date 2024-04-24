import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Landing from './components/Index';
import Layout from './components/Layout';
import Products from './products/Products';
import AddProduct from './products/AddProducts';
import Users from './users/User';
import Stocks from './stocks/Stocks';
import AddStocks from './stocks/AddStocks';
import Home from './components/Dashboard'
import StockIssue from './components/issuestock/Issue';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Home/>}/>

        <Route path="/products" element={<Products/>}/>
        <Route path="/products/add" element={<AddProduct/>} />
        <Route path="/users" element={<Users/>} />

        <Route path="/stocks" element={<Stocks/>} />
        <Route path='/stock/addstock' element={<AddStocks/>} />

        <Route path='/stockissue' element={<StockIssue/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
