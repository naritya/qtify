import React from "react";
import "./Hero.css";

const Hero=({text, image})=>{
    return(<div className="Hero">
    <div>
    <h1>{text}</h1>
   
    </div>

    <div>
        <img src={image} height={100} width={200} alt="headphone"/>
    </div>
    </div>);
}

export default Hero;

