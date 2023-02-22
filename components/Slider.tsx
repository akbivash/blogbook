import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Link from "next/link";


export const Slider = ({data}:any) => {
 


  return (
   
    <Swiper
   spaceBetween={20}
   grabCursor={true}
      // scrollbar={{ draggable: true }}
      breakpoints={{
        340: { slidesPerView: 1.5 },

        780: { slidesPerView: 2.5 },
        900: { slidesPerView: 3 },
      }}
    >
 <div className="  z-[100]  w-full ">
        {data.map((d:any)=> {
let title = d.title.toLocaleLowerCase().trim().replace(/ /g,"")
          return (
            <SwiperSlide key={d.id} style={{marginInline:'auto'}}>
              <Link href={`/learn/${title}`}>
              <div className="relative min-h-[200px]   rounded-md overflow-hidden   text-center py-4 px-2 grid  place-items-center font-bold tracking-wide text-white"  >
                <h2 className="text-3xl z-20">{d.title}</h2>
                <p className="text-xl z-20">{d.desc}</p>
                <div className="h-full  absolute left-0 top-0 w-full ">
                  <div className={`  ${d.bg} h-full w-full z-[-10]`}></div>
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
