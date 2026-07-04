import React from 'react'
import Upper from './Upper'
import Lower from './Lower'

const Card = (e) => {

    console.log(e.cardData);
    
    return (
        <div className='Card h-[500px] w-[400px] bg-white rounded-2xl'>
            <Upper cardData={e.cardData}/>
            <Lower cardData={e.cardData}/>

        </div>
    )
}

export default Card
