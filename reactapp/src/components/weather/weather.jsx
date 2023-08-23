import React from 'react';
import './weatherbox.css';
import '/wwwroot/css/site.css';
import './TheWeather.jsx';
//import '/bootstrap-4.0.0-dist/css/bootstrap-grid.css';
//import './TheWeather.js';

function WeatherCard() {
    

    return (
        <div className="card weather-card">
            <div className="weather-search">
                <input className="search-input" type="text" id="search-input" placeholder="Sök på en stad" />
                <button className="search-btn" id="search-button"><img className="search-btn-img" src="wwwroot/Images/search.png" alt="Search" /></button>
            </div>

            <div id="error-message"></div>
            <div>
                <img id="icon" className="weather-main-icon" src="wwwroot/Images/mist.png" alt="Weather Icon" />
                <p className="weather-desc" id="weatherdesc"></p>
                <h2 className="weather-city" lang="sv" id="stad"></h2>

                <div className="details">
                    <div className="col">
                        <h1 className="weather-temp" id="temp"> </h1>
                    </div>
                </div>

                <div className="SecondDetails">
                    <div className="col">
                        <div>
                            <p>Luftfuktighet:</p>
                            <p className="humidity" id="humidity"></p>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <p>Vind:</p>
                            <p className="wind" id="wind"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default WeatherCard;
