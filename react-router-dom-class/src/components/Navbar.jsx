import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='w-[100%] py-2 px-5 flex justify-between bg-[#222222] text-2xl '>
            <h2 className='font-extrabold text-amber-300'>Logo</h2>
            <div className='flex gap-6'>
                <Link to='/' >Home</Link>
                <Link to='/course' >Courses</Link>
                <Link to='/service' >Service</Link>
                <Link to='/about' >About Us</Link>
            </div>
        </div>
    )
}

export default Navbar
