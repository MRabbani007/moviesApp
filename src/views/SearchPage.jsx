import React, { useState } from "react";
// Imported Components
import MoviePortrait from "../components/MoviePortrait";
import Navbar from "../components/Navbar";
// Imported Icons
import { FaTimes } from "react-icons/fa";
// Imported Media
import noImage from "../assets/noposter.png";

const genreMap = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

// Function to hash map genre id to genre name
const MapGenres = (genres) => {
  let genreArray = [];
  let foundGenre;
  if (genres.length) {
    genres.map((item) => {
      foundGenre = genreMap.find((element) => item === element.id);
      if (foundGenre !== null && foundGenre !== undefined) {
        genreArray.push(foundGenre.name);
      }
    });
  }
  return genreArray;
};
// URL for loading posters
const img_300 = "https://image.tmdb.org/t/p/w300";

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const parseMovies = (movies) => {
    let result = [];
    movies.map((movie) => {
      // check if fetched movies has year property
      let movieYear = "";
      if (movie.hasOwnProperty("release_date")) {
        movieYear = movie.release_date.substring(0, 4);
      }
      // check if fetched movies has title property
      let movieName = "";
      if (movie.hasOwnProperty("title")) {
        movieName = movie.title;
      } else if (movie.hasOwnProperty("original_title")) {
        movieName = movie.original_title;
      }
      result.push({
        id: movie.id,
        name: movieName,
        category: MapGenres(movie.genre_ids),
        year: movieYear,
        rating: movie.vote_average.toFixed(1),
        time: "",
        image: movie.poster_path ? img_300 + movie.poster_path : noImage,
      });
    });
    return result;
  };

  const url = `https://api.themoviedb.org/3/search/movie?query="${query}"&include_adult=false&language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWFkZDU2NWFkMjNjOTNmMDk4YTA5MWQ1NmJmODZmMCIsInN1YiI6IjY1Nzg2OGE4ZjA0ZDAxMDExZTBmYWViNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i1CODTsIYh3_m6jRvhQmXECahHoRWYZ7fnGBIuCDQws",
    },
  };
  fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      setMovies(parseMovies(json.results));
    })
    .catch((err) => console.error("error:" + err));

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen pt-[80px] bg-slate-900">
        <div className="px-[10%] py-5">
          <h2 className="text-3xl font-bold text-left pb-5 text-slate-50">
            Search
          </h2>
          <input
            type="text"
            className="w-full text-lg px-4 py-2 text-slate-900"
            placeholder="Films, Genres, Actors"
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="w-full min-h-screen flex flex-wrap justify-center">
          {movies.map((movie, index) => {
            return <MoviePortrait movie={movie} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
