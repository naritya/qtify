import React from "react";
import "./Search.css";
import { ReactComponent as SearchIcon } from "./assets/search-icon.svg";

const Search=()=>{
    return(
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        {/* <label htmlFor="search" className="search-label"></label> */}
      <input  placeholder="Search a album of your choice" style={{width:"24rem", height:"1.4rem", margin:"0px"}} />
      <button style={{margin:"0px", border:"1px solid black", height:"100%", cursor:"pointer"}}>
        <SearchIcon />
      </button>
    </div>);
}

export default Search;