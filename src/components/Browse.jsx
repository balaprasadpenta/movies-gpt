import Header from './Header'
import useNowPlayingMovies from '../customhooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../customhooks/usePopularMovies'

const Browse = () => {

    useNowPlayingMovies()
    usePopularMovies()
 
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
        {/* Main container
        - background video
        - video title
        secondary container
        - movie list * n
        - cards * n  */}
        
    </div>
  )
}

export default Browse