import React from "react";
// Imported Components
import Section from "./Section";
import MoviesList from "./MoviesList";
import SectionAPI from "./SectionAPI";

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

const Middle = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-slate-900">
        {sectionTitles.map((title, index) => {
          return <SectionAPI page={index + 1} title={title} key={index} />;
        })}
      </div>
      {sectionCategories.map((cat, index) => {
        return (
          <SectionAPI
            page={index + 1}
            title={"Best " + cat + " Movies"}
            genreurl={[cat]}
            key={index}
          />
        );
      })}
      {/* <div className="w-full min-h-screen bg-slate-900">
        {sectionTitles.map((title, index) => {
          return <Section title={title} Movies={MoviesList} key={index} />;
        })}
      </div> */}
    </>
  );
};

export default Middle;
