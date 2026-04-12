"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import "./getweather.css";

export default function TheWeather() {
  // const [input, setInput] = useState("");
  const [weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
  });

  //useEffect and the empty [] stops the code from running in an infinite loop and making hundreds of calls to the API
  useEffect(() => {
    getWeather();
  }, []);

  // function to fetch data using Axios
  const getWeather = () => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=54.596617288210005&lon=-5.930042286615252&appid=708e98ba900f0f0b00a0560aaa10ae72",
        // `https://weather.googleapis.com/v1/forecast/days:lookup?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&location.latitude=54.596617288210005&location.longitude=5.930042286615252`,
        {
          params: {
            units: "metric",
          },
        },
      )
      .then((res) => {
        console.log(res);
        setWeather({ data: res.data, loading: false, error: false });
      })

      .catch((err) => {
        setWeather({ ...weather, data: {}, error: true });
      });
  };

  return (
    <div className="app">
      <div className="weather-app">
        {weather.error && (
          <div className="error-message">
            <span>Uh oh! Something went wrong. Please refresh your app.</span>
          </div>
        )}

        {weather && weather.data && weather.data.main && (
          <div>
            <div>
              <div className="city-name">{weather.data.name}</div>
              <div className="description">{weather.data.weather[0].main} </div>

              <div className="icon-temp">
                <img
                  width={120}
                  height={120}
                  src={"https://openweathermap.org/img/wn/10d@2x.png"}
                  alt=""
                />
                {Math.round(weather.data.main.temp)}
                <sup className="deg">°C</sup>
              </div>
            </div>

            <div className="feels-like">
              Feels like: {Math.round(weather.data.main.feels_like)}{" "}
              <sup className="degfeelslike">°C</sup>
            </div>

            <div>
              <tr>
                <td className="min-max-temp">
                  Min: {Math.round(weather.data.main.temp_min)}{" "}
                  <sup className="degminmax">°C</sup>
                </td>

                <td className="min-max-temp" width="180px" align="center">
                  Max: {Math.round(weather.data.main.temp_max)}{" "}
                  <sup className="degminmax">°C</sup>
                </td>
              </tr>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
