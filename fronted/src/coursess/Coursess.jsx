import React from 'react'
import Navbar from '../componentss/Navbar'
import Course from '../componentss/Course';
import Footer from '../componentss/Footer';
 

export default function Coursess() {

  return (
   <>
   <Navbar/>
   <div className='min-h-screen'> 
     <Course/>

    </div>
   
   <Footer/>
   </>
  )
}
