import React from "react";
import MovieCard from "./MovieCard";

// const MovieList = ({ title, movies }) => {
//   console.log("this is movies", movies);
//   return (
//     <div>
//       <div>
//         <h1>{title}</h1>
//         <div>
//           <MovieCard posterPath={movies? movies.map((i) => i.poster_path):null} />
//         </div>
//       </div>
//     </div>
//   );
// };

const MovieList = ({ title, movies }) => {

  return (
    <div className="p-4">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div
        className="flex overflow-x-scroll"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex">
          {movies && movies.length > 0 ? (
            movies.map((movie, index) => (
              <MovieCard key={index} posterPath={movie.poster_path} />
            ))
          ) : (
            <p>No movies available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
