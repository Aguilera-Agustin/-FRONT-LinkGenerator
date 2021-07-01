import { types } from "../types/types";

export const changeDarkMode = () => {
    const mode = JSON.parse(localStorage.getItem('darkMode')) === null? (true) : (JSON.parse(localStorage.getItem('darkMode')))
    localStorage.setItem('darkMode', !mode)
    return{
        type: types.uiDarkMode
    }
}