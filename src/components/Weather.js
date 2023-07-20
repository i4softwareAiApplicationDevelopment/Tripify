import React, { useState, useEffect, useContext } from 'react';
import { TravelPlanContext } from '../contexts/TravelPlanContext';

const Weather = () => {
    const { location } = useContext(TravelPlanContext);
    const [weatherData, setWeatherData] = useState({});
    
    useEffect(() => {
        const fetchWeatherData = async () => {
            if (!location) {
                return;
            }

            const city = location
            
            const url = `https://open-weather13.p.rapidapi.com/city/${city}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'f73da09e1cmsh691729ed715d7dbp11a319jsnb092afe6015d',
                    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
                }
            };
            
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result)
                setWeatherData({
                    mainData: result.main,
                    weather: result.weather[0].main
                });
            } catch (error) {
                console.error(error);
            }
        };
        
        fetchWeatherData();
    }, [location]);

    return (
        <div>
            {weatherData && weatherData.mainData && (
                <div>
                    <h2>Weather forecast for: {location}</h2>
                    {console.log(weatherData)}
                    <p><b>Temperature:</b> {weatherData?.mainData["temp"]}°C</p>
                    <p><b>Weather:</b> {weatherData?.weather}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
