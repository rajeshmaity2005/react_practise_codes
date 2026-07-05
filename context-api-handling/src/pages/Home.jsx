import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  return (
    <div className='bg-black text-white h-screen w-screen flex flex-col justify-center items-center gap-10 '>
      <h2 className='text-8xl'>Home Page</h2>
      <button 
      onClick={()=>{
        navigate('/products')
      }}
      className='bg-amber-700 px-7 py-3 text-4xl rounded-xl cursor-pointer active:scale-99 
      '>Explore Our Products</button>
    </div>
  )
}

export default Home
