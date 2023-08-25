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
        // Simulate email registration process here (no API call needed)
        closePopup();
    };


    return (
        <div className="footer text-white ">

            <div style={{ display: 'block', padding: 30 }}>
                <h2 className="signup-text">Come on! Sign up for some more mjau-content</h2>
                <button type="button" onClick={openPopup}>
                    Click Me to Open popup
                </button>
                <PopUp isOpen={isPopupOpen} onClose={closePopup} onSubmit={handleEmailSubmit} />

            </div>

        </div>


    );
};

export default SignUp;





