import React, { useState } from 'react'

const Navbar = (props) => {

    const [newTheme, setNewTheme] = useState('')

    return (
        <div className='nav'>
            {/* <h1>Your theme is {props.theme}.</h1> */}
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    props.changeTheme(newTheme)
                    setNewTheme('')
                }}>
                <input
                    value={newTheme}
                    onChange={(e) => {
                        setNewTheme(e.target.value)
                    }}
                    placeholder='Enter theme name'
                    type="text" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Navbar
