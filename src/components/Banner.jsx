import React from "react";
import BannerImg from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="w-[85%] mx-auto">
      <img src={BannerImg} alt="" className="w-full h-full object-fill" />
    </div>
  );
};

export default Banner;
