import React, { useEffect, useState } from "react";
// Imported Components
import Navbar from "../components/Navbar";
import CarouselBanner from "../components/CarouselBanner";
import Footer from "../components/Footer";
import SectionAPI from "../components/SectionAPI";
// Imported Data
import { MoviesList } from "../data/MoviesData";
import { fetchBookmark } from "../data/bookmarkFunctions";
import { loadUser } from "../data/utils";

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
  const [userName, setUserName] = useState("");
  useEffect(() => {
    let data = loadUser();
    if (!!data) {
      setUserName(data);
    }
  }, []);

  const handleBookmark = async (movie) => {
    await fetchBookmark({
      type: "ADD_BOOKMARK",
      userName: userName,
      movie: movie,
    });
  };

  return (
    <>
      <Navbar />
      <div className="lg:px-[5%] px-2 pb-5 bg-slate-900">
        <CarouselBanner />
        <div className="w-full min-h-screen bg-slate-900">
          {sectionTitles.map((title, index) => {
            return (
              <SectionAPI
                page={index + 1}
                title={title}
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
              genreurl={[cat]}
              key={index}
              handleBookmark={handleBookmark}
            />
          );
        })}
        {/* <div className="w-full min-h-screen bg-slate-900">
        {sectionTitles.map((title, index) => {
          return <Section title={title} Movies={MoviesList} key={index} />;
        })}
      </div> */}
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
