import React from "react";
import Container from "../ui/Container";
import { getHeroDate } from "../../utils/dateTime";
import HeroSearchBar from "./HeroSearchBar";

const Hero = ({ onAddCity }) => {
  const { day, weekday, monthYear } = getHeroDate();

  return (
    <section
      className="pt-12.5 pb-25 sm:py-10 site-md:py-25 relative w-full site-md:bg-cover bg-[center_67%] bg-no-repeat h-86.25 site-md:h-auto"
      style={{ backgroundImage: "url('/assets/hero.webp')" }}
    >
      <div className="absolute inset-0 bg-black/48" />
      <Container className="relative flex flex-col z-20 items-center ">
        <h2 className="site-md:text-[40px] text-[14px] sm:text-[20px] font-semibold text-white text-center ">
          Weather dashboard
        </h2>
        <div className="grid w-full site-xl:max-w-[800px] site-md:max-w-[412px] sm:max-w-[610px] max-w-[161px] grid-cols-[2px_1fr] grid-rows-[auto_auto] gap-x-6.25 gap-y-5 text-white text-[10px] sm:text-[14px] mt-[35px] mb-[48px] site-md:grid-cols-[1fr_2px_1fr] site-md:grid-rows-1 site-md:items-start site-md:gap-13 site-md:mt-[40px] site-md:mb-[64px] site-xl:mt-[80px] site-xl:mb-[80px] site-xl:text-[24px]">
          <div className="col-start-1 row-start-1 row-span-2 h-full w-[2px] bg-white site-md:col-start-2 site-md:row-start-1 site-md:row-span-1 site-md:h-[110px] site-md:w-[3px] site-xl:h-[144px]" />

          <p className="col-start-2 row-start-1 text-left site-md:col-start-1 site-md:row-start-1 site-md:text-right">
            Create your personal list of favorite cities and always be aware of
            the weather.
          </p>

          <p className="col-start-2 row-start-2 site-md:col-start-3 site-md:row-start-1">
            {monthYear}
            <br /> {weekday}, {day}
          </p>
        </div>

        <HeroSearchBar onAddCity={onAddCity} />
      </Container>
    </section>
  );
};

export default Hero;
