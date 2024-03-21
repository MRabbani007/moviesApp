import React, { useContext, useState } from "react";
// Imported Media
// import image2 from "./assets/image2.jpg";
// Imported Icons
import { BsMagic } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { SlActionRedo } from "react-icons/sl";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { GlobalContext } from "../context/GlobalState";

const MoviePortrait = ({ movie }) => {
  const { handleBookmarkAdd } = useContext(GlobalContext);
  const [bookmark, setBookmark] = useState(false);

  let { id, name, category, rating, image, year, time } = movie;

  return (
    <div className="w-[180px] h-fit " key={id}>
      <div className="imgDiv w-full h-[250px] mx-auto rounded-lg overflow-hidden relative">
        <img src={image} alt="" className="object-fill rounded-lg" />
        <div className="card-info absolute top-0 left-0 bottom-0 right-0 flex flex-col items-end gap-4 pt-4 pb-2 opacity-0 text-slate-50">
          <FaRegBookmark
            className="icon cursor-pointer"
            title="Watch Later"
            onClick={() => {
              handleBookmarkAdd(movie);
            }}
          />
          <SlActionRedo
            className="icon cursor-pointer"
            title="Share to Friends"
          />
          <BsMagic className="icon cursor-pointer" title="Find Similar" />
          <FaRegStar
            className="icon cursor-pointer"
            title="Already Watched? Rate"
          />
          <FaRegEyeSlash
            className="icon cursor-pointer"
            title="Don't Show This"
          />
        </div>
        <div className="card-info absolute bottom-0 opacity-0 p-2 w-[80%] text-lg text-white">
          <p className="text-2xl font-bold" title="IVI Rating">
            {rating}
          </p>
          <span title={year}>{year}</span>
          <span>, </span>
          <span title={Array.isArray(category) ? category[0] : category}>
            {Array.isArray(category) ? category[0] : category}
          </span>
          {!!time && <p>{time + " minutes"}</p>}
        </div>
      </div>
      <div className="infoDiv flex flex-nowrap whitespace-nowrap justify-between text-lg">
        <div className="w-full">
          <div
            className="font-normal text-gray-400 text-ellipsis overflow-hidden mr-2 cursor-pointer"
            title={name}
          >
            {name}
          </div>
          <div className="font-light text-red-600 text-ellipsis overflow-hidden ">
            {Array.isArray(category)
              ? category[0]
              : // .map((cat) => {return cat + ", ";})
                category}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePortrait;
