import React from 'react'
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import addTrailerVideo from "../utils/MoviesSlice"
import { useDispatch, useSelector } from "react-redux";

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();

    const trailerVideo = useSelector(store => store.movies.trailerVideo)

//   fetch trailer by api call 
 const getMovieVideos = async () => {
  try{
    const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    if(json?.results?.length){
    const filterData = json?.results?.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer))
  }else{
    console.log("no results found or results is undefined")
  }
}catch(error){
  console.log("failed to fetch movie videos: ", error)
}
 };
  useEffect(() => {
     !trailerVideo &&  getMovieVideos();
  }, []);


  return (
    <div>
       
    </div>
  )
}

export default useTrailerVideo