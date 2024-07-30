import React from "react";
import HeadphoneImage from "./assets/headphone.png";
import Hero from "./Hero.js";
import {useOutletContext} from "react-router-dom";
import Section from "./Section.js";
import {fetchFilters} from "./api.js"

const Home=()=>{
    const{data}= useOutletContext();
    const {newAlbums, topAlbums, songs} = data;
    return(<>
    <Hero text={"100 Thousand Songs, ad-free"} image={HeadphoneImage} />
    <div className="wrapper">
    <Section title="Top Albums" data={topAlbums} type="album"/>
    <Section title="New Albums" data={newAlbums} type="album"/>
    <Section title="Songs" data={songs} filterSource={fetchFilters} type="song"/>
    </div>
    </>);
};

export default Home;