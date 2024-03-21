import { useEffect, useState } from "react";
// Imported Components
import MoviePortrait from "../components/MoviePortrait";
import Pagination from "../components/Pagination";
// Imported Icons
import { FaTimes, FaSearch } from "react-icons/fa";
import { fetchSearch } from "../data/APIFunctions";
// Imported Media

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

  const handlePage = async (displayPage) => {
    setPage(displayPage);
  };

  const fetchMovies = async () => {
    let data = await fetchSearch(query, page);
    if (Array.isArray(data)) {
      setMovies(data);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [query, page]);

  return (
    <>
      {/* Container */}
      <div className="w-full min-h-screen pb-5 bg-slate-900">
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
        <Pagination handlePage={handlePage} activePage={page} pages={7} />
        {/* Search Results */}
        <div className="w-full sm:px-[5%] flex flex-wrap justify-center gap-3">
          {movies.map((movie, index) => {
            return <MoviePortrait movie={movie} key={index} />;
          })}
        </div>
        {/* Pagination */}
        <Pagination handlePage={handlePage} activePage={page} pages={7} />
      </div>
    </>
  );
};

export default SearchPage;
