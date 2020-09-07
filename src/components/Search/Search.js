import React, { useState } from "react";

import classes from "./Search.module.css";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <form className={classes.Search}>
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input type="submit" value="SEARCH" />
    </form>
  );
};

export default Search;
