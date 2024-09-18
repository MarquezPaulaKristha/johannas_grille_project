import React, { useState } from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import './ConfirmOrder.css';

const ConfirmOrder = () => {
    // State to control visibility
    const [isVisible, setIsVisible] = useState(true);

    // Function to handle closing the receipt
    const handleClose = () => {
        setIsVisible(false);
    };

    // If not visible, return null (will remove the component from the DOM)
    if (!isVisible) {
        return null;
    }

    return (
        <div className="receipt-container">
            <div className="receipt-container-content">
                <div className="receipt-header">
                    <div className="close-icon" onClick={handleClose}>
                        <IoIosCloseCircle size={25} />
                    </div>
                    <h3>Your ID No.</h3>
                    <h1 className="order-id">0015</h1>
                </div>
                <div className="branch-info">
                    <span className="location-icon">📍</span>
                    <span>Main Branch, Bauan Batangas City</span>
                </div>
                <div className="order-details">
                    <div className="order-item">
                        <div className="quantity">1x</div>
                        <div className="item-details">
                            <span className="item-name">Johanna's Babyback Ribs</span>
                            <span className="item-size"> (Large Size) </span>
                        </div>
                        <div className="item-price">P 350.00</div>
                    </div>
                    <div className="order-total">
                        <span>Total</span>
                        <span>P 350.00</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmOrder;
