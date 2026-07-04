import React from 'react'
import { useParams } from 'react-router-dom'

const RandomName = () => {

    const params = useParams()

    return (
        <div>
            <h1 className='capitalize text-3xl font-bold underline fixed  left-1/2 -translate-x-1/2'>{params.courseId} Course Page</h1>
        </div>
    )
}

export default RandomName
