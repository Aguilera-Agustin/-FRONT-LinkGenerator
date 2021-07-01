import { types } from '../types/types';

const initialState = {
    darkMode: JSON.parse(localStorage.getItem('darkMode')) === null?(true):(JSON.parse(localStorage.getItem('darkMode')))
}

const uiReducer = (state= initialState, action) => {
    switch (action.type) {
        case types.uiDarkMode:
           return{
               ...state,
               darkMode : !state.darkMode
           }
        default:
            return state;
    }
}

export default uiReducer