import React from "react";
import WeatherIcon from "./WeatherIcon";

const WeeklyForecast = ({ days }) => {
  console.log(days);
  return (
    <div className="rounded-[20px] bg-panel p-6 md:p-8">
      <h3 className="md-4 font-medium text-[16px] text-black">
        Weekly Forecast
      </h3>
      <ul className="flex flex-col gap-2">
        {days.map((day) => (
          <li
            key={day.day}
            className="grid grid-cols-3 items-center gap-2 rounded-[10px] bg-white/70 px-4 py-2 text-[14px] font-medium text-black md:px-6"
          >
            <span>{day.day}</span>
            <span>
              <WeatherIcon condition={day.condition} className="text-[28px] text-amber-400"/>
              {day.max}/{day.min} ℃
            </span>
            <span className="text-right capitalize">{day.condition}</span>  
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeeklyForecast;
