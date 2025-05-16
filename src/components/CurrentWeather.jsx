import React from 'react';

const CurrentWeather = ({ data }) => {
  const weatherIcon = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2 className="city-name">{data.name}, {data.sys.country}</h2>
        <div className="weather-icon">
          <img src={iconUrl} alt={data.weather[0].description} />
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
      </div>
      
      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Temperature</span>
          <span className="detail-value">{Math.round(data.main.temp)}°C</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{data.main.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind Speed</span>
          <span className="detail-value">{data.wind.speed} m/s</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Feels Like</span>
          <span className="detail-value">{Math.round(data.main.feels_like)}°C</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;