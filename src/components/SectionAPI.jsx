import React, { useEffect, useState } from "react";
// Imported Components
import MoviePortrait from "./MoviePortrait";

// Imported icons
import { SlArrowRight } from "react-icons/sl";
import MyCarousel from "./MyCarousel";

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

const MapGenreIDs = (genre) => {
  let foundGenre = genreMap.find((element) => genre === element.name);
  if (foundGenre !== null && foundGenre !== undefined) {
    return foundGenre.id;
  }
  return null;
};

// Custome Hook for generating genre URL
const useGenre = (value) => {
  if (value.length < 1) return "";
  const GenreIds = value.map((g) => g.id);
  return GenreIds.reduce((acc, curr) => acc + "," + curr);
};

// **********
// Component that loads page of 20 movies and displays in carousel
// **********
const SectionAPI = ({ page, title, genreurl = "" }) => {
  const [moviesRecent, setMoviesRecent] = useState([]);
  // Custom Hook to generate URL for fetching Genres
  const [genreURL, setGenreURL] = useState(genreurl);
  // Access key for movies API
  const Access_key = "feadd565ad23c93f098a091d56bf86f0";
  // variable to store URL for fetching movies
  // Passing Access_Key, Language, Sort...
  const moviesAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${Access_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreURL}
  `;
  // URL for loading posters
  const img_300 = "https://image.tmdb.org/t/p/w300";

  // Function to fetch data from API
  const fetchMovies = async () => {
    try {
      const data = await fetch(moviesAPI);
      // fetching data from API in JSON Format
      const dataJ = await data.json();
      //storing that data in the state
      setMoviesRecent(dataJ.results);
    } catch (error) {
      alert("Error Fetching Data", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // Array to store movie objects to pass to Section component
  const myMovieList = [];

  if (moviesRecent) {
    // push fetched data to myMovieList
    moviesRecent.map((oneMovie) => {
      // check if fetched movies has year property
      let movieYear = "";
      if (oneMovie.hasOwnProperty("release_date")) {
        movieYear = oneMovie.release_date.substring(0, 4);
      }
      // check if fetched movies has title property
      let movieName = "";
      if (oneMovie.hasOwnProperty("title")) {
        movieName = oneMovie.title;
      } else if (oneMovie.hasOwnProperty("original_title")) {
        movieName = oneMovie.original_title;
      }

      myMovieList.push({
        id: oneMovie.id,
        name: movieName,
        category: MapGenres(oneMovie.genre_ids),
        year: movieYear,
        rating: oneMovie.vote_average.toFixed(1),
        time: "",
        image: img_300 + oneMovie.poster_path,
      });
    });
  }

  return (
    <div className="w-full">
      <div className="heading text-slate-50 md:text-2xl text-lg py-2 font-bold">
        <span className="cursor-pointer w-full px-3 flex md:justify-start items-center justify-between">
          {title}
          <SlArrowRight className="text-slate-50 icon font-[900] mx-2" />
        </span>
      </div>
      <MyCarousel itemClass="w-fit">
        {myMovieList.map((movie, index) => {
          return <MoviePortrait movie={movie} key={index} />;
        })}
      </MyCarousel>
    </div>
  );
};

export default SectionAPI;
