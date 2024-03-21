import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Imported Media
import MoviePortrait from "../components/MoviePortrait";
import useAuth from "../hooks/useAuth";
import { GlobalContext } from "../context/GlobalState";
import { fetchAPIMovie } from "../data/APIFunctions";

const MyIVIPage = () => {
  const { auth } = useAuth();
  const { bookmarks, handleBookmarksGet } = useContext(GlobalContext);

  const [movies, setMovies] = useState([]);

  // Fetch Movies on change of bookmarks
  useEffect(() => {
    if (Array.isArray(bookmarks)) {
      let temp = bookmarks.map(async (item) => {
        let temp = await fetchAPIMovie(item.name);
        setMovies((current) => [...current, temp]);
      });
      console.log(movies);
    }
  }, [bookmarks]);

  const fetchMovies = async () => {};

  // Reload Bookmarks when page is Loaded
  useEffect(() => {
    if (auth?.user) {
      handleBookmarksGet();
    }
  }, []);

  return (
    <>
      <div className="bg-slate-900 py-3">
        <div className="min-h-screen mx-auto w-[95%] text-slate-50 text-xl flex flex-wrap gap-3">
          {Array.isArray(bookmarks) &&
            bookmarks.map((movie, index) => {
              return <MoviePortrait movie={movie} key={index} />;
            })}
        </div>
      </div>
    </>
  );
};

export default MyIVIPage;
