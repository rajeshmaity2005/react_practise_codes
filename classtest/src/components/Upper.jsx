import React from 'react'

const Upper = (props) => {
    console.log();
    
    return (
        <div className='Upper '>
            <img className=' h-[100%] w-[100%] rounded-2xl' src={props.cardData.profile} alt="" />
        </div>
    )
}

export default Upper
