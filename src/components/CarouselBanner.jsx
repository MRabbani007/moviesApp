import React from "react";
// Import Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// Imported Icons
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
// Imported Media
import movie1 from "../assets/movie1.png";
import lightning from "../assets/lightning.svg";
import gift from "../assets/gift.svg";

const CarouselBanner = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="bg-slate-900 w-full pt-[60px]">
      <div className="my-5">
        {/* <div className="flex justify-center">
          <div className="button-left w-[5%] h-auto bg-slate-800 mr-5 rounded-lg flex justify-center items-center text-4xl font-bold text-slate-50">
            <SlArrowLeft className="cursor-pointer" />
          </div>
          <div className="w-[80%]">
            <img
              src={movie1}
              alt=""
              className="w-[100%] h-[100%] object-cover mx-auto"
            />
          </div>
          <div className="button-right w-[5%] h-auto bg-slate-800 ml-5 rounded-lg flex justify-center items-center text-4xl font-bold text-slate-50">
            <SlArrowRight className="cursor-pointer" />
          </div>
        </div> */}
        <Carousel
          responsive={responsive}
          centerMode={false}
          partialVisible={true}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={2000}
          transitionDuration={1500}
          itemClass=""
          containerClass=""
        >
          <div className="w-[85%] h-[100%] mx-auto rounded-xl">
            <img
              src={movie1}
              alt=""
              className="w-[100%] h-[100%] object-fill rounded-xl"
            />
          </div>
          <div className="w-[85%] h-[100%] mx-auto rounded-xl">
            <img
              src={movie1}
              alt=""
              className="w-[100%] h-[100%] object-fill rounded-xl"
            />
          </div>
          <div className="w-[85%] h-[100%] mx-auto rounded-xl">
            <img
              src={movie1}
              alt=""
              className="w-[100%] h-[100%] object-fill rounded-xl"
            />
          </div>
        </Carousel>
        <div className="w-[90%] flex flex-wrap md:justify-between justify-center mx-auto my-5 text-slate-300 text-center">
          <div className="md:w-[48%] w-[80%] min-w-[200px] bg-indigo-900 rounded-lg my-1 p-4 hover:bg-indigo-800 duration-500 flex justify-center items-center">
            <img src={lightning} alt="" className="mr-3 w-[30px]" />
            30 Days Subscription Free
          </div>
          <div className="md:w-[48%] w-[80%] min-w-[200px] bg-indigo-950 rounded-lg my-1 p-4 hover:bg-indigo-900 duration-500 flex justify-center items-center">
            <img src={gift} alt="" className="mr-3 w-[60px]" />
            Activate Certificate
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselBanner;
