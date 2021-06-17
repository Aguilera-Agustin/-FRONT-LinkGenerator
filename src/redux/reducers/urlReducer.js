import { types } from '../types/types';

const initialState = {
    urlData:'',
    loading: true
}

const urlReducer = (state= initialState, action) => {
    switch (action.type) {
        case types.dbRetrieveData:
           return{
               ...state,
               urlData:action.payload,
           }
        case types.dbStartLoading:
            return{
                ...state,
                loading: true
            }
        case types.dbEndLoading:
            return{
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default urlReducer