import React from "react";

const HourlyTooltip = ({ active, payload }) => {
  if (!active || !payload.length) {
    return null;
  }

  const point = payload[0].payload;

  return <div className="rounded-[10px] ">HourlyTooltip</div>;
};

export default HourlyTooltip;
