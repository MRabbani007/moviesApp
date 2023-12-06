import React from "react";
import Section from "./Section";

// Imported Media
import imgAvatar from "../assets/avatar.jpg";
import imgAvengers1 from "../assets/avengers.jpg";
import imgAvengers2 from "../assets/avengers-2.jpg";
import imgHarryPotter1 from "../assets/harry-potter.jpg";
import imgHarryPotter2 from "../assets/harry-potter-2.jpg";
import imgHulk from "../assets/hulk.jpg";
import imgIronMan1 from "../assets/iron-man.jpg";
import imgIronMan2 from "../assets/iron-man-2.jpg";
import image2 from "../assets/image2.jpg";

const Movies = [
  {
    id: 1,
    name: "Avatar",
    category: "cat1",
    year: "2023",
    rating: 8.7,
    image: imgAvatar,
  },
  {
    id: 2,
    name: "Avengers 1",
    category: "cat1",
    year: "2023",
    rating: 6.5,
    image: imgAvengers1,
  },
  {
    id: 3,
    name: "Avengers 2",
    category: "cat1",
    year: "2023",
    rating: 5.9,
    image: imgAvengers2,
  },
  {
    id: 4,
    name: "Harry Potter",
    category: "cat1",
    year: "2023",
    rating: 7.1,
    image: imgHarryPotter1,
  },
  {
    id: 5,
    name: "Harry Potter 2",
    category: "cat1",
    year: "2023",
    rating: 8.0,
    image: imgHarryPotter2,
  },
  {
    id: 6,
    name: "Hulk",
    category: "cat1",
    year: "2023",
    rating: 5.2,
    image: imgHulk,
  },
  {
    id: 6,
    name: "Iron Man",
    category: "cat1",
    year: "2023",
    rating: 6.0,
    image: imgIronMan1,
  },
  {
    id: 6,
    name: "Iron Man 2",
    category: "cat1",
    year: "2023",
    rating: 5.8,
    image: imgIronMan2,
  },
];

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
  "Watch Free0",
  "Coming Soon",
];

const Middle = () => {
  return (
    <div className="w-full min-h-screen bg-slate-900">
      {sectionTitles.map((title) => {
        return <Section title={title} Movies={Movies} />;
      })}
      {/* {Movies.map((movie) => {
        return <Movie movie={movie} />;
      })} */}
    </div>
  );
};

export default Middle;
