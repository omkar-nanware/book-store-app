import React from 'react'
import Navbar from '../Components/Navbar'
import { Course } from '../Components/Course'
import Footer from '../Components/Footer'

export const Courses = () => {
  return (
    <>
    <Navbar />
    <div className='min-h-screen'> 
    <Course />
    </div>
    <Footer />
    </>
  )
}
