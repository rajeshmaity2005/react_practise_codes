import React from 'react'
import Kodr from './Kodr'
import Kodex from './Kodex'
import { Link } from 'react-router-dom'

const Course = () => {
    return (
        <div>
            <div>
                <h1 className='text-3xl font-bold underline my-4'>Course Page</h1>
            </div>
            <div>

                <div className='flex gap-5'>
                    <Link className='text-xl font-semibold underline' to='/course/kodex'>Kodex</Link>
                    <Link className='text-xl font-semibold underline' to='/course/kodr'>Kodr</Link>
                </div>

            </div>
        </div>
    )
}

export default Course
