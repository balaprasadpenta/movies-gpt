import Header from './Header'
import useNowPlayingMovies from '../customhooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../customhooks/usePopularMovies'
import GptSearchPage from './GptSearchPage'
import { useSelector } from 'react-redux'

const Browse = () => {
    const showGptSearch = useSelector(store => store.gptSearch.showGptSearch);
    useNowPlayingMovies()
    usePopularMovies()
 
  return (
    <div>
      <Header />
      {showGptSearch ? <GptSearchPage /> : 
      <>
         <MainContainer />
         <SecondaryContainer />
      </>
     }
      
    </div>
  )
}

export default Browse