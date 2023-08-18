import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '/wwwroot/css/site.css'
import WeatherCard from './components/weather/weather.jsx'
import './components/weather/weatherbox.css'
import Footer from './components/footer/footer.jsx'
import Navbar from './components/navbar/navbar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Navbar />
        <WeatherCard />
        <App />
        <Footer />
  </React.StrictMode>,
)
