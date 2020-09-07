import React from "react";
import "./App.css";

import Search from "./components/Search/Search";

const MOVIE_API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=fd78d98e";

function App() {
  return (
    <div className="App">
      <header className="App-header">Welcome to Flix Tape!</header>
      <Search />
    </div>
  );
}

export default App;
