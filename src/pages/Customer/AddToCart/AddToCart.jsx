import React, { useState }from "react";
import { assets } from '../../../assets/assets'
import { IoIosArrowBack } from "react-icons/io";
import { TbBrandGoogleMaps } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import FinalizeOrder from "../../Customer/FinalizeOrder/FinalizeOrder";
import './AddToCart.css';

const AddToCart = () => {
  
  const [isVisible, setIsVisible] = useState(true);
  const [showOrder, setShowOrder] = useState(false); // Initialize a state to track whether to show the cart
  
  const handleClick = () => {
    setShowOrder(true); // Set showCart to true when the button is clicked
  };

  const handleClose = () => {
    setIsVisible(false);  // Hide the cart
  };

  if (!isVisible) {
    return null; // Don't render the cart if it's not visible
  }

  return (
    <div className="addtocart">
      <div className="addtocart-container">
        <header className="addtocart-header">
          <i className="back-arrow" onClick={handleClose}>
              <IoIosArrowBack size={33} />
          </i>
          <h2>My Cart</h2>
        </header>

        <section className="addtocart-branch">
          <i className="location-icon"><TbBrandGoogleMaps size={33} /></i>
          <span>Main Branch, Bauan Batangas City</span>
          <i className="down-icon"><IoIosArrowDown size={30} /></i>
        </section>

        <div className="addtocart-items">
          <div className="addtocart-item">
            <img
              src={assets.menu_1}
              alt="Babyback Ribs"
              className="addtocart-item-image"
            />
            <div className="addtocart-item-details">
              <p>Johanna's Babyback Ribs <br /><span>Large, P350</span></p>
              <div className="addtocart-item-quantity">
                <i className="quantity-btn"><FiMinus /></i>
                <span className="quantity">1</span>
                <i className="quantity-btn"><IoMdAdd /></i>
              </div>
            </div>
          </div>

          <div className="addtocart-item">
            <img
              src={assets.menu_3}
              alt="Grilled Salmon"
              className="addtocart-item-image"
            />
            <div className="addtocart-item-details">
              <p>Grilled Salmon Steak <br /><span>P395</span></p>
              <div className="addtocart-item-quantity">
                <i className="quantity-btn"><FiMinus /></i>
                <span className="quantity">1</span>
                <i className="quantity-btn"><IoMdAdd /></i>
              </div>
            </div>
          </div>
        </div>

        <div className="addtocart-summary">
          <p>Total</p>
          <p>P745.00</p>
        </div>
        <div className="bott">
          <button className="finalize-btn" onClick={handleClick}>FINALIZE ORDER</button>
          {showOrder && <FinalizeOrder />} 
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
