import React, {useEffect, useState, useSwiper} from 'react';
import {ReactComponent as LeftArrow} from "./assets/LeftArrow.svg";

export const CarouselLeftNavigation = () => {
const swiper= useSwiper();
const [isBeginning, setIsBeginning]= useState(swiper.isBeginning);

useEffect(()=>{
    swiper.on("slideChange", ()=>{
        setIsBeginning(swiper.isBeginning);
    });
}, []);

  return (
    <div className="CaraouselleftNavigation">
        {!isBeginning && <LeftArrow onCick={()=>swiper.slidePrev()}/>}
    </div>
  );
}

export default CarouselLeftNavigation;
