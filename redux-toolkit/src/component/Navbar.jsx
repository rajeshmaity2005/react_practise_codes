import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme2, changeThemeToDark, changeThemeToLight } from '../redux/slices/themeSlice'
const Navbar = () => {

    const theme = useSelector((state) => state.theme.value)
    
    const changeTheme = useDispatch()

    return (
        <div>
            <h1>Theme is : {theme}</h1>
            <button
                onClick={() => {
                    changeTheme(changeThemeToLight())
                }}
            >Change Theme To Light</button>
            <button
                onClick={() => {
                    changeTheme(changeThemeToDark())
                }}
            >Change Theme To Dark</button>
            <button
                onClick={() => {
                    changeTheme(changeTheme2())
                }}
            >Change Theme</button>
        </div>
    )
}

export default Navbar
