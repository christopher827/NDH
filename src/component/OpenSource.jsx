import React from 'react'
import {GithubLogo} from "../assets/SVGs"
import { Link } from 'react-router-dom'

function OpenSource() {
  return (
<div className="flex flex-col md:flex-row my-8 text-primary-600  mt-12 lg:mt-20 xl:mt-28">
<div className="w-full md:w-6/12 flex flex-col justify-center items-center ">
<Link to='/'><GithubLogo /></Link>
</div>
<div className="w-full md:w-6/12 flex flex-col justify-center my-6 md:my-0">
<p className="text-3xl sm:text-4xl md:text-5xl font-medium text-center">We&apos;re Open Source</p>
<p className="text-primary dark:text-secondary opacity-75 md:pr-10 my-6 md:text-lg 2xl:text-xl"> This website is open source, and you can find its code on GitHub. You are welcome to suggest features, provide feedback, and report any bugs. <br />Let&apos;s work together to improve this project as much as we can.</p>
<a href="https://github.com/christopher827" className="bg-primary dark:bg-secondary hover:ring-primary/30 ring-8 ring-primary/20 dark:ring-secondary/20 text-secondary dark:text-primary outline-none p-4 text-base md:text-xl lg:text-2xl w-max px-8 my-8 rounded-full transition-all ease-in-out active:scale-95 self-center sm:self-start" target="_blank"rel="noopener noreferrer" >View on Github</a>
      </div>
    </div> 
     )
}
export default OpenSource