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

    const getInstance = useCallback((instance) => {
        refAnimationInstance.current = instance;
    }, []);

    const nextTickAnimation = useCallback(() => {
        if (refAnimationInstance.current) {
            refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
            refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
        }
    }, []);

    const startAnimation = useCallback(() => {
        if (!intervalId) {
            setIntervalId(setInterval(nextTickAnimation, 400));
        }
    }, [intervalId, nextTickAnimation]);

    useEffect(() => {
        return () => {
            clearInterval(intervalId);
        };
    }, [intervalId]);

    if (!isOpen) return null;

    return (
        <div className={popupClassName}>
            <div className="container_2">
                <div className="content_2">
                    <h1>Thank You for Your Support</h1>
                    <p className="logo">✅</p>
                    <h2>Fill in your information</h2>
                    <form>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                        <br /><br />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        <br /><br />
                        <label htmlFor="message">Message for Support:</label>
                        <textarea id="message" name="message" required></textarea>
                        <br /><br /><br />

                        <button className="btn-footer bf-1" onClick={startAnimation}>Send</button>

                        <button type="reset" className="btn-footer bf-1">Reset</button>

                        <button className="btn-footer bf-1" onClick={onClose}> Back Home </button>

                        
                    </form>
                </div>
            </div>
            <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
        </div>
    );
};

export default SupportPopUp;
