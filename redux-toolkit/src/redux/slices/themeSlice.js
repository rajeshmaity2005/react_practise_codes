import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: 'light'
    },
    reducers: {
        changeThemeToLight: (state) => {
            state.value = 'light'
        },
        changeThemeToDark: (state) => {
            state.value = 'dark'
        },
        changeTheme2: (state) => {
            if (state.value == 'light') {
                state.value = 'dark'
            } else {
                state.value = 'light'
            }
        }
    },

})

export const { changeThemeToDark, changeThemeToLight, changeTheme2 } = themeSlice.actions
export default themeSlice.reducer