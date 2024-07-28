import React from "react";
import LogoImage from "./assets/logoimage.png";

const Logo=()=>{
    return(
    <>
<img src={LogoImage}  width={67} alt="logo" style={{margin:"1.2rem", display:"block", boxSizing:"border-box", alignItems:"center", justifyContent:"center"}}/>
</>
);

}

export default Logo;