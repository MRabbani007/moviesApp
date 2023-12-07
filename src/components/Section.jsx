import React from "react";

// Import Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Imported Components
import MoviePortrait from "./MoviePortrait";

// Imported icons
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

// Imported Media
import image2 from "../assets/image2.jpg";

function handleScroll() {}

const Section = ({ title, Movies }) => {
  // Responsive object for Carousel
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="w-full">
      <div className="heading text-slate-50 md:text-2xl text-lg py-2 font-bold">
        <span className="cursor-pointer w-full px-3 flex justify-between">
          {title}
          <SlArrowRight className="text-slate-50 text-xl font-bold mx-2" />
        </span>
      </div>
      <Carousel
        responsive={responsive}
        infinite={true}
        centerMode={true}
        itemClass="flex justify-center items-center p-0 gap-0"
        containerClass="w-full"
      >
        {Movies.map((movie) => {
          return <MoviePortrait movie={movie} />;
        })}
      </Carousel>
    </div>
  );
};

export default Section;
