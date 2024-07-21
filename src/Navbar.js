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
            <div style={{"margin-right": "2rem"}}>
            <button style={{"background-color": "black", "color":"white", "margin": "5px"}}>Give Feedback</button>
            </div>
        </nav>
    
    );
}

export default Navbar;