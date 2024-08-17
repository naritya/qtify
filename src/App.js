import React, {useState, useEffect} from "react";
import './App.css';
import Navbar from "./Navbar";
import {Outlet} from "react-router-dom";
import {fetchTopAlbums, fetchNewAlbums, fetchSongs, fetchFilters} from "./api.js"
import  StyledEngineProvider  from "@mui/material/StyledEngineProvider";

const App=()=>{
  const [data, setData]= useState({});
  
  const generateData=(key, source)=>{
    source().then((data)=>{
      setData((prevState)=>{
        return({...prevState, [key]: data});
      });
    });
  };
  
useEffect(()=>{
  generateData("topAlbums", fetchTopAlbums);
  generateData("newAlbums",fetchNewAlbums);
  generateData("songs", fetchSongs);
  generateData("songs", fetchFilters);
}, []);

const {topAlbums=[], newAlbums=[], songs=[], genres=[]}= data;

  return(
  <>
  <StyledEngineProvider injectFirst>
  <Navbar/>
 <Outlet context={{data: {topAlbums, newAlbums, songs}}}/>
 </StyledEngineProvider>
  </>

  );
}



export default App;
