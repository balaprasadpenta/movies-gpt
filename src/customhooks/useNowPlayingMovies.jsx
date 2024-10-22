import React from "react";
import { API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react'
import { addNowPlayingMovie } from '../utils/MoviesSlice'
import { useDispatch } from 'react-redux'

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await response.json();
    console.log(json.results);
    dispatch(addNowPlayingMovie(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
