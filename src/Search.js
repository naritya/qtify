import React from "react";
import "./Search.css";
import { ReactComponent as SearchIcon } from "./assets/search-icon.svg";

const Search=()=>{
    return(<div style={{display:"flex", justifyContent:"center"}}>
        {/* <label htmlFor="search" className="search-label"></label> */}
      <input className="search" placeholder="Search a album of your choice" style={{width:"13rem"}} />
      <button >
        <SearchIcon />
      </button>
    </div>);
}

export default Search;