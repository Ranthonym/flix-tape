import React, { useState } from "react";

import classes from "./Search.module.css";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const startSearching = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <div className={classes.Search}>
      <form className={classes.Form}>
        <input
          className={classes.Input}
          placeholder="Enter a movie name"
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input
          className={classes.Input}
          onClick={startSearching}
          type="submit"
          value="SEARCH"
        />
      </form>
    </div>
  );
};

export default Search;
