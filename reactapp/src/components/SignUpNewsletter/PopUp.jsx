import React, { useState } from 'react';


const PopUp = ({ isOpen, onClose, onSubmit }) => {
    const [email, setEmail] = useState('');


    if (!isOpen) return null;

    return (
        <div>
            <button className="close-button" onClick={onClose}>
                Close
            </button>
            <form>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <button type="submit" onClick={onSubmit}>Register</button>
            </form>
        </div>
    );
};

export default PopUp;
