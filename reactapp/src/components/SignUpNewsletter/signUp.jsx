//import React from 'react';
import '/public/css/footerstyle.css';
import PopUp from './PopUp';
import React, { useState } from 'react';



const SignUp = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleEmailSubmit = () => {
        // Simulate email registration
        <p>Thank you for signing up!</p>
        closePopup();
    };

    return (
        <div style={{ display: 'block', padding: 30 }}>
            <h2 className="signup-text">Come on! Sign up for some more mjau-content</h2>
            <button type="registerButton" className="btn-footer bf-2" onClick={openPopup}>
                Click Me to Open popup
            </button>
            <PopUp isOpen={isPopupOpen} onClose={closePopup} onSubmit={handleEmailSubmit} />

        </div>
    );
};

export default SignUp;





