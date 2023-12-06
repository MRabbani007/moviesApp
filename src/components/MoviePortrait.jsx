import React from "react";
// import image2 from "./assets/image2.jpg";

const MoviePortrait = ({ movie }) => {
  let { id, name, category, rating, image } = movie;
  return (
    <div className="w-[240px] min-w-[200px] h-[400px] mx-2 my-0" key={id}>
      <div className="imgDiv rounded-lg overflow-hidden">
        <img
          src={image}
          alt=""
          className="object-fill w-[240px] h-[300px] rounded-lg hover:scale-110 duration-500"
        />
      </div>
      <div className="infoDiv flex justify-between p-2 mt-2">
        <div className="left text-gray-400">
          <div className="title font-bold">{name}</div>
          <div className="category font-light">{category}</div>
        </div>
        <div className="rating w-[40px] h-8 p-0 bg-slate-50 rounded-xl flex justify-center items-center">
          {rating}
        </div>
      </div>
    </div>
  );
};

export default MoviePortrait;
