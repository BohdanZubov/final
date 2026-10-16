import React from "react";
import MetricCard from "./MetricCard";
import {
  WiBarometer,
  WiHumidity,
  WiStrongWind,
  WiThermometer,
} from "react-icons/wi";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const label = "text-[18px] font-medium text-black tablet:text-[20px]";
const value = "text-[28px] font-medium text-black tablet:text-[32px]";

const DetailMetricGrid = ({ city }) => {
  return (
    <div className="grid grid-cols-1 gap-6 rounded-[20px] bg-panel p-6 md:grid-cols-3 md:p-10">
      <MetricCard>
        <span className={label}>Feels like</span>
        <span className={value}>{city.feelsLike}℃</span>
        <WiThermometer className="text-[64px] text-red-500 md:text-[72px]" />
      </MetricCard>
      <MetricCard>
        <span className={label}>Min ℃</span>
        <span className={value}>{city.min}℃</span>
        <span className={`${label} mt-2`}>Max ℃</span>
        <span className={value}>{city.max}℃</span>
      </MetricCard>
      <MetricCard>
        <span className={label}>Humidity</span>
        <span className={value}>{city.humidity}%</span>
        <WiHumidity className="text-[64px] text-sky-500 md:text-[72px]" />
      </MetricCard>
      <MetricCard>
        <span className={label}>Pressure</span>
        <span className={value}>{city.pressure} Pa</span>
        <WiBarometer className="text-[64px] text-black/70 md:text-[72px]" />
      </MetricCard>
      <MetricCard>
        <span className={label}>Wind speed</span>
        <span className={value}>{city.wind} m/s</span>
        <WiStrongWind className="text-[64px] text-sky-600 md:text-[72px]" />
      </MetricCard>
      <MetricCard>
        <span className={label}>Visibility</span>
        <span className={value}>{city.visibility}</span>
        <MdOutlineRemoveRedEye className="text-[64px] text-black/70 md:text-[72px]" />
      </MetricCard>
    </div>
  );
};

export default DetailMetricGrid;
