import React from "react";
import { Routes, Route } from "react-router-dom";

import Movies from "./MoviesPage";
import App from "./App";
import Middle from "./components/Middle";
import Footer from "./components/Footer";
import MainPage from "./MainPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/movies" element={<Movies />}></Route>
    </Routes>
  );
};

export default AppRouter;