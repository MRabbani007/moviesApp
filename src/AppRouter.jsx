import React from "react";
import { Routes, Route } from "react-router-dom";

import Movies from "./MoviesPage";
import MainPage from "./MainPage";

const AppRouter = () => {
  // change app routes, true for deployed, false for development
  const appStatus = true;

  if (appStatus) {
    return (
      <Routes>
        {/* Routes for local run */}
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        {/* Routes for deploy */}
        <Route path="/moviesApp/" element={<MainPage />}></Route>
        <Route path="/moviesApp/movies" element={<Movies />}></Route>
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
      </Routes>
    );
  }
};

export default AppRouter;
