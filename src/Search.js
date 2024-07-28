import React from "react";
import "./Search.css";
import { ReactComponent as SearchIcon } from "./assets/search-icon.svg";

const Search=()=>{
    return(
    <form style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        {/* <label htmlFor="search" className="search-label"></label> */}
      <input  placeholder="Search a album of your choice" style={{ width:"30rem", height:"2.5rem", marginRight:"0px", borderRadius:"0.4rem 0 0 0.4rem"}} />
      <button type="submit" style={{margin:"0px", height:"2.83rem", cursor:"pointer", borderRadius:"0 0.4rem 0.4rem 0", borderLeft:"none"}}>
        <SearchIcon />
      </button>
    </form>);
}

export default Search;