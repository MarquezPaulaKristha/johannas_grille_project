import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../../assets/assets'
import { Link } from 'react-router-dom';
import AddToCart from '../../../pages/Customer/AddToCart/AddToCart';
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";


const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home");
    const [showaddCart, setShowAddToCart] = useState(false); // Initialize a state to track whether to show the cart

  const handleCartClick = () => {
    setShowAddToCart(prevState => !prevState); // Set showCart to true when the button is clicked
  };


  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <Link to='/'onClick={()=>setMenu("home")}className={menu==="home"?"active":""}>HOME</Link>
        <a href='#explore-menu'onClick={()=>setMenu("menu")}className={menu==="menu"?"active":""}>MENU</a>
        <a href='#reservation'onClick={()=>setMenu("reservation")}className={menu==="reservation"?"active":""}>RESERVATION</a>
        <a href='#footer'onClick={()=>setMenu("contact us")}className={menu==="contact us"?"active":""}>CONTACT US</a>
      </ul>
      <div className="navbar-right">
        <i className="nav-search">{<IoSearchSharp size={28}/>}</i>
        <div className="navbar-search-icon">
          <i onClick={handleCartClick} className='nav'>{<FiShoppingCart size={26}/>}</i>
          {showaddCart && <AddToCart />}
          <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)} className='login-btn'>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
