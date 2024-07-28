import React from "react";
import Button from "./Button";
import Search from "./Search";
import './Navbar.css';
import LogoImage from "./assets/logoimage.png"


export default function Navbar(){
    return(
        <>
            <nav className="navbar">
                <div className="logoDiv"><img  src={LogoImage} alt="logo" width={67}/></div>
                 <Search search={"Search a song of your choice"}/>
                <Button children="Give Feedback"/>
            </nav>
        </>
    )
}