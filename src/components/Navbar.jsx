import React, { useState } from "react";
import { Link } from "react-router-dom";

// Imported Components
import DropdownMovies from "./DropdownMovies";
import DropdownSeries from "./DropdownSeries";
import DropdownCartoons from "./DropdownCartoons";
import DropdownSearch from "./DropdownSearch";

// Imported Icons
import { FaSearch, FaRegUser, FaRegBell } from "react-icons/fa";
import { IoHomeOutline, IoSearchSharp } from "react-icons/io5";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

// Imported Media
import logo from "../assets/logo.svg";
import DropdownSignin from "./DropdownSignin";
import DropdownSubscription from "./DropdownSubscription";

const Navbar = () => {
  const [menuSearchBtn, setMenuSearchBtn] = useState(false);
  const [menuSubBtn, setMenuSubBtn] = useState(false);
  const handleMenuSearchBtn = () => {
    menuSearchBtn ? setMenuSearchBtn(false) : setMenuSearchBtn(true);
  };
  const openSearch = () => {
    setMenuSearchBtn(true);
  };
  const closeSearch = () => {
    setMenuSearchBtn(false);
  };
  const openSubs = () => {
    setMenuSubBtn(true);
  };
  const closeSubs = () => {
    setMenuSubBtn(false);
  };

  return (
    <>
      <div className="w-screen h-[60px] bg-slate-950 flex justify-between items-center fixed top-0 z-50 xl:px-[5%] px-1 lg:text-md text-sm">
        {/* Left Block */}
        <div className="flex items-center h-full">
          <Link to="/moviesApp/">
            <img src={logo} alt="" className="w-[60px] lg:mx-5 mx-2" />
          </Link>
          <ul className="navLinks hidden lg:flex flex-nowrap xl:gap-2 2xl:gap-4 text-ellipsis overflow-hidden h-full font-semibold justify-between items-center  text-gray-400">
            <li className="mx-2 cursor-pointer py-4 hover:text-white duration-700">
              <Link to="/moviesApp/">My ivi</Link>
            </li>
            <li className="mx-2 cursor-pointer py-4 hover:text-white duration-700">
              <Link to="/moviesApp/">What's New</Link>
            </li>
            <li className="dropdown-button mx-2 cursor-pointer py-4 hover:text-white duration-700 dropdown">
              <Link to="/moviesApp/movies">Movies</Link>
              <DropdownMovies />
            </li>
            <li className="dropdown-button mx-2 cursor-pointer py-4 hover:text-white duration-700 dropdown ">
              <Link to="/moviesApp/">Series</Link>
              <DropdownSeries />
            </li>
            <li className="dropdown-button mx-2 cursor-pointer py-4 hover:text-white duration-700 dropdown ">
              <Link to="/moviesApp/">Cartoons</Link>
              <DropdownCartoons />
            </li>
            <li className="mx-2 cursor-pointer py-4 hover:text-white duration-700">
              <Link to="/moviesApp/">TV Channels</Link>
            </li>
          </ul>
        </div>

        {/* Right Block */}
        <div className="hidden md:flex items-center ">
          <button
            className="px-3 py-1 bg-red-500 rounded-lg text-slate-50 text-ellipsis overflow-hidden whitespace-nowrap"
            onClick={() => openSubs()}
          >
            Watch 30 Days Free
          </button>
          <DropdownSubscription menuSubBtn={menuSubBtn} closeSubs={closeSubs} />
          <button className="mx-2 text-slate-50">
            {/* onClick={() => openSearch()} */}
            <Link to="/moviesApp/search">
              <FaSearch className="icon" />
              Search
            </Link>
          </button>
          <DropdownSearch
            menuSearchBtn={menuSearchBtn}
            closeSearch={closeSearch}
          />
          <button className="mx-2">
            <FaRegBell className="icon bell text-slate-50" />
          </button>
          <button className="mx-2 p-1 bg-slate-600 rounded-md flex items-center dropdown-button">
            <FaRegUser className="icon text-white rounded-md" />
            <span className="text-white p-1">SignIn</span>
            <DropdownSignin />
          </button>
        </div>

        {/* Subscribe Button for Small Screens */}
        <button className="block md:hidden p-1 mx-3 bg-red-500 rounded-lg w-fit text-slate-50">
          Watch 30 Days Free
        </button>

        {/* Menu for Small Screens */}
        <div className="w-full h-[70px] p-3 bg-slate-950 lg:hidden flex justify-between items-center fixed bottom-0 left-0 right-0">
          <p className="text-slate-300 cursor-pointer">
            <Link to="/moviesApp/">
              <IoHomeOutline className="text-3xl  mx-2" />
              My ivi
            </Link>
          </p>
          <p className="text-slate-300 cursor-pointer">
            <Link to="/moviesApp/movies">
              <MdOutlineOndemandVideo className="text-3xl mx-2" />
              Watch
            </Link>
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
