import React from "react";
import "./Navbar.css"; 
import Logo from "./Logoqtify" ;
import {Link} from "react-router-dom";
import Search from "./Search";
import Button from "./Button";


const Navbar=()=>{
    return(
       <div>
        <nav className="Navbar" >
           <Link to="/">
           <Logo />
           </Link>
            <Search />
            <Button/>
           
        </nav>
        </div>
    
    );
}

export default Navbar; 