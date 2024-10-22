import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovie } from '../utils/MoviesSlice'

const usePopularMovies = () => {
    const dispatch = useDispatch()
   
    const getPopularMovies = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS)
        const json = await response.json();
        console.log(json);
        dispatch(addPopularMovie(json.results))
    }
 
    useEffect(()=> {
        getPopularMovies()
    }, [])
  
}

export default usePopularMovies