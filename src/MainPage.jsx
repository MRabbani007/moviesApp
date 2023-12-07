import React from "react";
import Navbar from "./components/Navbar";
import CarouselBanner from "./components/CarouselBanner";
import Middle from "./components/Middle";
import Footer from "./components/Footer";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <div className="sm:px-[5%] px-1 bg-slate-900">
        <CarouselBanner />
        {/* <Offcanvas /> */}
        <Middle />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
