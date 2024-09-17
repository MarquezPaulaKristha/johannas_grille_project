// App.js
import React, { useState } from 'react';
import Navbar from './components/Customer/Navbar/Navbar';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Customer/Home/Home';
import Cart from './pages/Customer/Cart/Cart';
import AddToCart from './pages/Customer/AddToCart/AddToCart';
// import Footer from './components/Customer/Footer/Footer';
import LoginPopUp from './pages/Customer/Login/Login';
import ConfirmOrder from './pages/Customer/ConfirmOrder/ConfirmOrder';
import Admin_LoginPopUp from './pages/Admin/Login/Login';
// import FinalizeOrder from './pages/FinalizeOrder/FinalizeOrder';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/add-to-cart' element={<AddToCart />} />
          <Route path='/confirm' element={<ConfirmOrder />} />
          <Route path='/login/dashboard' element={<Admin_LoginPopUp />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
