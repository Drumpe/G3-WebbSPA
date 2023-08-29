import React, { useState } from "react";



const Theme = () => {
    const [darkMode, setDarkMode] = React.useState(false);
    const imgPathDark = "./public/Images/moon-icon.png";
    const imgPathLight = "./public/Images/sun-icon.png";
 
    React.useEffect(() => {
        const json = localStorage.getItem("site-dark-mode");
        const currentMode = JSON.parse(json);
        if (currentMode) {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }, []);

    React.useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
        }
        const json = JSON.stringify(darkMode);
        localStorage.setItem("site-dark-mode", json);
    }, [darkMode]);

    return (
        <div className="img-bg"><img alt="DarkMode" src={darkMode ? imgPathLight : imgPathDark } onClick={() => setDarkMode(!darkMode)}></img>
        </div>
    );
}
export default Theme;