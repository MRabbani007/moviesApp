import React from "react";
// Import Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// Imported Icons
import { SlArrowDown } from "react-icons/sl";
import { FaPlus, FaTimes } from "react-icons/fa";
// Imported Components
import MyCarousel from "./MyCarousel";
import DropdownMenu from "../features/navigation/DropdownMenu";
import Genre from "./Genre";

const listItems = [
  "2023",
  "2022",
  "2021",
  "2020",
  "Russian Films",
  "Soviet Movies",
  "American Movies",
  "Indian Films",
  "Comedy",
  "Horror",
  "Fantasy",
  "Drama",
  "Thriller",
  "Military",
  "Documentary",
];

// TODO: Remove
// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 12,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 10,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 5,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 5,
//   },
// };

const listGenres = ["Action", "Thriller", "Commedy", "Horror", "Fantasy"];
const listCountries = [
  "Russian",
  "American",
  "Arabic",
  "Turkish",
  "Korean",
  "Foreign",
];
const listYears = ["2023", "2022", "2021", "2020", "Earlier"];
const listRatings = ["8+", "6-8", "4-6"];

const MoviesHome = ({
  CategoryAdd,
  CategoryRemove,
  handleMovieYear,
  handleMovieGenre,
  handleMovieCountry,
  handleMovieRating,
  genre,
  value,
}) => {
  return (
    <div className="movies-home py-5">
      <h2 className="md:text-4xl text-2xl text-slate-300 font-extrabold my-4">
        Watch Movies Online
      </h2>
      {/* Categories */}
      {/* Filters Block */}
      <div className="bg-slate-800 rounded-lg p-4 ">
        {/* Genres */}
        <Genre
          CategoryAdd={CategoryAdd}
          CategoryRemove={CategoryRemove}
          genre={genre}
          value={value}
        />
        {/* Dropdowns */}
        <div className="flex flex-wrap justify-between text-slate-50 font-semibold">
          <div className="bg-slate-700 p-4 md:w-[18%] sm:w-[45%] w-full mx-2 my-2 flex justify-between cursor-pointer dropdown-small relative">
            <span>Genres</span>
            <SlArrowDown className="text-slate-50 text-xl font-extrabold inline mx-2 z-10" />
            <DropdownMenu
              items={listGenres}
              handledropdown={handleMovieGenre}
            />
          </div>
          <div className="bg-slate-700 p-4 md:w-[18%] sm:w-[45%] w-full mx-2 my-2 flex justify-between cursor-pointer">
            <span>SubGenres</span>
            <SlArrowDown className="text-slate-50 text-xl font-extrabold inline mx-2 z-10" />
          </div>
          <div className="bg-slate-700 p-4 md:w-[18%] sm:w-[45%] w-full mx-2 my-2 flex justify-between cursor-pointer dropdown-small relative">
            <span>Countries</span>
            <SlArrowDown className="text-slate-50 text-xl font-extrabold inline mx-2 z-10" />
            <DropdownMenu
              items={listCountries}
              handledropdown={handleMovieCountry}
            />
          </div>
          <div className="bg-slate-700 p-4 md:w-[18%] sm:w-[45%] w-full mx-2 my-2 flex justify-between cursor-pointer dropdown-small relative">
            <span>Years</span>
            <SlArrowDown className="text-slate-50 text-xl font-extrabold inline mx-2 z-10" />
            <DropdownMenu items={listYears} handledropdown={handleMovieYear} />
          </div>
          <div className="bg-slate-700 p-4 md:w-[18%] sm:w-[45%] w-full mx-2 my-2 flex justify-between cursor-pointer dropdown-small relative">
            <span>ivi Rating</span>
            <SlArrowDown className="text-slate-50 text-xl font-extrabold inline mx-2 z-10" />
            <DropdownMenu
              items={listRatings}
              handledropdown={handleMovieRating}
            />
          </div>
        </div>
        {/* Filters */}
        <ul className="flex flex-wrap text-slate-50 my-4 font-light text-sm">
          <li className="border-[1px] border-slate-50 rounded-3xl py-1 px-3 mx-3 my-2 whitespace-nowrap flex justify-center items-center cursor-pointer">
            <FaPlus className="text-slate-50 text-lg inline mr-2" />
            <span>Free</span>
          </li>
          <li className="border-[1px] border-slate-50 rounded-3xl py-1 px-3 mx-3 my-2 whitespace-nowrap flex justify-center items-center cursor-pointer">
            <FaPlus className="text-slate-50 text-lg inline mr-2" />
            <span>By Subscription</span>
          </li>
          <li className="border-[1px] border-slate-50 rounded-3xl py-1 px-3 mx-3 my-2 whitespace-nowrap flex justify-center items-center cursor-pointer">
            <FaPlus className="text-slate-50 text-lg inline mr-2" />
            <span>In the original language</span>
          </li>
          <li className="border-[1px] border-slate-50 rounded-3xl py-1 px-3 mx-3 my-2 whitespace-nowrap flex justify-center items-center cursor-pointer">
            <FaPlus className="text-slate-50 text-lg inline mr-2" />
            <span>With subtitles</span>
          </li>
          <li className="border-[1px] border-slate-50 rounded-3xl py-1 px-3 mx-3 my-2 whitespace-nowrap flex justify-center items-center cursor-pointer">
            <FaPlus className="text-slate-50 text-lg inline mr-2" />
            <span>Surround sound</span>
          </li>
        </ul>
        <div className="text-slate-500 font-semibold text-xl cursor-pointer">
          <FaTimes className="text-2xl inline mr-2" />
          <span className="">Reset Filters</span>
        </div>
      </div>
    </div>
  );
};

export default MoviesHome;
