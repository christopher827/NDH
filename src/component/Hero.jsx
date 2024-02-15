import React from 'react'
import {IoIosArrowDroprightCircle} from "react-icons/io"

function Hero() {
  return (
    <div>
<div className=" mx-auto flex flex-col items-center py-12 sm:py-24">
<div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-blue font-black leading-7 md:leading-10">
Building Hope<br/>
<span className="text-white">{" "}Rebuilding Lives{" "}</span>
 </h1>
<p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">Experience an app that unites those impacted by natural calamities, offering essential aid, timely information, and a supportive network. Through cutting-edge technology, we strive to promote resilience, reconnect loved ones, and forge resilient communities in challenging times</p>
</div>
</div>
    </div>  )
}

export default Hero