import React, { createContext, useEffect, useState } from 'react'
import { getData, getSelectedProductData } from '../api/ProductApi'
export const ProductDataContext = createContext()

const ProductContext = (elem) => {

    const [productData, setProductData] = useState([])
    const [selectedProductData, setSelectedProductData] = useState({})

    const setData = async () => {
        setProductData(await getData())
        
    }

    const setSelectedData = async (id) => {
        setSelectedProductData(await getSelectedProductData(id))
    }

    useEffect(function () {
        setData()
    }, [])
    
    return (
        <div>
            <ProductDataContext.Provider value={{ productData, selectedProductData, setSelectedData }}>
                {elem.children}
            </ProductDataContext.Provider>
        </div>
    )
}

export default ProductContext
