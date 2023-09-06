import PopUp from './PopUp';
import React, { useState } from 'react';



const SignUp = () => {
    const [email, setEmail] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleEmailSubmit = () => {
        // Simulate email registration
        
        const token = localStorage.getItem("token")
        fetch(`/home/SubmitEmail?email=${email}`,
            {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` }
            });
        <p>Thank you for signing up!</p>
        closePopup();
    };

    return (
        <div style={{ display: 'block' }}>
            <h2 className="signup-text">Come on! Sign up for our newsletter!</h2>
            <button type="registerButton" className="btn-footer bf-2" onClick={openPopup}>
                Signup!
            </button>
            <PopUp isOpen={isPopupOpen} onClose={closePopup} onSubmit={handleEmailSubmit} email={email} setEmail={setEmail} />

            </div>
    );
};

export default SignUp;





