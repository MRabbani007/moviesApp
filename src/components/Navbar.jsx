import React from "react";
// Import Nav
// import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { Link } from "react-router-dom";

// Imported Components
import DropdownMovies from "./DropdownMovies";

// Imported Icons
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

// Imported Media
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="w-screen h-[60px] bg-slate-950 text-gray-50 flex justify-between items-center fixed top-0 z-50 px-[5%]">
      {/* <div className="dropdown relative"></div> */}
      <div className="flex items-center h-full">
        <img src={logo} alt="" className="w-[60px] mx-5" />
        <ul className="flex h-full font-semibold justify-between items-center text-gray-400">
          <li className="mx-2 cursor-pointer py-4 hover:text-white duration-700">
            <Link to="/">My ivi</Link>
          </li>
          <li className="mx-2 cursor-pointer py-4 hover:text-white duration-700">
            <Link to="/">What's New</Link>
          </li>
          <li className="dropdown-button mx-2 cursor-pointer py-4 hover:text-white duration-700 dropdown">
            <Link to="/movies">Movies</Link>
            <DropdownMovies />
          </li>
          <li className="dropdown-button mx-2 cursor-pointer py-4 hover:text-white duration-700 dropdown ">
            <Link to="/">Series</Link>
            <DropdownMovies />
          </li>
          <li className="dropdown-button mx-2 cursor-pointer py-4 hover:text-white duration-700 dropdown ">
            <Link to="/">Cartoons</Link>
            <DropdownMovies />
          </li>
          <li className="mx-2 cursor-pointer py-4 hover:text-white duration-700">
            <Link to="/">TV Channels</Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center px-5">
        <button className="p-1 bg-red-500 rounded-lg">
          Watch 30 Days Free
        </button>
        <button className="mx-2">
          <FaSearch className="inline mx-2" />
          Search
        </button>
        <button className="mx-2">
          <FaRegBell />
        </button>
        <button className="mx-2 p-1 bg-slate-600 rounded-md flex items-center">
          <FaRegUser className="inline mx-2 text-3xl p-1 bg-slate-500 text-white rounded-md" />
          <span className="text-white p-1">SignIn</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
