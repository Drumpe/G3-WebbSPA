import React, { useState } from 'react';
import './PopUp.css';


const PopUp = ({ isOpen, onClose, onSubmit }) => {
    const [email, setEmail] = useState('');
    const popupClassName = isOpen ? 'popup-overlay show' : 'popup-overlay';


    if (!isOpen) return null;

    return (
        <div className={popupClassName}>
            <button className="btn-popup bf-1 top-5 end-5" onClick={onClose}>
                Close
            </button>
            <form>
                <label className="label-popup">
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <button type="submit" className="btn-footer bf-1 end-5" onClick={onSubmit}>Register</button>
            </form>
        </div>
    );
};

export default PopUp;
