import React from "react";
import "./Search.css";
import { ReactComponent as SearchIcon } from "./assets/search-icon.svg";

const Search=()=>{
    return(
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        {/* <label htmlFor="search" className="search-label"></label> */}
      <input  placeholder="Search a album of your choice" style={{width:"30rem", height:"2.5rem", margin:"0px", borderRadius:"0.4rem 0 0 0.4rem"}} />
      <button style={{marginLeft:"0px", height:"2.85rem", cursor:"pointer", borderRadius:"0 0.4rem 0.4rem 0"}}>
        <SearchIcon />
      </button>
    </div>);
}

export default Search;