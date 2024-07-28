import React from "react";
import Button from "./Button";
import Search from "./Search";
import './Navbar.css';
import Logo from "./Logoqtify";
import {Link} from "react-router-dom";


export default function Navbar(){
    return(
        <>
            <nav className="navbar">
                {/* <div className="logoDiv"><img  src={LogoImage} alt="logo" width={67}/></div> */}
                <Link to="/">
                <Logo />
                </Link>
                
                 <Search search={"Search a song of your choice"}/>
                <Button children="Give Feedback"/>
            </nav>
        </>
    )
}