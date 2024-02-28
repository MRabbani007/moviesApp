import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

// Imported Media
import noImage from "../assets/noposter.png";
import MoviePortrait from "../components/MoviePortrait";
import { fetchBookmark } from "../data/bookmarkFunctions";
import { ACTIONS } from "../data/utils";

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
  if (genres) {
    let foundGenre;
    if (genres.length) {
      genres.map((item) => {
        foundGenre = genreMap.find((element) => item === element.id);
        if (foundGenre !== null && foundGenre !== undefined) {
          genreArray.push(foundGenre.name);
        }
      });
    }
  }
  return genreArray;
};

// URL for loading posters
const img_300 = "https://image.tmdb.org/t/p/w300";

const parseMovie = (movie) => {
  if (!movie) {
    return {};
  }
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
  let movieRating = "";
  if (movie.hasOwnProperty("vote_average")) {
    movieRating = movie.vote_average.toFixed(1);
  }
  let result = {
    id: movie.id,
    name: movieName,
    category: MapGenres(movie.genre_ids),
    year: movieYear,
    rating: movieRating,
    time: "",
    image: movie.poster_path ? img_300 + movie.poster_path : noImage,
  };
  return result;
};

const MyIVIPage = ({ state }) => {
  const [user, setUser] = useState("");
  const [movies, setMovies] = useState([]);
  const [moviesDetails, setMoviesDetails] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Fetch Details from API
  const fetchAPIMovie = async (movieTitle) => {
    const url = `https://api.themoviedb.org/3/search/movie?query="${movieTitle}"&include_adult=false&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWFkZDU2NWFkMjNjOTNmMDk4YTA5MWQ1NmJmODZmMCIsInN1YiI6IjY1Nzg2OGE4ZjA0ZDAxMDExZTBmYWViNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i1CODTsIYh3_m6jRvhQmXECahHoRWYZ7fnGBIuCDQws",
      },
    };
    try {
      const data = await fetch(url, options)
        .then((res) => res.json())
        .then((json) => {
          let newMovie = parseMovie(json.results[0]);
          setMoviesDetails((currentMoviesDetails) => [
            ...currentMoviesDetails,
            newMovie,
          ]);
        })
        .catch((err) => console.error(err));
    } catch (error) {}
  };

  // check if user loggedin
  useEffect(() => {
    let signedInUser = localStorage.getItem("iviUser");
    if (location.state) {
      setUser(location.state.user);
      localStorage.setItem("iviUser", location.state.user);
    } else if (signedInUser !== null && signedInUser !== "undefined") {
      setUser(signedInUser);
    }
  }, []);

  useEffect(() => {
    if (movies.length !== 0) {
      movies.map((movie) => {
        fetchAPIMovie(movie);
      });
    }
  }, [movies]);

  // Load user movies
  useEffect(() => {
    if (user !== "") {
      handleGetBookmarks();
    }
  }, [user]);

  const handleGetBookmarks = async () => {
    let data = await fetchBookmark({
      type: ACTIONS.GET_BOOKMARKS,
      userName: user,
    });
    if (Array.isArray(data)) {
      setBookmarks(data);
    }
  };

  const handleBookmark = async (movie) => {
    let data = await fetchBookmark({
      type: ACTIONS.REMOVE_BOOKMARK,
      userName: user,
      movie: movie,
    });
    handleGetBookmarks();
  };

  const handleSignOut = () => {
    localStorage.removeItem("iviUser");
    setUser("");
    navigate("/moviesApp/myivi", { state: {} });
  };

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-slate-900 pt-[80px]">
        <div className="w-[90%] mx-auto text-slate-50">
          {!!user ? <h1 className="">hello {user}</h1> : <h1>Signin to IVI</h1>}
          {/* <button
            className="border-[1px] py-2 px-4 mx-5 rounded-lg text-slate-50"
            onClick={handleSignOut}
          >
            SignOut
          </button> */}
        </div>
        <div className="min-h-screen mx-auto w-[95%] text-slate-50 text-xl flex flex-wrap gap-3 my-3">
          {bookmarks.map((movie, index) => {
            return (
              <MoviePortrait
                movie={movie}
                key={index}
                handleBookmark={handleBookmark}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyIVIPage;
