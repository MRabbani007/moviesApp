import React, { useEffect, useState } from "react";
// Imported Components
import Banner from "../components/Banner";
import MoviesHome from "../components/MoviesHome";
import Section from "../components/Section";
import CarouselGenres from "../components/CarouselGenres";
// Imported Data
import { MoviesList } from "../data/MoviesData";
// Imported Media
import BannerImg from "../assets/banner.jpg";
import { API_IMG_URL, fetchGenre, fetchTrending } from "../data/APIFunctions";
import SectionAPI from "../components/SectionAPI";

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
  let foundGenre = genreMap.find(
    (element) => genre.toLowerCase() === element.name.toLowerCase()
  );
  if (foundGenre !== null && foundGenre !== undefined) {
    return foundGenre.id;
  }
  return null;
};

// Custome Hook for generating genre URL
const useGenre = (value) => {
  if (value.length < 1) return "";
  // const GenreIds = value.map((g) => {
  //   return MapGenreIDs(g);
  // });
  // console.log("useGenre" + GenreIds);
  // return GenreIds.reduce((acc, curr) => {
  //   return acc + "," + curr;
  // });
  const GenreIds = value.map((g) => g.id);
  const temp = GenreIds.reduce((acc, curr) => acc + "," + curr);
  return temp;
};

const parseMovies = async (apiMovieList) => {
  // Array to store movie objects to pass to Section component
  const myMovieList = [];
  if (!!apiMovieList) {
    // push fetched data to myMovieList
    apiMovieList.map((oneMovie) => {
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
        image: API_IMG_URL + oneMovie.poster_path,
      });
    });
    return myMovieList;
  }
};

const MoviesPage = () => {
  // used to store the non-selected genre values
  const [genre, setGenre] = useState([]);
  // used to store the selected genre values
  const [value, setValue] = useState([]);
  // Custom Hook to generate URL for fetching Genres
  const [genreURL, setGenreURL] = useState(useGenre(""));
  const [movieYear, setMovieYear] = useState(2023);

  // TODO: handle dropdown
  const handleMovieYear = async (year) => {
    setMovieYear(year);
  };
  const handleMovieGenre = () => {};
  const handleMovieCountry = () => {};
  const handleMovieRating = () => {};

  //Adding a particular genre to the selected array
  const CategoryAdd = (genres) => {
    //first - select everything that's inside of values using the spread operator
    //second - add those genres that are being sent from the non-selected arrays
    setValue([...value, genres]);
    //removing those genres from the non-selected array that have been added to the selected array.
    setGenre(genre.filter((g) => g.id !== genres.id));
    setGenreURL(useGenre([...value, genres]));
    setPage(1);
  };

  //removing a particular genre from the selected array
  const CategoryRemove = async (genres) => {
    setValue(value.filter((g) => g.id !== genres.id));
    setGenre([...genre, genres]);
    setGenreURL(useGenre(value.filter((g) => g.id !== genres.id)));
    setPage(1);
  };

  // Get List of Genres from API and load to carousel
  const handleGenre = async (type = "movie") => {
    try {
      let data = await fetchGenre();
      setGenre(data);
    } catch (error) {}
  };

  useEffect(() => {
    handleGenre();
  }, []);

  return (
    <div className="bg-slate-900">
      <div className="lg:px-[5%] px-2 overflow-hidden">
        <Banner BannerImg={BannerImg} />
        <MoviesHome
          CategoryAdd={CategoryAdd}
          CategoryRemove={CategoryRemove}
          handleMovieYear={handleMovieYear}
          handleMovieGenre={handleMovieGenre}
          handleMovieCountry={handleMovieCountry}
          handleMovieRating={handleMovieRating}
          genre={genre}
          value={value}
        />
        {/* <SectionAPI page={1} title={"Trending"} genreurl={genreURL} /> */}
        <SectionAPI page={1} title={"Trending"} genreurl={genreURL} />
        <SectionAPI page={2} title={"Film Premiers"} genreurl={genreURL} />
        <CarouselGenres />
        <SectionAPI page={3} title={"Best Films"} genreurl={genreURL} />
        <SectionAPI page={4} title={"IVI's Choice"} genreurl={genreURL} />
        <SectionAPI page={5} title={"Movies in 4K UHD"} genreurl={genreURL} />
      </div>
    </div>
  );
};

export default MoviesPage;
