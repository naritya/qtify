import React from "react";
import './App.css';
import Navbar from "./Navbar";
import {Outlet} from "react-router-dom";


const App=()=>{
  const [data, setData]= useState({});
  
  const generateData=(key, source)=>{
    source().then((data)=>{
      setData(prevState)=>{
        return{...prevData, [key]: data};
      });
    });
  };
  
useEffect(()=>{
  generateData("topAlbums", fetchTopAlbums);
  generateData("newAlbums",fetchNewAlbums);
  generateData("songs", fetchSongs);
  generateData("songs", fetchFilters);
}, []);

const {topAlbums=[], newAlbums=[], songs=[]}= data;

  return(
  <>
  <Navbar/>
 <Outlet context={{data: {topAlbums, newAlbums, songs}}}/>
  </>

  );
}


export default App;
