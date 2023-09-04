import React, { useState, useEffect } from "react";

const Theme = () => {
    const [darkMode, setDarkMode] = useState(false);
    const imgPathDark = "./public/Images/moon-icon.png";
    const imgPathLight = "./public/Images/sun-icon.png";
    const imgPathLogoDark = "./public/Images/Logo1_inv.png";
    const imgPathLogoLight = "./public/Images/Logo1.png";
    const iconSize = "22px"; 

    useEffect(() => {
        const json = localStorage.getItem("site-dark-mode");
        const currentMode = JSON.parse(json);
        if (currentMode) {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
        }
        const json = JSON.stringify(darkMode);
        localStorage.setItem("site-dark-mode", json);
    }, [darkMode]);

    return (
        <div className="img-bg">
            <a className="navbar-brand" href="#">
                <img
                    src={darkMode ? imgPathLight : imgPathDark}
                    alt={darkMode ? "LightMode" : "DarkMode"}
                    onClick={() => setDarkMode(!darkMode)}
                    style={{ width: iconSize, height: iconSize, marginLeft: "10px" }} 
                />
                <img
                    src={darkMode ? imgPathLogoDark : imgPathLogoLight}
                    alt="Atlas Portal"
                    style={{ width: "170px", height: "90px", marginLeft: '40px', marginBottom: '5px'}} 
                />
            </a>
        </div>

    );
};

export default Theme;
