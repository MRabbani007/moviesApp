import { useEffect, useState } from "react";

// Imported Components
import MyCarousel from "./MyCarousel";
import MoviePortrait from "./MoviePortrait";

// Imported icons
import { SlArrowRight } from "react-icons/sl";
import { fetchTrending } from "../data/APIFunctions";

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
  if (Array.isArray(genres)) {
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
  let foundGenre = genreMap.find((item) => genre === item.name);
  if (foundGenre !== null && foundGenre !== undefined) {
    return foundGenre.id;
  } else {
    return "";
  }
};

// Custome Hook for generating genre URL
const useGenre = (value) => {
  if (value.length === 0) return "";
  const GenreIds = value.map((g) => g.id);
  return GenreIds.reduce((acc, curr) => acc + "," + curr);
};

// **********
// Component that loads page of 20 movies and displays in carousel
// **********
const SectionAPI = ({ page = 1, title = "", genre = "", genreurl = "" }) => {
  const [movies, setMovies] = useState([]);
  const [genreURL, setGenreURL] = useState(() => {
    if (genre !== "") {
      return MapGenreIDs(genre);
    } else if (genreurl !== "") {
      return genreurl;
    } else {
      return "";
    }
  });

  // Function to fetch data from API
  const fetchMovies = async () => {
    let data = await fetchTrending(genreURL, page);
    if (Array.isArray(data)) {
      setMovies(data);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [genreURL]);

  useEffect(() => {
    setGenreURL(genre);
  }, [genre]);

  useEffect(() => {
    setGenreURL(genreurl);
  }, [genreurl]);

  return (
    <div className="w-full">
      <div className="heading text-slate-50 md:text-2xl text-lg py-2 font-bold">
        <span className="cursor-pointer w-full px-3 flex md:justify-start items-center justify-between">
          {title}
          <SlArrowRight className="text-slate-50 icon font-[900] mx-2" />
        </span>
      </div>
      <MyCarousel itemClass="w-fit" containerClass={"gap-3"}>
        {movies.map((movie, index) => {
          return <MoviePortrait movie={movie} key={index} />;
        })}
      </MyCarousel>
    </div>
  );
};

export default SectionAPI;
