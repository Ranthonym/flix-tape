import React from "react";

import classes from "./Movie.module.css";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = (movie) => {
  const poster =
    movie.movie.Poster === "N/A"
      ? DEFAULT_PLACEHOLDER_IMAGE
      : movie.movie.Poster;

  // console.log(movie);
  return (
    <div className={classes.Movie}>
      <h2>{movie.movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.movie.Title}`}
          src={poster}
        />
      </div>
      <p>({movie.movie.Year})</p>
    </div>
  );
};

export default Movie;
