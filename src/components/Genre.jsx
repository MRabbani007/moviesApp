import React, { useEffect, useState } from "react";

const Genre = ({ genre, value, CategoryAdd, CategoryRemove }) => {
  // genre: list of un-selected genres
  // value: list of selected genres
  // CategoryAdd: function to add selected genre
  // CategoryRemove: function to remove un-selected genre

  // if no genres was fetched from API return empty
  if (!genre || genre.length === 0) return;
  return (
    <div className="flex flex-wrap">
      {value &&
        value.map((Val, index) => {
          const { id, name } = Val;
          return (
            <div
              className="m-2 bg-slate-600 rounded-3xl text-white px-4 py-2 text-center cursor-pointer"
              key={index}
              onClick={() => CategoryRemove(Val)}
            >
              {name}
            </div>
          );
        })}

      {
        //if genre exist
        genre &&
          genre.map((Gen, index) => {
            const { id, name } = Gen;
            return (
              <div
                className="m-2 bg-slate-900 rounded-3xl text-slate-300 px-4 py-2 text-center cursor-pointer"
                key={index}
                onClick={() => CategoryAdd(Gen)}
              >
                {name}
              </div>
            );
          })
      }
    </div>
  );
};

export default Genre;
