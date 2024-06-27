import React from "react";
import HeadphoneImage from "./assets/headphone.png";
import Hero from "./Hero.js";

const Home=()=>{
    return(<>
    <Hero text="100 thousand songs" image={HeadphoneImage} />
    </>);
};

export default Home;