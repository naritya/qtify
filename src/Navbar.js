import React from "react";
import "./Navbar.css"; 
import Logo from "./Logoqtify" ;
import {Link} from "react-router-dom";
import Search from "./Search"

const Navbar=()=>{
    return(
    
        <nav className="Navbar">
           
            <Logo />
            <Search />
            <button>Give Feedback</button>
        </nav>
    
    );
}

export default Navbar;