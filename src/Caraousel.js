import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from "swiper";
// import {useSwiper} from "swiper/react";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";
import React , {useState, useEffect} from "react";

// const Controls=({data})=>{
//  const swiper= useSwiper();

// useEffect(()=>{
//     swiper.slideTo(0);
// }, [data]);

// return <></>;
// }

const Carousel= ({data, renderComponent})=>{
return(
    <div className="wrapper">
        <Swiper
        style={{padding: "0px 20px"}}
            initialSlide={0}
            modules={[Navigation]}
            slidesPerView={40}
            spaceBetween={40}
            allowTouchMove
            >
                {/* <Controls data={data} /> */}
                <CarouselLeftNavigation />
                <CarouselRightNavigation />
                {data.map((ele)=>(
                    <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
                ))};
                </Swiper>
            </div>
            );
                }
          export default Carousel;