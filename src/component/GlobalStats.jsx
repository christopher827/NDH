import React from "react";
import {ChartBarIcon,TrendingDownIcon,UserGroupIcon,UserRemoveIcon} from "@heroicons/react/solid";

function Box({ children }) {
return (
<div className="transition cursor-pointer text-center w-48 rounded-2xl bg-primary p-6 text-secondary dark:bg-secondary dark:text-primary ring-8 ring-primary/20 dark:ring-secondary/20 text-xl hover:scale-[0.98] flex-shrink-0 flex flex-col gap-4 justify-evenly m-4 sm:m-6 font-bold">
 {children}
</div>
);
  }
function GlobalStats() {
return(
<>
<div className="text-center text-xl lg:text-3xl xl:text-4xl mt-16 font-semibold">
 What&apos;s happening globally due to natural disaster
<div className="flex flex-col md:flex-row justify-center items-center md:items-stretch w-[90%] mt-8 mx-auto flex-wrap  lg:mt-10">
<Box>
<UserRemoveIcon className="w-[70%] mx-auto stroke-[1.6]" />
Earthquakes claim countless precious lives.</Box>
 <Box>
<TrendingDownIcon className="w-[70%] mx-auto" />
Landslides bury lives, leaving grief.</Box>
<Box>
<ChartBarIcon className="w-[70%] mx-auto" />
Families torn apart, never reunited.</Box>
<Box>
 <UserGroupIcon className="w-[70%] mx-auto" />
 Families shattered by devastating floods.</Box>
</div>
 </div>
  </>
)
}
export default GlobalStats
