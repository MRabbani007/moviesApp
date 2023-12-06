import React from "react";

// imported media
import image1 from "../assets/dropdown-movies.jpg";

const DropdownMovies = () => {
  return (
    <>
      {/* <div className="dropdown-content fixed top-0 left-[5%] right-[5%] h-[60px] opacity-4
      0 bg-slate-800 z-40"></div> */}
      <div className="dropdown-content bg-slate-800 p-4 fixed top-[60px] left-[5%] right-[5%] overflow-hidden z-50 flex justify-between">
        {/* Dropdown Column */}
        <div className="py-4 px-[3rem] h-full">
          <h3 className="text-xl text-slate-200">Genre</h3>
          <div className="flex">
            <ul className="font-light block mr-10">
              <li>Arthouse</li>
              <li>Action</li>
              <li>Western</li>
              <li>Military</li>
              <li>Detectives</li>
              <li>Family</li>
              <li>Children</li>
              <li>Documentary</li>
              <li>Historical</li>
              <li>Drama</li>
              <li>Disaster</li>
              {/* Next Col */}
            </ul>
            <ul className="font-light block">
              <li>Comedy</li>
              <li>Criminal</li>
              <li>Melodrama</li>
              <li>Mystical</li>
              <li>Comics</li>
              <li>Adventures</li>
              <li>Sport</li>
              <li>Thrillers</li>
              <li>Horror</li>
              <li>Fantastic</li>
              <li>Fantasy</li>
            </ul>
          </div>
        </div>
        {/* Dropdown Column */}
        <div className="py-4 px-[3rem] h-full">
          <h3 className="text-xl text-slate-200">Countries</h3>
          <ul className="font-light">
            <li>Russian</li>
            <li>American</li>
            <li>British</li>
            <li>Arabic</li>
            <li>Turkish</li>
            <li>Korean</li>
          </ul>
        </div>
        {/* Dropdown Column */}
        <div className="py-4 px-[3rem] h-full">
          <h3 className="text-xl text-slate-200">Years</h3>
          <ul className="font-light">
            <li>Movies 2023</li>
            <li>Movies 2022</li>
            <li>Movies 2021</li>
            <li>Movies 2020</li>
            <li>Earlier</li>
          </ul>
        </div>
        {/* Dropdown Column */}
        <div className="py-4 px-[3rem] h-full">
          <ul className="border-l-2 px-5 font-light">
            <li>New Items</li>
            <li>Collections</li>
            <li>Trailers</li>
            <li>What to see</li>
            <li>New Subscriptions</li>
          </ul>
        </div>
        {/* Dropdown Column */}
        <div className="py-4 px-[3rem] h-full">
          <img
            src={image1}
            alt=""
            className="w-[200px] h-[200px] object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default DropdownMovies;
