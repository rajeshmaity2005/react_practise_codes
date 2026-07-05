import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom';

const Products = () => {

  const {productData} = useContext(ProductDataContext)

  let renderData = 'Loading...'

  if (productData.length > 0) {
    renderData = productData.map((elem, idx) => {
      return <Link
        key={idx}
        to={`/products/${elem.id}`}
        className='w-[355px] h-[430px] block bg-[#1a1a1a] p-6 flex flex-col justify-between items-center rounded-xl '>
        <div className='flex justify-center items-center w-[170px] overflow-hidden'>
          <img className='w-[150px] object-cover object-center' src={elem.image} alt="" />
        </div>

        <div className='w-full'>
          <h2 className='text-sm mb-3'>{elem.title}</h2>
          <h2 className='text-amber-300 text-2xl mb-3'>Price - ${elem.price}</h2>
          <div className='w-full flex justify-between gap-3'>
            <button className='w-1/2 px-3 py-1 bg-[#3b3b3b] text-white rounded-sm active:scale-99' >Add to cart</button>
            <button className='w-1/2 px-3 py-1 bg-amber-300 text-black rounded-sm active:scale-99' >Buy Now</button>
          </div>
        </div>

      </Link>
    })
  }

  return (
    <div className='h-[100%] bg-black p-10 text-white '>

      <h2 className='mb-10 w-[100%] top-2 left-2 text-8xl'>All Products</h2>

      <div className='flex flex-wrap gap-2'>
        {renderData}
      </div>
    </div>
  )
}

export default Products