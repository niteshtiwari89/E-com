// Modal.js
import React from 'react';
import './FoodItem.css'; // Add your modal styles here

const Modal = ({ item, onClose }) => {
    if (!item) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h2>{item.name}</h2>
                <img src={item.image} width={"200px"} alt={item.name} />
                <p>{item.description}</p>
                <p>Price: ₹{item.price}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
