import React from "react";
import LogoImage from "./assets/logoimage.png";
import "./Navbar.css"

const Logo=()=>{
    return(

<div className="logoDiv"><img  src={LogoImage} alt="logo" width={67}/></div>

);

}

export default Logo;