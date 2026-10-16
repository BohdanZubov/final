import React from "react";
import WeatherCard from "./WeatherCard";
import WeatherDetail from "./WeatherDetail";

const WeatherSection = ({
  cities,
  selectedCity,
  onRefresh,
  onToggleFavorite,
  onRemove,
  onSelect,
  onCloseDetail,
}) => {
  return (
    <section className="w-full py-14 md:py-16">
      <div className="w-full mx-auto max-w-285 px-5 md:px-8">
        <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 md:gap-10 xl:grid-cols-3 xl:gap-x-22.5 xl:gap-y-12.5">
          {cities.map((city) => (
            <WeatherCard
              key={city.id}
              city={city}
              onRefresh={onRefresh}
              onToggleFavorite={onToggleFavorite}
              onRemove={onRemove}
              onSelect={onSelect}
            />
          ))}
        </div>
        {selectedCity && (
          <WeatherDetail city={selectedCity} onClose={onCloseDetail} />
        )}
      </div>
    </section>
  );
};

export default WeatherSection;
