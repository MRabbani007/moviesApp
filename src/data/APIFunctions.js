// Imported Media
import noImage from "../assets/noposter.png";

// Access key for movies API
const Access_key = "feadd565ad23c93f098a091d56bf86f0";

// URL for loading posters
export const API_IMG_URL = "https://image.tmdb.org/t/p/w300";

// variable to store URL for fetching movies
const moviesAPI2 = `
    https://api.themoviedb.org/3/trending/all/day?api_key=${Access_key}`;

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
    image: movie.poster_path ? API_IMG_URL + movie.poster_path : noImage,
  };
  return result;
};

const parseMovies = (movies) => {
  console.log(movies);
  let result = [];
  movies.map((movie) => {
    result.push(parseMovie(movie));
  });
  return result;
};

// Function to fetch Movies list from API
export const fetchTrending = async (
  genreURL = "",
  page = 1,
  movieYear = ""
) => {
  // variable to store URL for fetching movies
  // Passing Access_Key, Language, Sort...
  const moviesAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${Access_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreURL}&year=${movieYear}
  `;
  try {
    console.log(genreURL, page);
    const data = await fetch(moviesAPI);
    // fetching data from API in JSON Format
    const dataJ = await data.json();

    return parseMovies(dataJ.results);
  } catch (error) {
    console.log("Error: Fetch API");
    return [];
  }
};

// Fetch Movie Genres from API
export const fetchGenre = async (type = "movie") => {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${Access_key}&language=en-US`
    );
    const { genres } = await data.json();
    return genres;
  } catch (error) {
    return "Error: Fetch API";
  }
};

// Function that takes movie title and fetches details from API
export const fetchAPIMovie = async (movieTitle) => {
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
    const data = await fetch(url, options);
    const jsonData = await data.json();
    const results = jsonData.results[0];
    if (results.title === movieTitle) {
      return results;
    } else {
      return {};
    }
    // let newMovie = parseMovie(JSON(data).results[0]);
    // setMovieDetails(newMovie);
  } catch (error) {
    console.error(error);
  } finally {
  }
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWFkZDU2NWFkMjNjOTNmMDk4YTA5MWQ1NmJmODZmMCIsInN1YiI6IjY1Nzg2OGE4ZjA0ZDAxMDExZTBmYWViNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i1CODTsIYh3_m6jRvhQmXECahHoRWYZ7fnGBIuCDQws",
  },
};

// Search functions by query
export const fetchSearch = async (
  query = "",
  page = 1,
  genreURL = "",
  language = "en-US"
) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&with_genres=${genreURL}&include_adult=true&language=${language}&page=${page}`;

  try {
    let data = await fetch(url, options);
    let dataJason = await data.json();
    let dataParse = parseMovies(dataJason.results);
    return dataParse;
  } catch (err) {
    console.error(err);
  }
};
