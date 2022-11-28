import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './Components/Pages/Product';
import SignUp from './Components/Pages/SignUp';

import Model from './Components/model';
import Model11 from './Components/model11';
import Model12 from './Components/model12';

import Model2 from './Components/model2';
import Model21 from './Components/model21';
import Model22 from './Components/model22';

import Model3 from './Components/model3';
import Model31 from './Components/model31';
import Model32 from './Components/model32';

import Model4 from './Components/model4';
import Model41 from './Components/model41';
import Model42 from './Components/model42';

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
          <Route path="/model11" element={<Model11 />} />
          <Route path="/model12" element={<Model12 />} />

          <Route path="/model2" element={<Model2 />} />
          <Route path="/model21" element={<Model21 />} />
          <Route path="/model22" element={<Model22 />} />

          <Route path="/model3" element={<Model3 />} />
          <Route path="/model31" element={<Model31 />} />
          <Route path="/model32" element={<Model32 />} />

          <Route path="/model4" element={<Model4 />} />
          <Route path="/model41" element={<Model41 />} />
          <Route path="/model42" element={<Model42 />} />

        </Routes>
        
      </Router>
    </>
  );
}

export default App;
