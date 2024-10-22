import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);

  if(!movies) return;
  const randomMovie = Math.floor(Math.random() * movies.length)
  const mainMovie = movies[randomMovie]
  console.log(mainMovie)

  const {original_title, overview, id} = mainMovie;
  console.log("videoId" +   + id)

  return (
    <div>
      <VideoTitle title={original_title} overview={overview}  />
      <VideoBackground movieId={id}/>
      
    </div>
  )
}

export default MainContainer