// Access key for movies API
const Access_key = "feadd565ad23c93f098a091d56bf86f0";

// URL for loading posters
export const API_IMG_URL = "https://image.tmdb.org/t/p/w300";

// variable to store URL for fetching movies
const moviesAPI2 = `
    https://api.themoviedb.org/3/trending/all/day?api_key=${Access_key}`;

// Function to fetch data from API
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
    const data = await fetch(moviesAPI);
    // fetching data from API in JSON Format
    const dataJ = await data.json();
    //storing that data in the state
    return dataJ.results;
  } catch (error) {
    console.log("Error: Fetch API");
  }
};

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
