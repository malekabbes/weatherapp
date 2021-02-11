import React from "react";
import classes from "./todayweather.module.css";


const TodayWeather = ({ data }) => {

  const { country, name , population} = data?.city; //if data exists then carry on to city
  const today = data.list[0];
  const { temp, humidity } = today.main;
  const { description, icon } = today.weather[0];


  return (
    <div className={classes.wrapper}>
      <div style={{ display: "flex", flexDirection: "column", width: "25vw" }}>
        <h2>{name}</h2>
        <span><img src={`https://www.countryflags.io/${country}/shiny/64.png`} alt="icon"/></span><span> {country}</span>
        <h2>{population}</h2>
        <p>Humidity : {humidity}</p>
      </div>
      <div style={{ width: "30vw" }}>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`} // https://openweathermap.org/weather-conditions
          alt="icon"
        />
        <p style={{ color: "white" }}>{description}</p>
        <p style={{ fontWeight: "bolder" }}>{temp}°</p>
      </div>
    </div>
    
  );
};

export default TodayWeather;