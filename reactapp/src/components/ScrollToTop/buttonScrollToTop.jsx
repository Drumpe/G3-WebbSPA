import React, { useEffect, useState } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { //När vi har fler artikler ska vi ha en högre siffra
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
        });
    }, []);

const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
    return (
        <button className="button-toTop" style={{ display: isVisible ? 'block' : 'none' }} onClick={goToTop}>
         ^ 
        </button>
    );
}
export default ScrollToTop;