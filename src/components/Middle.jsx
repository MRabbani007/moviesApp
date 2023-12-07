import React from "react";
import Section from "./Section";
import MoviesList from "./MoviesList";

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
  "Best Thrillers",
  "Best Comedy",
  "Watch Free",
  "Coming Soon",
];

const Middle = () => {
  return (
    <div className="w-full min-h-screen bg-slate-900">
      {sectionTitles.map((title, index) => {
        return <Section title={title} Movies={MoviesList} key={index} />;
      })}
      {/* {Movies.map((movie) => {
        return <Movie movie={movie} />;
      })} */}
    </div>
  );
};

export default Middle;
