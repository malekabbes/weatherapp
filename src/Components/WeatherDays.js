import React from 'react';
import classes from "./weather.module.css";

const WeatherDays =({data})=>{
 console.log("data",data)
 const {dt_txt} = data;
 const {temp_min,temp_max} = data?.main;
const {icon}= data?.weather[0];
    return(
       <div className={classes.wrapper}>
           <div className={classes.element}>{dt_txt}</div>
           <div className={classes.element}>{temp_min}°</div>
           <div className={classes.element}>{temp_max}°</div>
           <div className={classes.imgel}><img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" /></div>
           
       </div>
    );
};
export default WeatherDays;
