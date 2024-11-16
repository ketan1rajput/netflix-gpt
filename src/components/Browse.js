import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainers from './SecondaryContainers';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {
  useNowPlayingMovies();
  useTrendingMovies();
  useUpcomingMovies();
  
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainers />
      {
        // MainContainer
        // - VideoBackground
        // - VideoTitle
        // secondaryContainer
        // - MovieList * n
        //  - cards * n
      }
    </div>
  )
}

export default Browse