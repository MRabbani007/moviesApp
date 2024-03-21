import React, { useContext, useEffect, useState } from "react";
// Imported Components
import CarouselBanner from "../components/CarouselBanner";
import SectionAPI from "../components/SectionAPI";
// Imported Data
import { MoviesList } from "../data/MoviesData";
import { fetchBookmark } from "../data/bookmarkFunctions";
import { loadUser } from "../data/utils";
import { GlobalContext } from "../context/GlobalState";
import useAuth from "../hooks/useAuth";

const categories = [
  "Action",
  "Arthouse",
  "Military",
  "Thriller",
  "Drama",
  "Family",
  "Commedy",
  "Crime & Investigation",
  "Horror",
  "Sci-Fi",
  "Cartoon",
  "Sport",
  "History",
];

const sectionTitles = [
  "Recently Added",
  "Trending on IVI",
  "Highest Ratings",
  "My List",
  "Continue Watching",
  "Award Winning",
  "Coming Soon",
  "Watch Free",
];

const sectionCategories = ["Thriller", "Comedy"];

const MainPage = () => {
  const { bookmarks } = useContext(GlobalContext);
  const { auth } = useAuth();

  useEffect(() => {}, [auth?.user]);

  const handleBookmark = async (movie) => {
    await fetchBookmark({
      type: "ADD_BOOKMARK",
      userName: userName,
      movie: movie,
    });
  };

  return (
    <>
      <div className="lg:px-[5%] px-2 py-5 pb-5 bg-slate-900">
        <CarouselBanner />
        <div className="w-full min-h-screen bg-slate-900">
          {sectionTitles.map((title, index) => {
            return (
              <SectionAPI
                page={index + 1}
                title={title}
                genre={""}
                key={index}
                handleBookmark={handleBookmark}
              />
            );
          })}
        </div>
        {sectionCategories.map((cat, index) => {
          return (
            <SectionAPI
              page={index + 1}
              title={"Best " + cat + " Movies"}
              genre={cat}
              key={index}
              handleBookmark={handleBookmark}
            />
          );
        })}
      </div>
    </>
  );
};

export default MainPage;
