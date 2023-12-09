import React, { useRef } from "react";
// imported icons
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
// Imported Media
import Banner1 from "../assets/movie1.png";

const MyCarousel = ({ children, itemClass }) => {
  // Reference to carousel container for scrolling
  const carouselCont = useRef(null);
  // Reference to carousel item
  const carouselCard = useRef(null);

  const scroll = (scrollDirection) => {
    carouselCont.current.scrollLeft +=
      carouselCard.current.offsetWidth * scrollDirection;
  };

  return (
    // Main Container
    <div className="w-full relative flex justify-center text-slate-200">
      {/* Content */}
      <div
        className="carouselContainer w-[90%] h-auto flex justify-start overflow-x-scroll scroll-smooth"
        ref={carouselCont}
      >
        {children &&
          children.map((card, index) => {
            return (
              <div
                className={
                  itemClass + " flex justify-center items-center shrink-0"
                }
                ref={carouselCard}
                key={index}
              >
                {card}
              </div>
            );
          })}
      </div>
      {/* Left button */}
      <div className="absolute top-[50%] bottom-[50%] left-0">
        <MdOutlineKeyboardArrowLeft
          className="icon-lg cursor-pointer"
          onClick={() => scroll(-1)}
        />
      </div>
      {/* Right Button */}
      <div className="absolute top-[50%] bottom-[50%] right-0">
        <MdOutlineKeyboardArrowRight
          className="icon-lg cursor-pointer"
          onClick={() => scroll(1)}
        />
      </div>
    </div>
  );
};

export default MyCarousel;
