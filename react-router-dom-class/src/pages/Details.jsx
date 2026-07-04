import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {

    const params = useParams()
    

    return (
        <div>
            <h1 className='capitalize text-3xl font-bold underline fixed  left-1/2 -translate-x-1/2'>{params.id} Details Page</h1>
        </div>
    )
}

export default Details
