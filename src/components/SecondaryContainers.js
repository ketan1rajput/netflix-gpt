import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainers = () => {
  const movies = useSelector((store) => store.movies);
  console.log("this is the movies", movies);
   
  return (
    <div className='bg-black'>
      <div className="relative z-20 -mt-52">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      </div>
      <div className='bg-black'>
        <MovieList title={"Trending"} movies={movies.trendingMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies?.results} />
      </div>
    </div>
  );
}

export default SecondaryContainers