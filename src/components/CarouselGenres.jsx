import React from "react";
// Import Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// Imported Components
import MyCarousel from "./MyCarousel";
// Imported Icons
import { RiEmotionSadLine, RiEmotionLaughLine } from "react-icons/ri";
import { GiDistraction } from "react-icons/gi";
import { TbMapRoute } from "react-icons/tb";
import { PiDetective } from "react-icons/pi";
import { GiHammerBreak } from "react-icons/gi";
import { IoEarthOutline } from "react-icons/io5";
import { RiHeartsLine } from "react-icons/ri";
import { TbUfo } from "react-icons/tb";
import { GiBurningSkull } from "react-icons/gi";
import { FaPersonMilitaryRifle } from "react-icons/fa6";
import { IoBasketballOutline } from "react-icons/io5";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { GiHandcuffs } from "react-icons/gi";
import { TbCoffee } from "react-icons/tb";

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
    <div className="my-2 w-full">
      <MyCarousel>
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
          <GiHammerBreak className="block mx-auto my-1 text-4xl text-center" />
          <span>Thriller</span>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 text-slate-50 text-center mx-2">
          <IoEarthOutline className="block mx-auto my-1 text-4xl text-center" />
          Foreign
        </div>
        <div className="bg-slate-800 rounded-lg p-4 text-slate-50 text-center mx-2">
          <RiHeartsLine className="block mx-auto my-1 text-4xl text-center" />
          Romantic
        </div>
        <div className="bg-slate-800 rounded-lg p-4 text-slate-50 text-center mx-2">
          <TbUfo className="block mx-auto my-1 text-4xl text-center" />
          Fantastic
        </div>
        <div className="bg-slate-800 rounded-lg p-4 text-slate-50 text-center mx-2">
          <GiBurningSkull className="block mx-auto my-1 text-4xl text-center" />
          Horror
        </div>
        <div className="bg-slate-800 rounded-lg p-4 text-slate-50 text-center mx-2">
          <FaPersonMilitaryRifle className="block mx-auto my-1 text-4xl text-center" />
          Military
        </div>
        <div className="bg-slate-800 rounded-lg p-4 text-slate-50 text-center mx-2">
          <IoBasketballOutline className="block mx-auto my-1 text-4xl text-center" />
          Sport
        </div>
        <div className="bg-slate-800 rounded-lg p-4 text-slate-50 text-center mx-2">
          <IoMusicalNotesOutline className="block mx-auto my-1 text-4xl text-center" />
          Music
        </div>
        <div className="bg-slate-800 rounded-lg p-4 text-slate-50 text-center mx-2">
          <GiHandcuffs className="block mx-auto my-1 text-4xl text-center" />
          Crime
        </div>
        <div className="bg-slate-800 rounded-lg p-4 text-slate-50 text-center mx-2">
          <TbCoffee className="block mx-auto my-1 text-4xl text-center" />
          Arthouse
        </div>
      </MyCarousel>
    </div>
  );
};

export default CarouselGenres;
