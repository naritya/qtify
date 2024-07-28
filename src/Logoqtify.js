import React from "react";
import LogoImage from "./assets/logoimage.png";

const Logo=()=>{
    return(
    <>
<img src={LogoImage} name="logo" width={67} alt="logo" style={{margin:"1rem", display:"flex", alignItems:"center", justifyContent:"center"}}/>
</>
);

}

export default Logo;