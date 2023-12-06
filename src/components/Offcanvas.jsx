import React from "react";

const Offcanvas = () => {
  const categories = [
    "Action",
    "Thriller",
    "Drama",
    "Commedy",
    "Crime & Investigation",
    "Horror",
    "Sci-Fi",
    "Cartoon",
  ];

  return (
    <div className="w-[20%] min-h-screen bg-slate-900 text-slate-50 p-4 pt-[70px]">
      <div className="heading text-xl border-b-2 mb-2 text-center p-2 font-medium">
        <h2>Category</h2>
      </div>
      <ul>
        {categories.map((cat) => {
          return (
            <li className="px-2 py-4 bg-slate-950 my-1 border-[1px] border-slate-950 hover:border-slate-400 duration-500">
              {cat}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Offcanvas;
