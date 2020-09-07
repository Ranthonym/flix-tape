import React, { useState, useEffect } from "react";
import "./App.css";

import Search from "./components/Search/Search";
import Movie from "./components/Movie/Movie";

const MOVIE_API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=fd78d98e";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.Search);
      });
  }, []);

  const search = (searchValue) => {
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.Search);
      });
  };

  return (
    <div className="App">
      <header className="App-header">Welcome to Flix Tape!</header>
      <Search search={search} />
    </div>
  );
}

export default App;
