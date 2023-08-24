import React from 'react';
import '/public/css/footerstyle.css';
import Modal from '../../../src/Modal/Modal';



function SignUp() {
    

    //const [open, setOpen] = React.useState(false);

    //const handleClose = () => { setOpen(false); };

    const handleOpen = () => {
        setOpen(true);
    };


    return (
        <div className="footer text-white ">
        
            <div style={{ display: 'block', padding: 30 }}>
                <h4 className="signup-text">Come on! Sign up for some more mjau-content</h4>
                <button type="button"
                    onClick={handleOpen}>
                    Click Me to Open Modal
                </button>
                <Modal />
            </div>

            </div>


    );
}

export default SignUp;