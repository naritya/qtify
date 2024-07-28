import React from "react";
import "./Navbar.css"; 
import Logo from "./Logoqtify" ;
import {Link} from "react-router-dom";
import Search from "./Search";
import Button from "./Button";

const Navbar=()=>{
    return(
    
        <nav className="Navbar" style={{fontStyle: 'Poppins'}}>
           
            <Logo />
            <Search />
           
            <Button  />
           
        </nav>
    
    );
}

export default Navbar;