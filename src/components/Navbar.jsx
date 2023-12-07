import React from "react";
// Import Nav
// import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { Link } from "react-router-dom";

// Imported Components
import DropdownMovies from "./DropdownMovies";

// Imported Icons
import { FaSearch, FaRegUser, FaRegBell } from "react-icons/fa";
import { IoHomeOutline, IoSearchSharp } from "react-icons/io5";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

// Imported Media
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="w-screen h-[60px] bg-slate-950 text-gray-50 flex justify-between items-center fixed top-0 z-50 sm:px-[5%] px-1">
        <div className="flex items-center h-full">
          <img src={logo} alt="" className="w-[60px] mx-5" />
          <ul className="navLinks hidden md:flex h-full font-semibold justify-between items-center text-gray-400">
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

        <div className="hidden md:flex items-center">
          <button className="p-1 bg-red-500 rounded-lg">
            Watch 30 Days Free
          </button>
          <button className="mx-2">
            <FaSearch className="icon" />
            Search
          </button>
          <button className="mx-2">
            <FaRegBell className="icon bell" />
          </button>
          <button className="mx-2 p-1 bg-slate-600 rounded-md flex items-center">
            <FaRegUser className="icon text-white rounded-md" />
            <span className="text-white p-1">SignIn</span>
          </button>
        </div>

        <button className="block md:hidden p-1 mx-3 bg-red-500 rounded-lg w-fit">
          Watch 30 Days Free
        </button>

        <div className="w-full h-[70px] p-3 bg-slate-950 md:hidden flex justify-between items-center fixed bottom-0 left-0 right-0">
          <p className="text-slate-300 cursor-pointer">
            <IoHomeOutline className="text-3xl  mx-2" />
            My ivi
          </p>
          <p className="text-slate-300 cursor-pointer">
            <MdOutlineOndemandVideo className="text-3xl mx-2" />
            Watch
          </p>
          <p className="text-slate-300 cursor-pointer">
            <IoSearchSharp className="text-3xl mx-2" />
            Search
          </p>
          <p className="text-slate-300 cursor-pointer">
            <FaRegUser className="text-3xl mx-2" />
            Signin
          </p>
          <p className="text-slate-300 cursor-pointer">
            <BsThreeDots className="text-3xl  mx-2" />
            More
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
