import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

function PageNotFound() {
  return (
    <div>
        <Navbar/>
    <div className='flex flex-col items-center justify-center h-screen '>
<h1 className='font-bold '>404 Not Found</h1>
 <p>The page you are looking for does not exist.</p>
      </div>
      <Footer/>    

    </div>
  )
}

export default PageNotFound


