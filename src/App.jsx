import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

import './styles/light-theme.css';
import './styles/dark-theme.css';


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState('light');

  const API_KEY = '4cdab2a52f22c035b386c57096ef21e5';

  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <h1 className="app-title">Weather Forecast</h1>
        <SearchBar onSearch={fetchWeatherData} />
        
        {loading && <Loading />}
        {error && <ErrorMessage message={error} />}
        {weatherData && !loading && !error && (
          <CurrentWeather data={weatherData} />
        )}
      </div>
    </div>
  );
}

export default App;