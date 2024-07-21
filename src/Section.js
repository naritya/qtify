import React, {useState, useEffect} from "react";
import {Filter} from "./Filter";
import {Card, Cards} from "@mui/material";
import Caraousel from "./Caraousel";
import CircularProgress from '@mui/material/CircularProgress';


const Section=({title, data, filterSource, type})=>{
    const [filters, setFilters]= useState([{key: "all", label: "All"}]);
    const [selectedFilterIndex, setSelectedFilterIndex]= useState(0);
    const [carouselToggle, setCarouselToggle]= useState(true);

    const handleToggle=()=>{
        setCarouselToggle((prevState)=> !prevState);
    };

    useEffect(()=>{
        if(filterSource){
         filterSource().then((response)=>{
            const {data} = response;
            setFilters([...filters, ...data]);
         });
        }
    }, []);

    const showFilters= filters.length>1;

    const cardsToRender= data.filter((card)=>
        showFilters && selectedFilterIndex !==0
        ? card.genre.key === filters[selectedFilterIndex].key
        : card
    );

return(
    <div>
      <div className="header">
        <h3>{title}</h3>
        <h4 className="toogleText" onClick={handleToggle}>
            {!carouselToggle?"Collapse All" : "Show All"}
        </h4>
        </div>
      {showFilters &&(
        <div className="filterWrapper">
            <Filter filters={filters} selectedFilterIndex={selectedFilterIndex}
            />
        </div>
      )}

      {data.length===0? (
       <CircularProgress/>
      ):(
        <div className="cardsWrapper">
         {!carouselToggle? (
            <div className="wrapper">
            {cardsToRender.map((ele)=>(
            <Card data={ele} type={type}/>
         ))}
        </div>
      ):(
        <Caraousel 
        data={cardsToRender}
        renderComponent ={(data)=> <Card data={data} type={type} />}
      />
      )}
    </div>

    )}
    </div>
   
);
}

export default Section;