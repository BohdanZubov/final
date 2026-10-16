import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const GallerySlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  const showPrev = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const showNext = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  const current = images[index];

  return (
    <div className="w-full mx-auto max-w-160">
      <div className="relative h-55 overflow-hidden rounded-[10px] md:h-80">
        <img src={current.image} alt={current.alt} />
        <button
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-xl hover:bg-brand"
          onClick={showPrev}
        >
          <FiChevronLeft />
        </button>
        <button
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-xl hover:bg-brand"
          onClick={showNext}
        >
          <FiChevronRight />
        </button>
        <div className="flex justify-center gap-2 absolute bottom-3.75 right-0 left-0">
          {images.map((image, i) => (
            <button
              key={image.id}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full ${i === index ? "bg-brand" : "bg-box"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySlider;
