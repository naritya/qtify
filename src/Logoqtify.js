import React from "react";
import LogoImage from "./assets/logoimage.png";

const Logo=()=>{
    return(
    <>
<img src={LogoImage} width={67} alt="Logo" style={{margin:"1rem", display:"flex", alignItems:"center"}}/>
</>
);

}

export default Logo;