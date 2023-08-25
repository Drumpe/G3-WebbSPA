const Weather = () => {
    return (
        <div className="card weather-card">
            <div className="weather-search">
                <input
                    className="search-input"
                    type="text"
                    id="search-input"
                    placeholder="Sök på en stad"
                />
                <button className="search-btn" id="search-button">
                    <img className="search-btn-img" src="/images/search.png" />
                </button>
            </div>
            <div className="error-message-weather" />
            <div>
                <img
                    id="icon"
                    className="weather-main-icon"
                    src="/images/mist.png"
                />
                <p className="weather-desc" id="weatherdesc" />
                <h2 className="weather-city" lang="sv" id="stad" />
                <div className="details">
                    <div className="col">
                        <h1 className="weather-temp" id="temp">
                            {" "}
                        </h1>
                    </div>
                </div>
                <div className="SecondDetails">
                    <div className="col">
                        <div>
                            <p>Luftfuktighet:</p>
                            <p className="humidity" id="humidity" />
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <p>Vind:</p>
                            <p className="wind" id="wind" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Weather;