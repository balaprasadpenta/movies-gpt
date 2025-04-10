import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovie } from '../utils/MoviesSlice'

const usePopularMovies = () => {
    const dispatch = useDispatch()
   
    const popularMovies = useSelector(store => store.movies.popularMovies)

    const getPopularMovies = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS)
        const json = await response.json();
        console.log(json);
        dispatch(addPopularMovie(json.results))
    }
 
    useEffect(()=> {
        if(!popularMovies)
        getPopularMovies()
    }, [])
  
}

export default usePopularMovies