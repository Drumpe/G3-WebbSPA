import React from 'react';

const Modal = props => {

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                <h4>Rubrik</h4>
                </div>
                <div className="modal-body">
                    This is the content</div>
                <div className="modal-footer">
                    <button>Yes or No</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;