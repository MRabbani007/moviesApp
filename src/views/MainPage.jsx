import React from "react";
import Navbar from "../components/Navbar";
import CarouselBanner from "../components/CarouselBanner";
import Middle from "../components/Middle";
import Footer from "../components/Footer";
import SearchPage from "./SearchPage";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <div className="lg:px-[5%] px-2 pb-5 bg-slate-900">
        <CarouselBanner />
        <Middle />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
