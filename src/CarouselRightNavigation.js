import React, {useEffect, useState, useSwiper} from 'react';
import {ReactComponent as RightArrow} from "./assets/RightArrow.svg";

export const CarouselRightNavigation = () => {
const swiper= useSwiper();
const [isEnd, setIsEnd]= useState(swiper.isEnd);

useEffect(()=>{
    swiper.on("slideChange", ()=>{
        setIsEnd(swiper.isEnd);
    });
}, []);

  return (
    <div className="CarouselRightNavigation">
        {!isEnd && <RightArrow onCick={()=>swiper.slideNext()}/>}
    </div>
  );
}

export default CarouselRightNavigation;