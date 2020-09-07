import React, { useState, useEffect } from "react";
// import "./App.css";

import Search from "./components/Search/Search";
import Movie from "./components/Movie/Movie";

import classes from "../src/App.module.css";

const MOVIE_API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=fd78d98e";

function App() {
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.Search);
      });
  }, []);

  const search = (searchValue) => {
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=fd78d98e`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
        } else {
          setErrorMessage(jsonResponse.Error);
        }
      });
  };

  console.log(movies);

  return (
    <div className="App">
      <header className="App-header">Welcome to Flix Tape!</header>
      <Search search={search} />
      <div className={classes.Movies}>
        {!errorMessage ? (
          <span>nothing found</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
