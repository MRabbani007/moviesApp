import React from "react";

const Pagination = ({ handlePage, pages = 6, activePage = 1 }) => {
  let pagesArray = [];
  for (let i = 1; i <= pages; i++) {
    pagesArray.push(i);
  }
  return (
    <ul className="min-h-[40px] text-slate-900 flex flex-wrap bg-slate-400 w-fit mx-auto my-10">
      {/* <li className="py-2 px-2 border-[1px] border-slate-200">Previous</li> */}
      {pagesArray.map((page, index) => {
        if (page === activePage)
          return (
            <li
              className="py-2 px-3 border-[1px] border-red-600 text-red-600 cursor-pointer min-w-[40px] text-center"
              onClick={() => handlePage(page)}
              key={index}
            >
              {page}
            </li>
          );
        return (
          <li
            className="py-2 px-2 border-[1px] border-slate-200 cursor-pointer min-w-[40px] text-center"
            onClick={() => handlePage(page)}
            key={index}
          >
            {page}
          </li>
        );
      })}
      {/* <li className="py-2 px-2 border-[1px] border-slate-200 min-w-[40px] text-center cursor-pointer">
        ...
      </li> */}
      {/* <li className="py-2 px-3 border-[1px] border-slate-200">Next</li> */}
    </ul>
  );
};

export default Pagination;
