import React from "react";
// Import Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// Imported Icons
import { RiEmotionSadLine, RiEmotionLaughLine } from "react-icons/ri";
import { GiDistraction } from "react-icons/gi";
import { TbMapRoute } from "react-icons/tb";
import { PiDetective } from "react-icons/pi";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselGenres = () => {
  return (
    <div className="my-2">
      <Carousel responsive={responsive} infinite={true}>
        <div className="bg-slate-800 rounded-lg p-4 text-slate-50 text-center mx-2">
          <RiEmotionSadLine className="block mx-auto my-1 text-4xl text-center" />
          <span>Drama</span>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 text-slate-50 text-center mx-2">
          <RiEmotionLaughLine className="block mx-auto my-1 text-4xl text-center" />
          Comedy
        </div>
        <div className="bg-slate-800 rounded-lg p-4 text-slate-50 text-center mx-2">
          <GiDistraction className="block mx-auto my-1 text-4xl text-center" />
          Action
        </div>
        <div className="bg-slate-800 rounded-lg p-4 text-slate-50 text-center mx-2">
          <TbMapRoute className="block mx-auto my-1 text-4xl text-center" />
          Adventure
        </div>
        <div className="bg-slate-800 rounded-lg p-4 text-slate-50 text-center mx-2">
          <PiDetective className="block mx-auto my-1 text-4xl text-center" />
          Detective
        </div>

        <div className="bg-slate-800 rounded-lg p-4 text-slate-50 text-center mx-2">
          <RiEmotionSadLine className="block mx-auto my-1 text-4xl text-center" />
          <span>Drama</span>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 text-slate-50 text-center mx-2">
          <RiEmotionLaughLine className="block mx-auto my-1 text-4xl text-center" />
          Comedy
        </div>
        <div className="bg-slate-800 rounded-lg p-4 text-slate-50 text-center mx-2">
          <GiDistraction className="block mx-auto my-1 text-4xl text-center" />
          Action
        </div>
        <div className="bg-slate-800 rounded-lg p-4 text-slate-50 text-center mx-2">
          <TbMapRoute className="block mx-auto my-1 text-4xl text-center" />
          Adventure
        </div>
        <div className="bg-slate-800 rounded-lg p-4 text-slate-50 text-center mx-2">
          <PiDetective className="block mx-auto my-1 text-4xl text-center" />
          Detective
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselGenres;
