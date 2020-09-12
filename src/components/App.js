import React, { useEffect, useReducer } from "react";
import "./App.css";
import axios from "axios";

import Search from "./Search/Search";
import MovieCard from "./Movie/MovieCard";
import Header from "./Header/Header";

// import classes from "../src/App.module.css";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=fd78d98e";

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "API_REQUEST_INITIATED":
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case "API_REQUEST_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case "API_REQUEST_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get(MOVIE_API_URL).then((jsonResponse) => {
      dispatch({
        type: "API_REQUEST_SUCCESS",
        payload: jsonResponse.data.Search,
      });
    });
  }, []);

  const search = (searchValue) => {
    dispatch({
      type: "API_REQUEST_INITIATED",
    });

    axios
      .get(`https://www.omdbapi.com/?s=${searchValue}&apikey=fd78d98e`)
      .then((jsonResponse) => {
        if (jsonResponse.data.Response === "True") {
          dispatch({
            type: "API_REQUEST_SUCCESS",
            payload: jsonResponse.data.Search,
          });
        } else {
          dispatch({
            type: "API_REQUEST_FAILURE",
            error: jsonResponse.data.Error,
          });
        }
      });
  };

  const { movies, errorMessage, loading } = state;
  // console.log(loading);

  const foundMovies =
    loading && !errorMessage ? (
      // <img className="spinner" src={spinner} alt="Loading spinner" />
      <span>loading..</span>
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : (
      movies.map((movie, index) => (
        <MovieCard key={`${index}-${movie.Title}`} movie={movie} />
      ))
    );

  // console.log(movies);

  // movies.forEach((movie) => console.log(movie));

  return (
    <div className="App">
      <div className="m-container">
        <Header text="FlixTape" />

        <Search search={search} />

        <p className="App-intro">welcome to FlixTape</p>

        <div className="movie-list">{foundMovies}</div>
      </div>
    </div>
  );
}

export default App;
