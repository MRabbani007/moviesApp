import React from "react";
// import image2 from "./assets/image2.jpg";

const MoviePortrait = ({ movie }) => {
  let { id, name, category, rating, image } = movie;
  return (
    <div className="mx-2" key={id}>
      <div className="imgDiv rounded-lg overflow-hidden">
        <img
          src={image}
          alt=""
          className="object-cover w-[240px] h-[300px] rounded-lg hover:scale-110 duration-500"
        />
      </div>
      <div className="infoDiv flex flex-nowrap whitespace-nowrap justify-between mt-2">
        <div className="left w-[80%] ">
          <div
            className="font-semibold text-gray-400 text-ellipsis overflow-hidden mr-2 cursor-pointer"
            title={name}
          >
            {name}
          </div>
          <div className="font-normal text-red-600">{category}</div>
        </div>
        <div className="w-[18%] h-8 p-0 text-slate-900 bg-slate-50 rounded-xl flex justify-center items-center">
          {rating}
        </div>
      </div>
    </div>
  );
};

export default MoviePortrait;
