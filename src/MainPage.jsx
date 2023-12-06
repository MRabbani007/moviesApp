import React from "react";
import Navbar from "./components/Navbar";
import CarouselBanner from "./components/CarouselBanner";
import Middle from "./components/Middle";
import Footer from "./components/Footer";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <div className="px-[5%] bg-slate-900">
        <CarouselBanner />
        {/* <Offcanvas /> */}
        <Middle />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
