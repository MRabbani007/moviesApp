import React from "react";

// Import Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Imported Components
import MoviePortrait from "./MoviePortrait";

// Imported icons
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

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
        <span className="cursor-pointer w-full px-3 flex md:justify-start items-center justify-between">
          {title}
          <SlArrowRight className="text-slate-50 icon font-[900] mx-2" />
        </span>
      </div>
      <Carousel
        responsive={responsive}
        infinite={true}
        centerMode={true}
        itemClass="flex justify-center items-center p-0 gap-0"
        containerClass="w-full"
      >
        {Movies.map((movie, index) => {
          return <MoviePortrait movie={movie} key={index} />;
        })}
      </Carousel>
    </div>
  );
};

export default Section;
