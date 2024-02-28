import React, { useEffect, useState } from "react";
// Imported Components
import MoviePortrait from "../components/MoviePortrait";
import Navbar from "../components/Navbar";
// Imported Icons
import { FaTimes, FaSearch } from "react-icons/fa";
// Imported Media
import noImage from "../assets/noposter.png";
import Pagination from "../components/Pagination";
import Genre from "../components/Genre";
import { json } from "react-router-dom";

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
// Access key for movies API
const Access_key = "feadd565ad23c93f098a091d56bf86f0";
// URL for loading posters
const img_300 = "https://image.tmdb.org/t/p/w300";

// Custome Hook for generating genre URL
const useGenre = (value) => {
  if (value.length < 1) return "";
  const GenreIds = value.map((g) => g.id);
  const temp = GenreIds.reduce((acc, curr) => acc + "," + curr);
  return temp;
};

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [include, setInclude] = useState(false);
  const [language, setLanguage] = useState("en-US");
  // used to store the non-selected genre values
  const [genre, setGenre] = useState([]);
  // used to store the selected genre values
  const [value, setValue] = useState([]);
  // Custom Hook to generate URL for fetching Genres
  const [genreURL, setGenreURL] = useState(useGenre(""));

  const [myMoviesList, setMyMoviesList] = useState([]);

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

  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&with_genres=${genreURL}&include_adult=false&language=${language}&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWFkZDU2NWFkMjNjOTNmMDk4YTA5MWQ1NmJmODZmMCIsInN1YiI6IjY1Nzg2OGE4ZjA0ZDAxMDExZTBmYWViNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i1CODTsIYh3_m6jRvhQmXECahHoRWYZ7fnGBIuCDQws",
    },
  };

  const handlePage = async (displayPage) => {
    setPage(displayPage);
  };

  const fetchMovies = () => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setMovies(parseMovies(json.results));
      })
      .catch((err) => console.error("error:" + err));
  };

  useEffect(() => {
    fetchMovies();
  }, [query, page]);

  useEffect(() => {
    let moviesList = localStorage.getItem("moviesList");
    if (moviesList) {
      console.log(JSON.parse(moviesList));
    }
  });

  //Adding a particular genre to the selected array
  const CategoryAdd = (genres) => {
    //first - select everything that's inside of values using the spread operator
    //second - add those genres that are being sent from the non-selected arrays
    setValue([...value, genres]);
    //removing those genres from the non-selected array that have been added to the selected array.
    setGenre(genre.filter((g) => g.id !== genres.id));
    setGenreURL(useGenre([...value, genres]));
  };

  //removing a particular genre from the selected array
  const CategoryRemove = (genres) => {
    setValue(value.filter((g) => g.id !== genres.id));
    setGenre([...genre, genres]);
    setGenreURL(useGenre(value.filter((g) => g.id !== genres.id)));
  };

  const fetchGenre = async (type = "movie") => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=${Access_key}&language=en-US`
      );
      const { genres } = await data.json();
      setGenre(genres);
    } catch (error) {}
  };

  return (
    <>
      <Navbar />
      {/* Container */}
      <div className="w-full min-h-screen pt-[80px] pb-5 bg-slate-900">
        {/* Search Input */}
        <div className="px-[10%] py-5">
          <form
            action=""
            onSubmit={(event) => {
              event.preventDefault();
              fetchMovies();
            }}
          >
            <h2 className="text-3xl font-bold text-left pb-5 text-slate-50">
              Search
            </h2>
            <div className="flex flex-nowrap">
              <input
                type="text"
                className="w-full text-lg px-4 py-2 mr-4 text-slate-900"
                placeholder="Search Movies"
                onChange={(event) => setQuery(event.target.value)}
                value={query}
              />
              <button className="text-slate-50 flex justify-center items-center border-[1px] px-4">
                <FaSearch className="inline mr-2" />
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>
        {/* Genres */}
        {/* <div className="flex flex-wrap px-[10%]">
          <Genre
            CategoryAdd={CategoryAdd}
            CategoryRemove={CategoryRemove}
            genre={genre}
            value={value}
          />
        </div> */}
        {/* Pagination */}
        <Pagination handlePage={handlePage} activePage={page} />
        {/* Search Results */}
        <div className="w-full flex flex-wrap justify-center gap-3">
          {movies.map((movie, index) => {
            return <MoviePortrait movie={movie} key={index} />;
          })}
        </div>
        {/* Pagination */}
        <Pagination handlePage={handlePage} activePage={page} />
      </div>
    </>
  );
};

export default SearchPage;
