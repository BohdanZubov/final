import React, { useEffect, useState } from "react";
import Container from "./components/ui/Container";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import { getWeather, getWeatherForCities } from "./services/weatherService";
import WeatherSection from "./components/weather/WeatherSection";
import { saveCities } from "./utils/saveCities";
import NewsSection from "./components/news/NewsSection";
import { getNews } from "./services/newsService";
import { Footer } from "./components/footer/Footer";
import GallerySection from "./components/gallery/GallerySection";
import { getGallery } from "./services/galleryService";

const DEFAULT_CITIES = ["London", "Kyiv", "Kharkiv"];

const App = () => {
  const [cities, setCities] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [news,setNews] = useState([]);
  const [gallery, setGallery] = useState([])

  const loadData = async () => {
    try {
      const names =
        JSON.parse(localStorage.getItem("cities")) || DEFAULT_CITIES;
      const weather = await getWeatherForCities(names);
      const news = await getNews()
      const gallery = await getGallery()
      setCities(weather);
      setNews(news)
      setGallery(gallery)
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddCity = async (name) => {
    try {
      const city = await getWeather(name);
      const updatedList = [...cities, city];
      setCities(updatedList);
      saveCities(updatedList);
    } catch {
      alert("City not found");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const selectedCity = cities.find((city) => city.id === selectedId);

  console.log(gallery)

  return (
    <>
      <Header />
      <main>
        <Hero onAddCity={handleAddCity} />
        <WeatherSection
          cities={cities}
          selectedCity={selectedCity}
          onSelect={setSelectedId}
          onCloseDetail={() => setSelectedId(null)}
          onRefresh={() => {}}
          onToggleFavorite={() => {}}
          onRemove={() => {}}
        />

        <NewsSection articles={news}/>
        <GallerySection images={gallery} />
        
      </main>
      <Footer /> 

    </>
  );
};

export default App;
