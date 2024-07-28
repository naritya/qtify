import React from "react";
import "./Search.css";
import { ReactComponent as SearchIcon } from "./assets/search-icon.svg";

const Search=()=>{
    return(
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        {/* <label htmlFor="search" className="search-label"></label> */}
      <input className="search" placeholder="Search a album of your choice" style={{width:"13rem", height:"1.5rem", margin:"0px"}} />
      <button style={{margin:"0px"}}>
        <SearchIcon />
      </button>
    </div>);
}

export default Search;