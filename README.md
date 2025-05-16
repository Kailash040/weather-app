Weather Forecast App 🌤️
Weather App Preview

A beautiful, responsive weather application built with React.js that displays current weather conditions and a 5-day forecast for any city worldwide.

✨ Features
🌡️ Current weather conditions (temperature, humidity, wind speed)

📅 5-day weather forecast

🔍 City search functionality

🌗 Light/dark theme toggle

🎬 Smooth animations using GSAP

📱 Fully responsive design (mobile, tablet, desktop)

⏳ Loading and error states

🌐 OpenWeatherMap API integration

🛠️ Technologies Used
React

GSAP

OpenWeatherMap

CSS3

🚀 Quick Start
Prerequisites
Node.js (v14 or higher)

npm (v6 or higher)

OpenWeatherMap API key (free tier available)

Installation
Clone the repository

bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
Install dependencies

bash
npm install
Create .env file

bash
cp .env.example .env
Add your OpenWeatherMap API key to .env

REACT_APP_WEATHER_API_KEY=your_api_key_here
Start the development server

bash
npm start
The app will open in your browser at http://localhost:3000

📦 Scripts
Command	Description
npm start	Runs the app in development mode
npm test	Launches the test runner
npm run build	Builds the app for production
npm run eject	Ejects from Create React App
🌍 Deployment
Netlify
Deploy to Netlify

Push your code to GitHub

Connect your repository to Netlify

Set build command: npm run build

Set publish directory: build

Add environment variable: REACT_APP_WEATHER_API_KEY

Vercel
Deploy with Vercel

Import your GitHub repository

Select framework: Create React App



📂 Project Structure
weather-app/
├── public/            # Static assets
├── src/
│   ├── components/    # React components
│   │   ├── CurrentWeather.jsx
│   │   ├── WeatherForecast.jsx
│   │   ├── SearchBar.jsx
│   │   └── ThemeToggle.jsx
│   ├── styles/        # CSS files
│   ├── App.js         # Main component
│   └── index.js       # App entry point
├── .env.example       # Environment template
├── package.json       # Project config
└── README.md          # This file
🔧 Troubleshooting
