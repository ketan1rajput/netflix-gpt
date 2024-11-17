import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainers from './SecondaryContainers';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  useNowPlayingMovies();
  useTrendingMovies();
  useUpcomingMovies();
  
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainers />
        </>
      )}
      {
        // MainContainer
        // - VideoBackground
        // - VideoTitle
        // secondaryContainer
        // - MovieList * n
        //  - cards * n
      }
    </div>
  );
}

export default Browse