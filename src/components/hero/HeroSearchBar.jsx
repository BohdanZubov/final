import { Search } from "lucide-react";
import React, { useState } from "react";

const HeroSearchBar = ({ onAddCity }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.trim() === "") return;
    onAddCity(value.trim());
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-3.75 sm:h-6.75 site-md:h-10.5 overflow-hidden bg-box rounded-[10px] max-w-43.5 sm:max-w-156.25 w-full"
    >
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Search location..."
        className="min-w-0 flex-1 bg-transparent px-2.75 site-md:px-4 site-xl:px-7.25 text-[6px] sm:text-[10px] site-md:text-[14px] font-medium text-black placeholder:text-placeholder focus:outline-none"
      />
      <button type="submit" className="flex w-4.25 sm:w-7.25 site-md:w-11.25 h-full justify-center items-center shrink-0 border-l-2 site-md:border-l-2 bg-brand text-black border-black hover:bg-brand-hover cursor-pointer">
        <Search className="text-[20px] site-md:w-5 site-md:h-5 sm:w-4 sm:h-4 w-2.25 h-2.25" />
      </button>
    </form>
  );
};

export default HeroSearchBar;
