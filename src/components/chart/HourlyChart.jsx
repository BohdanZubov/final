import React from "react";
import {
  CartesianGrid,
  Dot,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const HourlyChart = ({ hourly }) => {
  if (!hourly.length) return null;

  return (
    <div className="rounded-[20px] bg-panel p-6 md:p-8">
      <h3 className="mb-4 font-medium text-black text-[16px]">
        Hourly forecast
      </h3>

      <div className="w-full h-65 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={hourly}
            margin={{ top: 8, right: 0, bottom: 0, left: 0 }}
          >
            <CartesianGrid
              vertical={true}
              stroke="#000000"
              strokeOpacity="0.08"
            />
            <XAxis
              dataKey="label"
              tickLine={false}
              axisLine={false}
              tickMargin={18}
              orientation="top"
            />
            <YAxis
              tickFormatter={(temp) => `${Math.round(temp)}℃`}
              axisLine={false}
              tickLine={false}
              domain={["dataMin-2", "dataMax+2"]}
              tickMargin={18}
            />
            <Tooltip
              separator=""
              formatter={(temp) => [`${temp}℃`, "Temperature: "]}
              contentStyle={{border: "none", borderRadius: 10}}
            />
            <Line dataKey="temp" type="monotone" stroke="var(--color-brand)" dot={{r: 4}} strokeWidth={2} activeDot={{r: 6, strokeWidth: 0}} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HourlyChart;
