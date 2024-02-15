import React from 'react'
import { Tick } from '../assets/SVGs'

export default function Features() {
return (
<div className="flex flex-col">
<div className="text-center text-xl lg:text-3xl xl:text-4xl mt-12 lg:mt-24 xl:mt-36 flex flex-col">No Need To Worry!
          <p className="font-bold text-primary-900  dark:text-secondary-200 my-4 text-3xl lg:text-6xl">
            Here is Best and Simple Solution
          </p>
<div className="flex justify-center flex-wrap w-9/12 sm:w-10/12 md:w-8/12 self-center py-2 sm:py-4 md:py-6 lg:py-8 text-left">
            {feature("Reunite with loved ones.")}
            {feature("Find missing persons.")}
            {feature("Locate lost loved ones.")}
            {feature("Check disaster levels.")}
            {feature("Discover last locations.")}
            {feature("Search and reunite families.")}
            {feature("Build connections, protect.")}
            {feature("Community Support")}
</div>
</div>
</div>
    );
  }
  
  const feature = (text) => {
return (
<p className="flex flex-row items-start gap-4 w-full sm:w-1/2 mb-2">
<Tick className="w-6 md:w-8 lg:w-12" />
{text}
</p>
);
};
  