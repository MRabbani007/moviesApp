import React from "react";
// Imported Media
// import image2 from "./assets/image2.jpg";
// Imported Icons
import { BsMagic } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { SlActionRedo } from "react-icons/sl";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";

const MoviePortrait = ({ movie }) => {
  let { id, name, category, rating, image, year, time } = movie;
  return (
    <div className="mx-2 w-[240px]" key={id}>
      <div className="imgDiv h-[300px] rounded-lg overflow-hidden relative">
        <img
          src={image}
          alt=""
          className="object-fill w-[240px] h-[300px] rounded-lg"
        />
        <div className="card-info absolute top-0 left-0 bottom-0 right-0 flex flex-col items-end gap-4 pt-4 pb-2 opacity-0 text-slate-50">
          <FaRegBookmark
            className="icon-lg cursor-pointer"
            title="Watch Later"
          />
          <SlActionRedo
            className="icon-lg cursor-pointer"
            title="Share to Friends"
          />
          <BsMagic className="icon-lg cursor-pointer" title="Find Similar" />
          <FaRegStar
            className="icon-lg cursor-pointer"
            title="Already Watched? Rate"
          />
          <FaRegEyeSlash
            className="icon-lg cursor-pointer"
            title="Don't Show This"
          />
        </div>
        <div className="card-info absolute bottom-0 opacity-0 p-2 w-[80%]">
          <p className="text-3xl font-bold" title="IVI Rating">
            {rating}
          </p>
          <span title={year}>{year}</span>
          <span>, </span>
          <span title={Array.isArray(category) ? category[0] : category}>
            {Array.isArray(category) ? category[0] : category}
          </span>
          {time !== "" && <p>{time + " minutes"}</p>}
        </div>
      </div>
      <div className="infoDiv flex flex-nowrap whitespace-nowrap justify-between mt-2">
        <div className="left w-full ">
          <div
            className="font-semibold text-gray-400 text-ellipsis overflow-hidden mr-2 cursor-pointer"
            title={name}
          >
            {name}
          </div>
          <div className="font-normal text-red-600 text-ellipsis overflow-hidden ">
            {Array.isArray(category)
              ? category[0]
              : // .map((cat) => {return cat + ", ";})
                category}
          </div>
        </div>
        {/* <div className="w-[18%] h-8 p-0 text-slate-900 bg-slate-50 rounded-xl flex justify-center items-center">
          {rating}
        </div> */}
      </div>
    </div>
  );
};

export default MoviePortrait;
