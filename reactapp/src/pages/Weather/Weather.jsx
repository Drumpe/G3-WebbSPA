import React, { useState, useEffect } from 'react';
import './Weather.css'


function WeatherComponent() {

    const [temperature, setTemperature] = useState('');

    const [windSpeed, setWindSpeed] = useState('');

    const [city, setCity] = useState('');

    const [humidity, setHumidity] = useState('');

    const [description, setDescription] = useState('');

    const [iconSrc, setIconSrc] = useState('');

    const [errorMessage, setErrorMessage] = useState('');







    useEffect(() => {

        getLocation();

    }, []);



    // geolocation 

    function fetchWeatherData(latitude, longitude, city) {

        let apiUrl = '';

        setErrorMessage('');



        if (latitude && longitude) {

            apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=sv&appid=5f8720cba1f10e09507ee30899b138a5`;

        } else if (city) {

            apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&lang=sv&appid=5f8720cba1f10e09507ee30899b138a5`;

        } else {

            console.log('Felaktig inmatning');

            setErrorMessage('Felaktig inmatning');

            return;

        }



        fetch(apiUrl)

            .then((response) => response.json())

            .then((data) => {

                const temperature = Math.round(data.main.temp);

                setTemperature(`${temperature.toString()}°C`);



                const windSpeed = Math.round(data.wind.speed);

                setWindSpeed(`${windSpeed.toString()}m/s`);



                setCity(data.name);



                setHumidity(`${data.main.humidity} %`);



                setDescription(data.weather[0].description);



                // set the picture after what weathercondition 

                if (data.weather[0].main === 'Clouds') {

                    setIconSrc('public/Images/clouds.png');

                } else if (data.weather[0].main === 'Clear') {

                    setIconSrc('public/Images/clear.png');

                } else if (data.weather[0].main === 'Rain') {

                    setIconSrc('public/Images/rain.png');

                } else if (data.weather[0].main === 'Mist') {

                    setIconSrc('public/Images/mist.png');

                } else if (data.weather[0].main === 'Snow') {

                    setIconSrc('public/Images/snow.png');

                } else if (data.weather[0].main === 'Drizzle') {

                    setIconSrc('public/Images/drizzle.png');

                } else if (data.weather[0].main === 'Thunderstorm') {

                    setIconSrc('public/Images/lightning.png');

                }

            })

            .catch((error) => {

                console.log('Error:', error);

                setErrorMessage('Ett fel uppstod, försök igen!');

            });

    }



    function getLocation() {

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(

                (position) => {

                    const latitude = position.coords.latitude;

                    const longitude = position.coords.longitude;

                    fetchWeatherData(latitude, longitude);

                },

                (error) => {

                    console.log('Error:', error);

                }

            );

        } else {

            console.log('Geolocation kan inte användas på din browser.');

            setErrorMessage('Geolocation kan inte användas på din browser.');

        }

    }

    const [searchInput, setSearchInput] = useState('');

    const handleSearchInput = () => {

        const searchCity = searchInput.trim();

        if (searchCity) {

            fetchWeatherData(null, null, searchCity);

        } else {

            setErrorMessage('Skriv in en befintlig stad');

        }

    };



    return (

        <div className=" card weather-card">

            <div className="weather-search">

                <input

                    className="search-input"

                    type="text"

                    value={searchInput}

                    onChange={(e) => setSearchInput(e.target.value)}

                    placeholder="Sök på en stad"

                />

                <button className="search-btn" onClick={handleSearchInput}>

                    <img className="search-btn-img" src="./public/Images/search.png" alt="Search" />

                </button>

            </div>



            <div>{errorMessage}</div>

            <div>

                <img className="weather-main-icon" src={iconSrc} alt="Weather Icon" />

                <p className="weather-desc">{description}</p>

                <h2 className="weather-city" lang="sv">

                    {city}

                </h2>



                <div className="details">

                    <div className="col">

                        <h1 className="weather-temp">{temperature}</h1>

                    </div>

                </div>



                <div className="SecondDetails">

                    <div className="col">

                        <div>

                            <p>Luftfuktighet:</p>

                            <p className="humidity">{humidity}</p>

                        </div>

                    </div>

                    <div className="col">

                        <div>

                            <p>Vind:</p>

                            <p className="wind">{windSpeed}</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}



export default WeatherComponent; 