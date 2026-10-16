import React from "react";
import { IoClose } from "react-icons/io5";
import DetailMetricGrid from "./DetailMetricGrid";
import WeeklyForecast from "./WeeklyForecast";
import HourlyChart from "../chart/HourlyChart";

const WeatherDetail = ({ city, onClose }) => {

  return (
    <div className="flex flex-col gap-8 mt-12">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-black font-semibold text-[24px]">
          {city.city}, {city.country}
        </h2>
        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-box text-xl hover:bg-brand"
        >
          <IoClose />
        </button>
      </div>

      <DetailMetricGrid city={city} />
      <HourlyChart hourly={city.hourly} />
      <WeeklyForecast days={city.weekly} />
    </div>
  );
};

export default WeatherDetail;
