import { types } from '../types/types';

const initialState = {
    urlData:'',
    loading: false
}

const urlReducer = (state= initialState, action) => {
    switch (action.type) {
        case types.dbRetrieveData:
           return{
               ...state,
               urlData:action.payload,
               loading: false
           }
        default:
            return state;
    }
}

export default urlReducer