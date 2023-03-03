import React, { useRef } from "react";
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/bundle'
import Link from "next/link";

type SliderProps = {
 data:{
  id: number;
  title: string;
  desc: string;
  bg: any;
  img: string;
 }[]
}


export const Slider = ({data}:SliderProps) => {



  return (
   
    <Swiper
    modules={[Navigation, Pagination, Scrollbar]}
   spaceBetween={20}
   grabCursor={true}
  navigation
  pagination={{clickable:true}}
      breakpoints={{
        340: { slidesPerView: 1.5 },
        780: { slidesPerView: 2.5 },
        900: { slidesPerView: 3 },
      }}
    >
 <div className="  z-[100]  w-full  ">
        {data.map((d)=> {
let title = d.title.toLocaleLowerCase().trim().replace(/ /g,"")
          return (
            <SwiperSlide key={d.id}  >
              <Link href={`/explore/${title}`}  >
              <div className="relative min-h-[200px] -z-20  rounded-md overflow-hidden   text-center py-4 px-2 grid  place-items-center font-bold tracking-wide text-gray-default"  >
                <h2 className="text-3xl z-20">{d.title}</h2>
                <p className="text-xl z-20">{d.desc}</p>
                <div className="h-full  absolute left-0 top-0 w-full ">
                  <div className={`bg-[rgba(0,0,0,0.5)]   h-full w-full z-[-10]`} ></div>
                  <img
                    src={d.img}
                    alt=""
                    className="absolute left-0 top-0 w-full h-full  z-[-20] object-cover "
                  />
                </div>
              </div>
              </Link>
             
            </SwiperSlide>
           );
        })} 
          
      </div>

          </Swiper>
  
  );
};

