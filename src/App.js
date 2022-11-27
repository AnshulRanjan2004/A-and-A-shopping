import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './Components/Pages/Product';
import SignUp from './Components/Pages/SignUp';
import Model from './Components/model';
import ContactUs from './Components/Pages/ContactUs';
import Cart from './Components/Pages/Cart';
import Tops from './Components/Pages/Tops';
import Bottoms from './Components/Pages/Bottoms';
import Dresses from './Components/Pages/Dresses';
import Accessories from './Components/Pages/Accessories';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/tops' element={<Tops/>} />
          <Route path='/bottoms' element={<Bottoms/>} />
          <Route path='/dresses' element={<Dresses/>} />
          <Route path='/accessories' element={<Accessories/>} />
          <Route path='/contactus' element={<ContactUs/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/Cart' element={<Cart/>} />
          <Route path="/model" element={<Model />} />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
