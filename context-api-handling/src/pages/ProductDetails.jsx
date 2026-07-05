import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductDataContext } from '../context/ProductContext'

const ProductDetails = () => {

  const { selectedProductData, productData, setSelectedData } = useContext(ProductDataContext)

  const { productId } = useParams()

  const selectedProduct = productData.find((elem) =>
    elem.id == productId
  )

  useEffect(function () {
    setSelectedData(productId)
  }, [productId])

  return (
    <div className='h-screen bg-black p-10 text-white flex flex-col gap-10'>
      <h2 className='text-4xl'>Product Details Page</h2>
      <div className='w-full flex justify-between gap-10'>
        <div className='w-[40%] h-full p-10 bg-[#171717] '>
          <img src={selectedProductData.image} alt="" />
        </div>
        <div className='w-[60%] h-full p-10 bg-[#171717] flex flex-col gap-10'>
          <h2 className='text-4xl'>{selectedProductData.title}</h2>
          <h2 className='text-4xl text-amber-300'>Price - ${selectedProductData.price}</h2>
          <div className='w-[50%] flex justify-between gap-3'>
            <button className='w-1/2 px-3 py-1 bg-[#3b3b3b] text-white rounded-sm active:scale-99' >Add to cart</button>
            <button className='w-1/2 px-3 py-1 bg-amber-300 text-black rounded-sm active:scale-99' >Buy Now</button>
          </div>
          <p>{selectedProductData.description}</p>
          <h2 className=' text-black font-medium w-fit text-sm px-5 py-1 rounded-full bg-amber-300'>{selectedProductData.category}</h2>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
