/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import './support.css';
import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";


function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
};

function getAnimationSettings(originXA, originXB) {
    return {
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 0,
        particleCount: 150,
        origin: {
            x: randomInRange(originXA, originXB),
            y: Math.random() - 0.2
        }
    };
}

const SupportPopUp = ({ isOpen, onClose }) => {

    const popupClassName = isOpen ? 'popup-overlay show' : 'popup-overlay';

    const refAnimationInstance = useRef(null);
    const [intervalId, setIntervalId] = useState();
    const [isSend, setIsSend] = useState(false);
    const getInstance = useCallback((instance) => {
        refAnimationInstance.current = instance;
    }, []);

    const onBack = () => {
        setIsSend(false);
        onClose();
        stopAnimation();
    }

    const nextTickAnimation = useCallback(() => {
        if (refAnimationInstance.current) {
            refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
            refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
        }
    }, []);

    const startAnimation = useCallback(() => {
        setIsSend(true)
        if (!intervalId) {
            setIntervalId(setInterval(nextTickAnimation, 400));
        }
    }, [intervalId, nextTickAnimation]);

    const stopAnimation = useCallback(() => {
        clearInterval(intervalId);
        setIntervalId(null);
        refAnimationInstance.current && refAnimationInstance.current.reset();
    }, [intervalId]);

    useEffect(() => {
        return () => {
            clearInterval(intervalId);
        };
    }, [intervalId]);

    if (!isOpen) return null;

    return (
        <div className={popupClassName}>
            <div className="support_container">
                <div className="support_content">

                    <div className="supportheader">
                        <h1 className="support_h1">Thanks</h1>
                        <p className="support_logo">✅</p>
                        <h2 className="support_h2">Fill in your information</h2>
                    </div>
                    {!isSend &&
                        <div className="supportbody">
                            <form className="support_form">
                                <label className="support_label" htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" required />
                                <br /><br />
                                <label className="support_label" htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                                <br /><br />
                                <label className="support_label" htmlFor="message">Message for Support:</label>
                                <textarea className="support_textarea" id="message" name="message" required></textarea>
                            </form>
                        </div>}
                    <br /><br /><br />

                    <div className="supportfooter">
                        <button className="btn-footer bf-1" onClick={startAnimation}>Send</button>
                        <button type="reset" className="btn-footer bf-1" onClick={stopAnimation}>Reset</button>
                        <button className="btn-footer bf-1" onClick={onBack}> Back Home </button>
                    </div>
                </div>
            </div>
            <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
        </div>
    );
};

export default SupportPopUp;
