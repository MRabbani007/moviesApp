import React from "react";
// Imported Components
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import MoviesHome from "../components/MoviesHome";
import Section from "../components/Section";
import CarouselGenres from "../components/CarouselGenres";
import Footer from "../components/Footer";
import MoviesList from "../components/MoviesList";
// Imported Media
import BannerImg from "../assets/banner.jpg";

const MoviesPage = () => {
  return (
    <div className="bg-slate-900 pt-[80px]">
      <Navbar />
      <div className="md:px-[5%] px-2 pb-5 overflow-hidden">
        <Banner BannerImg={BannerImg} />
        <MoviesHome />
        <Section title="Film Premiers" Movies={MoviesList} />
        <CarouselGenres />
        <Section title="Best Films" Movies={MoviesList} />
        <Section title="IVI's Choice" Movies={MoviesList} />
        <Section title="Movies in 4K UHD" Movies={MoviesList} />
      </div>
      <Footer />
    </div>
  );
};

export default MoviesPage;