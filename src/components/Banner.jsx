import React from "react";

const Banner = ({ BannerImg }) => {
  return (
    <div className="w-full h-full">
      {/* TODO: add subscribe button and rating */}
      <img
        src={BannerImg}
        alt=""
        className="w-full h-full object-fit mx-auto rounded-xl"
      />
    </div>
  );
};

export default Banner;
