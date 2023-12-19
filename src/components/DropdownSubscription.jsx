import React from "react";
import { Link } from "react-router-dom";
// Imported Media
import logo from "../assets/logo.svg";
import familyimg from "../assets/family.png";
import qualityimg from "../assets/maxquality.png";
import offlineimg from "../assets/viewoffline.png";
import noadsimg from "../assets/noads.png";
import newmoviesimg from "../assets/newmovies.png";
// Imported Icons
import { FaArrowLeft } from "react-icons/fa";

const DropdownSubscription = ({ menuSubBtn, closeSubs }) => {
  return (
    <div
      className={`${menuSubBtn ? "fixed" : "hidden"} top-0 left-0 right-0 h-full
       bg-slate-900 text-slate-200 overflow-scroll`}
    >
      <Link to="/moviesApp/" className="fixed top-5 left-5">
        <img src={logo} alt="" className="w-[60px] lg:mx-5 mx-2" />
      </Link>
      <div className="bg-red-500 text-slate-50 rounded-lg w-fit py-2 px-10 sticky top-[85%] mx-auto">
        Try 30 days free
      </div>
      {/* Home screen */}
      <section className="flex flex-col justify-center items-center h-screen mx-auto relative">
        <div
          className="absolute top-10 left-7 cursor-pointer hover:text-white"
          onClick={() => closeSubs()}
        >
          <FaArrowLeft className="inline" />
          <span> Back</span>
        </div>
        <h1 className="text-[50px] font-semibold m-5">Subscribe Eevee</h1>
        <p className="text-xl font-normal text-center">
          Connect and watch new films and TV series from all over the world in
          excellent quality and without advertising
        </p>
      </section>
      <section className="h-screen flex justify-center items-center">
        <div className="w-[40%]">
          <h3 className="text-2xl font-bold">
            One subscription for the whole family or friends
          </h3>
          <p>
            Create a personal space for everyone and connect up to five devices.
            And all this in one subscription.
          </p>
        </div>
        <img src={familyimg} alt="" className="w-[500px]" />
      </section>
      <section className="h-screen flex justify-center items-center">
        <img src={qualityimg} alt="" className="w-[500px]" />
        <div className="w-[40%]">
          <h3 className="text-2xl font-bold">Maximum quality</h3>
          <p>
            Constantly updated catalog of films, TV series and cartoons in 4K*.
            And also a system that allows you to watch without unpleasant
            glitches and stops.
          </p>
        </div>
      </section>
      <section className="h-screen flex justify-center items-center">
        <div className="w-[40%]">
          <h3 className="text-2xl font-bold">View Offline</h3>
          <p>
            Watch even where there is no Internet. Download your favorite movies
            and TV series directly to your phone or tablet.*
          </p>
        </div>
        <img src={offlineimg} alt="" className="w-[500px]" />
      </section>
      <section className="h-screen flex justify-center items-center">
        <div className="w-[40%]">
          <h3 className="text-2xl font-bold">No Advertising</h3>
          <p>
            Value every moment. Not a single commercial will interrupt your
            viewing experience. Advertising is only available on TV channels.
          </p>
        </div>
        <img src={noadsimg} alt="" className="w-[500px]" />
      </section>
      <section className="h-screen flex justify-center items-center">
        <div className="w-[40%]">
          <h3 className="text-2xl font-bold">
            Every day there is something to see
          </h3>
        </div>
        <img src={newmoviesimg} alt="" className="w-[500px]" />
      </section>
    </div>
  );
};

export default DropdownSubscription;
