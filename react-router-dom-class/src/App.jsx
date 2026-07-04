import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Service from './pages/Service'
import Navbar from './components/Navbar'
import About from './pages/About'
import Details from './pages/Details'
import Course from './pages/Course'
import RandomName from './pages/RandomName'
import NotFound from './pages/NotFound'


const App = () => {
  return (
    <div className='bg-black h-screen w-screen text-white'>
      <div>
        <Navbar />
      </div>
      <Routes>
        {/* Nested Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Course />} />
        <Route path='/service' element={<Service />} />
        <Route path='/about' element={<About />} />


        <Route path='/course/:courseId' element={<RandomName />} />

        <Route path='/course/:id/details' element={<Details />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
