import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Link from "next/link";
const data = [
  {
    id: 1,
    title: "JavaScript",
    desc: "From frontend to backend",
    bg: "bg-[rgba(29,16,8,0.6)]",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYE4vlsJ-E4xZCv8vUvSJxXfI5_9MwFNq-5uajJdzkOpMxI_1pPOrb5eGKpieKlVrC9FI&usqp=CAU",
  },
  {
    id: 2,
    title: "React",
    desc: "Popular JS library",
    bg: "bg-[rgba(49,126,48,0.7)]",

    img: "https://commission.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2022-12/AdobeStock_481892214%20copyrighted.png?itok=sgtdm6jX",
  },
  {
    id: 3,
    title: "Next JS",
    desc: "A React Framework",
    bg: "bg-[rgba(9,26,88,0.5)]",

    img: "https://i1.wp.com/blogs.cfainstitute.org/investor/files/2014/02/Top-Anecdotal-signs-of-a-market-bubble-1.png?resize=940%2C575&ssl=1",
  },
];
export const Slider = () => {
 


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
        {data.map((d) => {
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
