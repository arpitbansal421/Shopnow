import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

function Banner() {
    const [currentslide, setcurrentslide]=useState(0)
  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];

  const prevslide=()=>{
    setcurrentslide(currentslide==0?3:(prev)=>prev-1)

  }
  const nextslide=()=>{
    setcurrentslide(currentslide==3?0:(prev)=>prev+1)
  }
  return (
    <div  className="w-full h-auto overflow-x-hidden transition-transform duration-1000 ">
      <div className="w-screen h-[650vx] relative">
        <div className="flex w-[400vh] h-full">
          <img
            className="w-screen h-full object-cover"
            src={data[currentslide]}
            alt="Imgone"
            loading="priority"
          />
        
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-9 bottom-44">
          <div onClick={prevslide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
            <HiArrowLeft></HiArrowLeft>
          </div>

          <div onClick={nextslide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
            <HiArrowRight></HiArrowRight>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Banner;
