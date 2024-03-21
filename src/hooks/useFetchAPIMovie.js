import { useEffect, useState } from "react";
import useAxiosPrivate from "./useAxiosPrivate";
import axios from "../api/axios";
import noImage from "../assets/noposter.png";

const useFetchAPIMovie = async () => {
  return { loading, movieDetails };
};

export default useFetchAPIMovie;
