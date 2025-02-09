import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home/Home'
import { Courses } from './Courses/Courses'
import list from './data/list.json'
import { SignUp } from './Components/SignUp'



const App = () => {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/course' element={<Courses />}/>
      <Route path='/signup' element={<SignUp />}/>
      </Routes>
      </div>
    </>
  )
}

export default App