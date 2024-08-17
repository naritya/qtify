import React from "react";
import {ReactComponent as SearchIcon} from "./assets/search-icon.svg"
import "./Search.css"

const Search = ({ search }) => {
  return (
    <form className="wrapper">
      <input className="search" placeholder={search}></input>
      <button className="searchButton" type="submit">
        <SearchIcon />
    
        
      </button>
    </form>
  );
};

export default Search;