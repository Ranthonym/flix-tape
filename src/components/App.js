import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Search from "./Search/Search";
import Movie from "./Movie/Movie";
import Header from "./Header/Header";

// import classes from "../src/App.module.css";

const MOVIE_API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=fd78d98e";

function App() {
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        // setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);

    axios
      .get(`https://www.omdbapi.com/?s=${searchValue}&apikey=fd78d98e`)
      .then((jsonResponse) => {
        if (jsonResponse.data.Response === "True") {
          setMovies(jsonResponse.data.Search);
          console.log(jsonResponse.data.Search[1]);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.data.Error);
          setLoading(false);
        }
      });
  };

  const foundMovies =
    loading && !errorMessage ? (
      // <img className="spinner" src={spinner} alt="Loading spinner" />
      <span>loading..</span>
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : (
      movies.map((movie, index) => (
        <Movie key={`${index}-${movie.Title}`} movie={movie} />
      ))
    );
  // const foundMovies = errorMessage ? (
  //   <div className="errorMessage">{errorMessage}</div>
  // ) : (
  //   movies.map((movie, index) => (
  //     <Movie key={`${index}-${movie.Title}`} movie={movie} />
  //   ))
  // );

  // console.log(`movie array:  ${movies}`);
  movies.forEach((movie) => console.log(movie));

  return (
    <div className="App">
      <div className="m-container">
        <Header text="FlixTape" />

        <Search search={search} />

        <p className="App-intro">welcome to FlixTape</p>

        <div className="movies">{foundMovies}</div>
      </div>
    </div>
  );
}

export default App;