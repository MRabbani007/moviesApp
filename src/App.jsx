import React from "react";
// Import Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Imported Components
import Movies from "./views/MoviesPage";
import MainPage from "./views/MainPage";
import SearchPage from "./views/SearchPage";
import SigninPage from "./views/SigninPage";
import SignupPage from "./views/SignupPage";
import MyIVIPage from "./views/MyIVIPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/moviesApp/" element={<MainPage />}></Route>
        <Route path="/moviesApp/movies" element={<Movies />}></Route>
        <Route path="/moviesApp/search" element={<SearchPage />}></Route>
        <Route path="/moviesApp/signin" element={<SigninPage />}></Route>
        <Route path="/moviesApp/signup" element={<SignupPage />}></Route>
        <Route path="/moviesApp/myivi" element={<MyIVIPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
