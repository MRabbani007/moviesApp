import React from "react";

const DropdownMenu = ({ items }) => {
  return (
    <ul className="dropdown-menu-content bg-slate-700">
      {items.map((item, index) => {
        return (
          <li
            className="hover:text-slate-700 hover:bg-slate-300 duration-300 cursor-pointer p-2"
            key={index}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default DropdownMenu;
