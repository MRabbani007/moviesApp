import React from "react";

// imported media
import image1 from "../assets/dropdown-movies.jpg";

const moviesCat = [
  "Biography",
  "Action",
  "Military",
  "Detectives",
  "Family",
  "Documentary",
  "Historical",
  "Drama",
  "Disaster",
  "Comedy",
  "Criminal",
  "Melodrama",
  "Mystical",
  "Comics",
  "Adventures",
  "Romantic",
  "TV Show",
  "Sport",
  "Thrillers",
  "Horror",
  "Fantastic",
  "Fantasy",
];

const moviesCountry = [
  "Russian",
  "American",
  "British",
  "Arabic",
  "Turkish",
  "Korean",
];

const moviesYears = [
  "Series 2023",
  "Series 2022",
  "Series 2021",
  "Series 2020",
  "Earlier",
];

const moviesOptions = [
  "New Items",
  "IVI Rating",
  "TV Series in HD",
  "Free TV Series",
];

const DropdownMovies = () => {
  return (
    <>
      {/* <div className="dropdown-content fixed top-0 left-[5%] right-[5%] h-[60px] opacity-4
      0 bg-slate-800 z-40"></div> */}
      <div className="dropdown-content bg-slate-800 p-4 fixed top-[60px] left-[5%] right-[5%] overflow-hidden z-50 flex justify-between">
        {/* Dropdown Column */}
        <div className="py-4 px-[1rem] h-full shrink-0">
          <h3 className="text-xl text-slate-100">Genre</h3>
          <div className="flex">
            <ul className="list-items h-[40vh] flex flex-col flex-wrap gap-x-5 font-light mr-10">
              {moviesCat.map((cat, index) => {
                return (
                  <li className="font-light hover:text-red-600" key={index}>
                    {cat}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* Dropdown Column */}
        <div className="py-4 px-[1rem] h-full">
          <h3 className="text-xl text-slate-100">Countries</h3>
          <ul className="list-items font-light">
            {moviesCountry.map((country, index) => {
              return (
                <li className="font-light hover:text-red-600" key={index}>
                  {country}
                </li>
              );
            })}
          </ul>
        </div>
        {/* Dropdown Column */}
        <div className="py-4 px-[1rem] h-full">
          <h3 className="text-xl text-slate-100">Years</h3>
          <ul className="list-items font-light">
            {moviesYears.map((year, index) => {
              return (
                <li className="font-light hover:text-red-600" key={index}>
                  {year}
                </li>
              );
            })}
          </ul>
        </div>
        {/* Dropdown Column */}
        <div className="py-4 px-[1rem] h-full">
          {/* Watch options */}
          <ul className="list-items h-[50vh] border-l-[1px] font-light">
            {moviesOptions.map((option, index) => {
              return (
                <li
                  className="font-light px-5 hover:text-red-600 hover:border-l-2"
                  key={index}
                >
                  {option}
                </li>
              );
            })}
          </ul>
        </div>
        {/* Dropdown Column */}
        <div className="py-4 px-[1rem] h-full">
          <img
            src={image1}
            alt=""
            className="w-[300px] h-[300px] object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default DropdownMovies;
