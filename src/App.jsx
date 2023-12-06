import { useState } from "react";
// Import Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Imported Components
import Navbar from "./components/Navbar";
import Middle from "./components/Middle";
import Offcanvas from "./components/Offcanvas";
import Footer from "./components/Footer";
import CarouselBanner from "./components/CarouselBanner";
import Movies from "./MoviesPage";
import AppRouter from "./AppRouter";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <AppRouter />
    </>
  );
}

export default App;
