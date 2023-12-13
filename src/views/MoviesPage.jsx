import React, { useEffect, useState } from "react";
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
import Genre from "../components/Genre";

// Custome Hook for generating genre URL
const useGenre = (value) => {
  if (value.length < 1) return "";
  const GenreIds = value.map((g) => g.id);
  return GenreIds.reduce((acc, curr) => acc + "," + curr);
};

const MoviesPage = () => {
  // Store fetched movie data
  // initializing the state variable as an empty array
  const [state, setState] = useState([]);
  // keep a track of the page numbers
  const [page, setPage] = useState(1);
  // used to store the non-selected genre values
  const [genre, setGenre] = useState([]);
  // used to store the selected genre values
  const [value, setValue] = useState([]);
  // Custom Hook to generate URL for fetching Genres
  const [genreURL, setGenreURL] = useState(useGenre(""));
  // Access key for movies API
  const Access_key = "feadd565ad23c93f098a091d56bf86f0";
  // variable to store URL for fetching movies
  // Passing Access_Key, Language, Sort...
  const moviesAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${Access_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreURL}
  `;
  // variable to store URL for fetching movies
  const moviesAPI2 = `
  https://api.themoviedb.org/3/trending/all/day?api_key=${Access_key}`;
  // URL for loading posters
  const img_300 = "https://image.tmdb.org/t/p/w300";

  // Function to fetch data from API
  const fetchTrending = async () => {
    const data = await fetch(moviesAPI);
    // fetching data from API in JSON Format
    const dataJ = await data.json();
    //storing that data in the state
    setState(dataJ.results);
  };

  useEffect(() => {
    //calling the fetchTrending function only during the initial rendering of the app.
    fetchTrending();
  }, []);

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
    genres.map((item) => {
      foundGenre = genreMap.find((element) => item === element.id);
      if (foundGenre !== null && foundGenre !== undefined) {
        genreArray.push(foundGenre.name);
      }
    });
    return genreArray;
  };

  // Array to store movie objects to pass to Section component
  const myMovieList = [];

  // push fetched data to myMovieList
  state.map((oneMovie) => {
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

  /*
  adult: false;
  backdrop_path: "/z6OkT7XjzSrgstiTlld0jUvME9y.jpg";
  genre_ids: (4)[(18, 9648, 53, 878)];
  id: 726209;
  media_type: "movie";
  original_language: "en";
  original_title: "Leave the World Behind";
  overview: "A family's getaway to a luxurious rental home takes an ominous turn when a cyberattack knocks out their devices — and two strangers appear at their door.";
  popularity: 522.417;
  poster_path: "/29rhl1xopxA7JlGVVsf1UHfYPvN.jpg";
  release_date: "2023-11-22";
  title: "Leave the World Behind";
  video: false;
  vote_average: 6.674;
  vote_count: 457;
*/

  return (
    <div className="bg-slate-900 pt-[80px]">
      <Navbar />
      <div className="md:px-[5%] px-2 pb-5 overflow-hidden">
        <Banner BannerImg={BannerImg} />
        <Genre
          genre={genre}
          setGenre={setGenre}
          setPage={setPage}
          type="movie"
          value={value}
          useGenre={useGenre}
          setValue={setValue}
          setGenreURL={setGenreURL}
          fetchTrending={fetchTrending}
          Access_key={Access_key}
        />
        <MoviesHome />
        <Section title="Trending" Movies={myMovieList} />
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
