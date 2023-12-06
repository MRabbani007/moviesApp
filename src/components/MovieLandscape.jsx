import React from "react";
// import image2 from "./assets/image2.jpg";

const MovieLandscape = ({ movie }) => {
  let { id, name, category, rating, image } = movie;
  return (
    <div
      className="w-[350px] min-w-[350px] h-[250px] bg-slate-200 mx-4 my-4 gap-0 rounded-lg relative"
      key={id}
    >
      <div className="imgDiv absolute top-0 bottom-0 left-0 right-0">
        <img
          src={image}
          alt=""
          className="w-full h-[100%] object-cover rounded-lg"
        />
      </div>
      <div className="infoDiv absolute bottom-0 left-0 right-0 flex justify-between p-2 bg-slate-700 opacity-75 rounded-b-lg">
        <div className="left text-gray-50">
          <div className="title">{name}</div>
          <div className="category">{category}</div>
        </div>
        <div className="rating w-[40px] h-8 p-0 bg-slate-50 rounded-xl flex justify-center items-center">
          {rating}
        </div>
      </div>
    </div>
  );
};

export default MovieLandscape;
