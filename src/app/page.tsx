import React from "react";
import Image from "next/image";

export default function IDCard () {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-slate-200 p-12 rounded-lg shadow-lg max-w-4xl w-full flex items-center justify-center border-4
        border-sky-300 ">

{/* Background image */}

<div className="absolute inset-0 flex items-center justify-center ">
    <div className="relative w-full h-full max-w-[350px] max-h-[500px] ">
    <Image 
    src="/images/Background.jpg" 
    alt="Background image"
    width={350} 
    height={500}
    objectFit="cover"
    className="opacity-10"
    />
    </div>
</div>


{/*Left section*/}
  <div className="w-2/3 pr-4 pt-16 relative z-10" >

  {/*Logo*/}
  <img
    src={"/images/logo.png"}
    alt={"Logo"}
     className="absolute top-[-20px] left-0 h-18 w-16 z-10"
    />

  {/*Name*/}

    <p className="mb-2">
      <span className="text-sky-500">
        {" "}
        <strong>Name:</strong>
      </span>
      <span className="text-black font-bold"> Rana Muhammad Tahir</span>
      </p>

      <p className="mb-2">
      <span className="text-sky-500">
        {" "}
        <strong>Roll no:</strong>
      </span>
      <span className="text-black font-bold"> 00008505</span>
      </p>

      <p className="mb-2">
      <span className="text-sky-500">
        {" "}
        <strong>Distance Learning:</strong>
      </span>
      <span className="text-black font-bold"> No </span>
      </p>

      <p className="mb-2">
      <span className="text-sky-500">
        {" "}
        <strong>City:</strong>
      </span>
      <span className="text-black font-bold"> Karachi </span>
      </p>

      <p className="mb-2">
      <span className="text-sky-500">
        {" "}
        <strong>Center:</strong>
      </span>
      <span className="text-black font-bold"> Governor House Karachi </span>
      </p>

      <p className="mb-2">
      <span className="text-sky-500">
        {" "}
        <strong>Campus:</strong>
      </span>
      <span className="text-black font-bold"> Main </span>
      </p>

      <p className="mb-2">
      <span className="text-sky-500">
        {" "}
        <strong>Days/Time:</strong>
      </span>
      <span className="text-black font-bold"> Sunday-02:00 PM - 05:00 PM </span>
      </p>

      <p className="mb-2">
      <span className="text-sky-500">
        {" "}
        <strong>Batch 1</strong>
      </span>
    </p>


{/* Bottom-Section */}
    <div className="flex flex-col mt-4">
    <button className="relative w-full p-1 rounded-lg border border-grey-300 bg-blue-900 text-white items-center justify-center flex ">
    <span className="absolute inset-0 bg-slate-500 "
    style={{width: "50%"}}>
    </span>

    <span className="relative z-10"> Q1 & WMD </span>
    </button>
    </div>
    </div>

{/*Right Section*/}
  <div className="w-1/3 text-center relative z-10">
  <Image 
  src={"/images/Profilepic.jpeg"}
  alt={"Profile Picture"}
  width={800}
  height={800}
  className="rounded-lg mb-6 w-full"
  />
  
  <p className="border-t-2 border-t-slate-400 pt-2 font-bold text-sky-500 mt-10 text-2xl ">
  {" "} 
  Authorize Signature 
  </p>
</div>


    </div>
   </div>
 </div>
    
);
}

