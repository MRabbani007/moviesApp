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

// const Movies = [
//   {
//     id: 1,
//     name: "movie1",
//     category: "cat1",
//     year: "2023",
//     rating: 6.5,
//     image: image2,
//   },
//   {
//     id: 2,
//     name: "movie2",
//     category: "cat1",
//     year: "2023",
//     rating: 6.5,
//     image: image2,
//   },
//   {
//     id: 3,
//     name: "movie3",
//     category: "cat1",
//     year: "2023",
//     rating: 6.5,
//     image: image2,
//   },
//   {
//     id: 4,
//     name: "movie4",
//     category: "cat1",
//     year: "2023",
//     rating: 6.5,
//     image: image2,
//   },
//   {
//     id: 5,
//     name: "movie5",
//     category: "cat1",
//     year: "2023",
//     rating: 6.5,
//     image: image2,
//   },
//   {
//     id: 6,
//     name: "movie6",
//     category: "cat1",
//     year: "2023",
//     rating: 6.5,
//     image: image2,
//   },
// ];

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
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="w-full">
      <div className="heading text-slate-50 text-2xl py-2 font-bold">
        <span className="cursor-pointer">
          {title}
          <SlArrowRight className="text-slate-50 text-xl font-bold inline mx-2" />
        </span>
      </div>
      <div className="container w-[95%] mx-auto relative">
        {/* <div className="leftButton absolute left-0 top-[50%] bottom-[50%]">
          <SlArrowLeft className="text-slate-50 text-2xl font-bold" />
          {/* <MdKeyboardArrowLeft /> */}
        {/* </div> */}
        {/* <div className="subContainer relative flex flex-nowrap overflow-x-hidden w-[90%] mx-auto"> */}
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
        {/* </div> */}
        {/* <div className="rightButton absolute right-0 top-[50%] bottom-[50%]">
          <SlArrowRight className="text-slate-50 text-2xl font-bold" /> */}
        {/* <MdOutlineKeyboardArrowRight /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Section;
