import React from "react";
import {Tooltip, Chip} from "@mui/material"
import {Link} from "react-router-dom"
const Card=(data, type)=>{
    const getCard=(type)=>{
    switch(type)
    {
        case "album":{
            const {image, follows, title, slug, song}=data;
            return(
                <Tooltip title={`${sessionStorage.length}songs`} placement="top" arrow>
                <Link to={`/album/${slug}`}>
                <div className="wrapper">
                    <div className="card">
                        <img src={image} alt="album" loading="lazy" />
                        <div className="banner">
                            <Chip label={`${follows} Follows`} size="small" className="chip"/>
                        </div>
                    </div>
                </div>
                </Link>
                </Tooltip>
            );
        }
    
   case "song":{

    const {image, likes, title}= data;
    return(
    <div className="card">
        <img src={image} alt="song" loading="lazy" />
        <div className="banner" >
            <div className="pill">
                <p>{likes}</p>
            </div>
        </div>
    <div className="title">
        <p>{title}</p>
    </div>
    </div>
    );
   };

   default:{
    return(<></>);
   }
}

   
}
return getCard(type);
    }
export default Card;
