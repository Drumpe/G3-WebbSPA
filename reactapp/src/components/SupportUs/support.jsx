//import React from 'react';

import { useState } from 'react';
import SupportPopUp from './SupportPopUp';
import "./support.css";


const SupportUs = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleSupportSubmit = () => {
        <p>Thank you for support up!</p>
        closePopup();
    };

    
    return (
        <div style={{ display: 'block', padding: 30 }}>
            <h2 className="support-h2">Support Us!</h2>
            <button type="submit" className="btn-footer bf-2" onClick={openPopup}>
               Support Us
            </button>
            <SupportPopUp isOpen={isPopupOpen} onClose={closePopup} onSubmit={handleSupportSubmit} />

        </div>
    );
};

export default SupportUs;