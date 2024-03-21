import React, { useContext } from "react";
import { IoHomeOutline, IoSearchSharp } from "react-icons/io5";
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

const BottomMenu = () => {
  const { viewTab, setViewTab } = useContext(GlobalContext);

  return (
    <>
      {/* Menu for Small Screens */}
      <div className="bottom-menu sm:hidden bg-zinc-950 text-zinc-300 px-3">
        <p className="text-slate-300 cursor-pointer">
          <Link to="/moviesApp/myivi">
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
          <Link to="/moviesApp/search">
            <IoSearchSharp className="text-3xl mx-2" />
            Search
          </Link>
        </p>
        <p className="text-slate-300 cursor-pointer">
          <Link to="/moviesApp/signin">
            <FaRegUser className="text-3xl mx-2" />
            Signin
          </Link>
        </p>
        <p className="text-slate-300 cursor-pointer">
          <BsThreeDots className="text-3xl  mx-2" />
          More
        </p>
      </div>
    </>
  );
};

export default BottomMenu;
