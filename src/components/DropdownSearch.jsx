import React from "react";
import { FaTimes } from "react-icons/fa";

const DropdownSearch = ({ menuSearchBtn, closeSearch }) => {
  return (
    <div
      className={`${
        menuSearchBtn ? "fixed" : "hidden"
      } top-0 left-0 w-full h-full p-10
       bg-slate-900 text-slate-200`}
    >
      <div className="flex justify-end">
        <button className="">
          <FaTimes
            className="inline text-xl hover:text-white"
            onClick={() => closeSearch()}
          />
        </button>
      </div>
      <div className="px-[10%]">
        <h2 className="text-3xl font-bold text-left pb-5">Search</h2>
        <input
          type="text"
          className="w-full text-lg px-4 py-2"
          placeholder="Films, Genres, Actors"
        />
        <div className="my-6">
          <h4 className="my-2 w-fit border-b-[1px] border-slate-400 hover:bg-slate-400 duration-500 cursor-pointer">
            Movie Premiers
          </h4>
          <h4 className="my-2 w-fit border-b-[1px] border-slate-400 hover:bg-slate-400 duration-500 cursor-pointer">
            Latest Releases
          </h4>
          <h4 className="my-2 w-fit border-b-[1px] border-slate-400 hover:bg-slate-400 duration-500 cursor-pointer">
            Highest Ratings
          </h4>
        </div>
      </div>
    </div>
  );
};

export default DropdownSearch;
