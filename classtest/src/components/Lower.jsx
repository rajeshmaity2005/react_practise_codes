import React from 'react'

const Lower = (props) => {

    
    return (
        <div className='Lower p-5'>
            <h2 className='text-5xl text-[black] font-extrabold '>{props.cardData.username}</h2>
            <h5 className='text-2xl text-[#616161] font-medium '>{props.cardData.email}</h5>
            <h3 className='text-3xl text-[#373737] font-bold pt-9'>{props.cardData.role}</h3>
        </div>
    )
}

export default Lower
