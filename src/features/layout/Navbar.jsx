import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// Imported Hooks
import useAuth from "../../hooks/useAuth";
// Imported Context
import { UserContext } from "../../context/UserState";
// Imported Components
import DropdownMovies from "../navigation/DropdownMovies";
import DropdownSeries from "../navigation/DropdownSeries";
import DropdownCartoons from "../navigation/DropdownCartoons";
import DropdownSearch from "../navigation/DropdownSearch";
import DropdownSignin from "../navigation/DropdownSignin";
import DropdownSubscription from "../navigation/DropdownSubscription";

// Imported Icons
import { FaSearch, FaRegUser, FaRegBell } from "react-icons/fa";

// Imported Media
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const { auth } = useAuth();
  const { theme } = useContext(UserContext);

  const [menuSearchBtn, setMenuSearchBtn] = useState(false);
  const [menuSubBtn, setMenuSubBtn] = useState(false);

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
      <nav className="navbar flex justify-between gap-0 duration-500 z-50">
        <Link to="/">
          <img src={logo} alt="" className="w-[60px] mx-3" />
        </Link>

        <div className="flex items-center justify-between w-[80%] shrink-0 px-4 navbar-middle">
          {/* Left Block */}
          <div className="flex items-stretch w-fit h-full">
            <ul className="navLinks hidden lg:flex flex-nowrap xl:gap-3 2xl:gap-4 text-ellipsis overflow-hidden h-full font-semibold justify-between items-stretch">
              <li>
                <Link to="/myivi">My ivi</Link>
              </li>
              <li>
                <Link to="/">What's New</Link>
              </li>
              <li className="dropdown-button dropdown">
                <Link to="/movies">Movies</Link>
                <DropdownMovies />
              </li>
              <li className="dropdown-button dropdown ">
                <Link to="/">Series</Link>
                <DropdownSeries />
              </li>
              <li className="dropdown-button dropdown ">
                <Link to="/">Cartoons</Link>
                <DropdownCartoons />
              </li>
              <li className="">
                <Link to="/">TV Channels</Link>
              </li>
            </ul>
          </div>

          {/* Right Block */}
          <div className="hidden md:flex items-stretch gap-3 h-full">
            <button
              className="px-3 py-1 my-2 bg-red-500 rounded-lg text-ellipsis overflow-hidden whitespace-nowrap"
              onClick={() => openSubs()}
            >
              Watch 30 Days Free
            </button>
            <DropdownSubscription
              menuSubBtn={menuSubBtn}
              closeSubs={closeSubs}
            />
            <Link to="/search" className="flex items-center">
              <FaSearch className="icon mr-2" />
              Search
            </Link>
            <DropdownSearch
              menuSearchBtn={menuSearchBtn}
              closeSearch={closeSearch}
            />
            <div className="flex items-center">
              <FaRegBell className="icon bell" />
            </div>

            {/* Right User Button */}
            <ul className="dropdown-button flex items-stretch">
              <li className="my-2 flex items-center">
                <Link to="/login" className="flex items-center gap-1">
                  <FaRegUser className="icon" />
                  <span className="w-[80px] text-ellipsis overflow-hidden text-center">
                    {auth?.user !== "" && auth?.user !== undefined
                      ? `${auth?.user}`
                      : "SignIn"}
                  </span>
                </Link>
              </li>
              <DropdownSignin userName={auth?.user} />
            </ul>
          </div>
        </div>

        <div className="w-[84px]"></div>
        {/* Subscribe Button for Small Screens */}
        <button className="block md:hidden p-1 mx-3 bg-red-500 rounded-lg w-fit text-slate-50">
          Watch 30 Days Free
        </button>
      </nav>
    </>
  );
};

export default Navbar;
